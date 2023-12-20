import clsx from "clsx";
import { FaTasks } from "react-icons/fa";
import { FaRegComment } from "react-icons/fa";
import { NotificationType } from "../types/types";
import { MdOutlineNotificationsActive } from "react-icons/md";

export default function NotificationIcon(
  notification: NotificationType,
) {
  return (
    <>
      {notification.category === "TASK" &&
        (
          <FaTasks
            className={clsx("notification_icon", {
              "notification_icon_bounce": !notification.read,
            })}
          />
        )}
      {notification.category === "REMINDER" &&
        (
          <MdOutlineNotificationsActive
            className={clsx("notification_icon", {
              "notification_icon_bounce": !notification.read,
            })}
          />
        )}
      {notification.category === "COMMENT" &&
        (
          <FaRegComment
            className={clsx("notification_icon", {
              "notification_icon_bounce": !notification.read,
            })}
          />
        )}
    </>
  );
}
