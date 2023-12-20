import "../styles/notificationPage.css";
import { useParams } from "react-router-dom";
import NotificationButtons from "./NotificationButtons";
import { useNotificationsContext } from "../context/NotificationsContext";

export default function NotificationPage() {
  const { id } = useParams<{ id: string }>();
  const { notifications } = useNotificationsContext();
  const notification = notifications.find((notification) =>
    notification.id === id
  );

  if (!notification) {
    return (
      <>
        <h1>Notification not found</h1>
      </>
    );
  }

  return (
    <>
      <div>
        <h2>{notification.title}</h2>
        <p>{notification.description}</p>
      </div>
      {notification.interactions && (
        <div className="interactions_wrapper">
          <h2 style={{ marginTop: 15 }}>Interactions</h2>
          {notification.interactions.map((interaction, index) => (
            <div key={index} style={{ paddingLeft: 10 }}>
              <h3>{interaction.name}</h3>
              <p style={{ paddingLeft: 5 }}>{interaction.category}</p>
            </div>
          ))}
        </div>
      )}
      <div className="buttons_wrapper">
        <NotificationButtons notification={notification} />
      </div>
    </>
  );
}
