import { useNotificationsContext } from "../context/NotificationsContext";
import { NotificationType } from "../types/types";

export default function NotificationButtons(
  { notification }: {
    notification: NotificationType;
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
    <>
      <button
        type="button"
        onClick={() => handleArchiveOnClick(notification.id)}
        className="notification_button"
      >
        {notification.archived ? "Unarchive" : "Archive"}
      </button>
      <button
        type="button"
        onClick={() => handleReadOnClick(notification.id)}
        className="notification_button"
      >
        {notification.read ? "Mark as unread" : "Mark as read"}
      </button>
    </>
  );
}
