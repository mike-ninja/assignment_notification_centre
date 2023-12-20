import Loading from "./Loading";
import "../styles/notificationPage.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NotificationButtons from "./NotificationButtons";
import NotificationIcon from "./NotificationIcon";
import { useNotificationsContext } from "../context/NotificationsContext";

export default function NotificationPage() {
  const { id } = useParams<{ id: string }>();
  const [isLoading, setIsLoading] = useState(true);
  const { notifications } = useNotificationsContext();

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  const notification = notifications.find((notification) =>
    notification.id === id
  );

  if (!notification) {
    return (
      <>
        <div className="notificaton_page_header_wrapper">
          <h2 className="notification_page_title">
            Notification not found
          </h2>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="notificaton_page_header_wrapper">
        <h2 className="notification_page_title">
          {notification.title} | <NotificationIcon {...notification} />{" "}
          <span className="notification_page_title_category">
            {notification.category}
          </span>
        </h2>
        <p>{notification.description}</p>
      </div>
      {notification.interactions
        ? (
          <div className="interactions_wrapper">
            <h2 className="interactions_title">Interactions</h2>
            {notification.interactions.map((interaction, index) => (
              <div key={index} className="interactions_row_wrapper">
                <h3>
                  {interaction.name} interacted with a {interaction.category}
                </h3>
              </div>
            ))}
          </div>
        )
        : (
          <div className="interactions_wrapper">
            <h2 className="interactions_title">No Interactions</h2>
          </div>
        )}
      <div className="buttons_wrapper">
        <NotificationButtons notification={notification} />
        <a href="/" className="button link_home">Back to notifications</a>
      </div>
    </>
  );
}
