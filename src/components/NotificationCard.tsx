import dayjs from "dayjs";
import { NotificationType } from "../types/types";
import NotificationButtons from "./NotificationButtons";
import NotificationIcon from "./NotificationIcon";

export default function NotificationCard(
  { notification }: {
    notification: NotificationType;
  },
) {
  return (
    <div className="notification_wrapper">
      <a href={`/notification/${notification.id}`}>
        <div className="notification_title_wrapper">
          <NotificationIcon notificationCategory={notification.category} />
          <h2 className="notification_title_header">{notification.title}</h2>
        </div>
        <p>{notification.description}</p>
        <p>{dayjs(notification.date).format("DD MMMM, YYYY")}</p>
      </a>
      <div className="notification_buttons_wrapper">
        <NotificationButtons notification={notification} />
      </div>
    </div>
  );
}
