import dayjs from "dayjs";
import { NotificationType } from "../types/types";
import { useNotificationsContext } from "../context/NotificationsContext";
import NotificationIcon from "./NotificationIcon";

export default function NotificationCard(
  { notification, archiveButtonText }: {
    notification: NotificationType;
    archiveButtonText: string;
  },
) {
  const { notifications, setNotifications } = useNotificationsContext();

  const handleArchiveOnClick = (id: string) => {
    const newNotifications = [...notifications];
    const index = newNotifications.findIndex((noti) => noti.id === id);
    newNotifications[index].archived = !newNotifications[index].archived;
    setNotifications([...newNotifications]);
  };

  const handleReadOnClick = (id: string) => {
    const newNotifications = [...notifications];
    const index = newNotifications.findIndex((noti) => noti.id === id);
    newNotifications[index].read = !newNotifications[index].read;
    setNotifications([...newNotifications]);
  };

  return (
    <div className="notification_wrapper">
        <div className="notification_title_wrapper">
          <NotificationIcon notificationCategory={notification.category} />
          <h2 className="notification_title_header">{notification.title}</h2>
        </div>
        <p>{notification.description}</p>
        <p>{dayjs(notification.date).format("DD MMMM, YYYY")}</p>
      <div className="notification_buttons_wrapper">
        <button
          type="button"
          onClick={() => handleArchiveOnClick(notification.id)}
          className="notification_button"
        >
          {archiveButtonText}
        </button>
        <button
          type="button"
          onClick={() => handleReadOnClick(notification.id)}
          className="notification_button"
        >
          {notification.read ? "Mark as unread" : "Mark as read"}
        </button>
      </div>
    </div>
  );
}
