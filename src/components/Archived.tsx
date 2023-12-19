import { Fragment } from "react";
import NotificationCard from "./NotificationCard";
import { useNotificationsContext } from "../context/NotificationsContext";

export default function Archived() {
  const { notifications } = useNotificationsContext();
  return (
    <div className="notifications_wrapper">
      {notifications.map((noti) =>
        noti.archived === false ? null : (
          <Fragment key={noti.id}>
            <NotificationCard notification={noti} />
          </Fragment>
        )
      )}
    </div>
  );
}
