import dayjs from "dayjs";
import "../styles/notificationCard.css";
import NotificationIcon from "./NotificationIcon";
import { NotificationType } from "../types/types";
import NotificationButtons from "./NotificationButtons";
import { useCheckedNotificationsContext } from "../context/CheckedNotificationsContext";

export default function NotificationCard(
  { notification, index }: {
    notification: NotificationType;
    index: number;
  },
) {
  const { checkedNotifications, setCheckedNotifications } =
    useCheckedNotificationsContext();

  return (
    <div
      style={{
        backgroundColor: notification.read ? "#C5D8D1" : "transparent",
      }}
      className="notification_wrapper"
    >
      <a href={`/notification/${notification.id}`}>
        <div className="notification_title_wrapper">
          <div className="checkbox_container">
            <input
              type="checkbox"
              className="checkbox_input"
              checked={checkedNotifications.includes(index)}
              onChange={() => {
                const isChecked = checkedNotifications.includes(index);
                if (isChecked) {
                  setCheckedNotifications(
                    checkedNotifications.filter((item) => item !== index),
                  );
                } else {
                  setCheckedNotifications([...checkedNotifications, index]);
                }
              }}
            />
          </div>
          <NotificationIcon {...notification} />
          <h2 className="notification_title_header">{notification.title}</h2>
        </div>
        <p style={{ paddingLeft: 10 }}>{notification.description}</p>
        <p style={{ paddingLeft: 10 }}>
          {dayjs(notification.date).format("DD MMMM, YYYY")}
        </p>
      </a>
      <div className="notification_buttons_wrapper">
        <NotificationButtons notification={notification} />
      </div>
    </div>
  );
}
