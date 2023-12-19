import { FaTasks } from "react-icons/fa";
import { CategoryType } from "../types/types";
import { MdOutlineNotificationsActive } from "react-icons/md";
import { FaRegComment } from "react-icons/fa";

export default function NotificationIcon(
  { notificationCategory }: { notificationCategory: CategoryType },
) {
  return (
    <>
      {notificationCategory === "TASK" &&
        <FaTasks className="notification_icon" />}
      {notificationCategory === "REMINDER" &&
        <MdOutlineNotificationsActive className="notification_icon" />}
      {notificationCategory === "COMMENT" &&
        <FaRegComment className="notification_icon" />}
    </>
  );
}
