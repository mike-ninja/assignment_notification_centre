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
    <div className="notification_wrapper">
      <div className="checkbox_wrapper">
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
        <label />
        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M 10 10 L 90 90"
            stroke="#000"
            stroke-dasharray="113"
            stroke-dashoffset="113"
          >
          </path>
          <path
            d="M 90 10 L 10 90"
            stroke="#000"
            stroke-dasharray="113"
            stroke-dashoffset="113"
          >
          </path>
        </svg>
      </div>

      <div className="notification_divider" />
      <a
        style={{
          backgroundColor: notification.read ? "#f9fafb" : "transparent",
        }}
        href={`/notification/${notification.id}`}
        className="notification_link"
      >
        <div className="notification_title_wrapper">
          <NotificationIcon {...notification} />
          <h2 className="notification_title_header">{notification.title}</h2>
        </div>
        <p style={{ paddingLeft: 10, fontStyle: "italic" }}>
          {notification.description}
        </p>
        <p style={{ paddingLeft: 10, fontWeight: "lighter" }}>
          {dayjs(notification.date).format("DD MMMM, YYYY")}
        </p>
      </a>
      <div className="notification_buttons_wrapper">
        <NotificationButtons notification={notification} />
      </div>
    </div>
  );
}
