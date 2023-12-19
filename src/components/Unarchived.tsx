import React, { Fragment } from "react";
import { useNotificationsContext } from "../context/NotificationsContext";
import NotificationCard from "./NotificationCard";

export default function Unarchived() {
  const { notifications } = useNotificationsContext();
  return (
    <div className="notifications_wrapper">
      {notifications.map((noti) =>
        noti.archived === true ? null : (
          <Fragment key={noti.id}>
            <NotificationCard
              notification={noti}
            />
          </Fragment>
        )
      )}
    </div>
  );
}
