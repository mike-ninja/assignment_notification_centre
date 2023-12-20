import clsx from "clsx";
import { TabType } from "../types/types";
import { Fragment, useState } from "react";
import NotificationCard from "./NotificationCard";
import { useNotificationsContext } from "../context/NotificationsContext";
import CheckedNotificationsContextProvider, {
  useCheckedNotificationsContext,
} from "../context/CheckedNotificationsContext";
import "../styles/notificationsDisplay.css";

export default function NotificationsDisplay() {
  const [tab, setTab] = useState<TabType>("Unarchived");

  return (
    <>
      <CheckedNotificationsContextProvider>
        <Tabs tab={tab} setTab={setTab} />
        {tab === "Archived" ? <Archived /> : <Unarchived />}
        <BulkActions />
      </CheckedNotificationsContextProvider>
    </>
  );
}

function Tabs(
  { setTab, tab }: { setTab: (tab: TabType) => void; tab: TabType },
) {
  const { setCheckedNotifications } = useCheckedNotificationsContext();
  return (
    <div className="tabs_wrapper">
      <button
        type="button"
        onClick={() => {
          setTab("Unarchived");
          setCheckedNotifications([]);
        }}
        className={clsx("tab", tab === "Unarchived" && "active_tab")}
      >
        Unarchived
      </button>
      <button
        type="button"
        onClick={() => {
          setTab("Archived");
          setCheckedNotifications([]);
        }}
        className={clsx("tab", tab === "Archived" && "active_tab")}
      >
        Archived
      </button>
    </div>
  );
}

function Archived() {
  const { notifications } = useNotificationsContext();
  return (
    <div className="notifications_wrapper">
      {notifications.map((notification, index) =>
        notification.archived === false
          ? null
          : (
            <Fragment key={notification.id}>
              <NotificationCard notification={notification} index={index} />
            </Fragment>
          )
      )}
    </div>
  );
}

function Unarchived() {
  const { notifications } = useNotificationsContext();
  return (
    <div className="notifications_wrapper">
      {notifications.map((notification, index) =>
        notification.archived === true ? null : (
          <Fragment key={notification.id}>
            <NotificationCard notification={notification} index={index} />
          </Fragment>
        )
      )}
    </div>
  );
}

function BulkActions() {
  const { checkedNotifications, setCheckedNotifications } =
    useCheckedNotificationsContext();
  const { notifications, setNotifications } = useNotificationsContext();

  if (checkedNotifications.length === 0) return null;

  const handleArchiveOnClick = () => {
    const newNotifications = [...notifications];
    checkedNotifications.forEach((checkedNotification) => {
      newNotifications[checkedNotification].archived = true;
    });
    setNotifications([...newNotifications]);
    setCheckedNotifications([]);
  };

  const handleReadOnClick = () => {
    const newNotifications = [...notifications];
    checkedNotifications.forEach((checkedNotification) => {
      newNotifications[checkedNotification].read = true;
    });
    setNotifications([...newNotifications]);
    setCheckedNotifications([]);
  };

  const handleUnreadOnClick = () => {
    const newNotifications = [...notifications];
    checkedNotifications.forEach((checkedNotification) => {
      newNotifications[checkedNotification].read = false;
    });
    setNotifications([...newNotifications]);
    setCheckedNotifications([]);
  };

  return (
    <div className="bulk_actions_wrapper">
      <button
        type="button"
        onClick={handleArchiveOnClick}
        className="bulk_action_button"
      >
        Archive
      </button>
      <button
        type="button"
        onClick={handleReadOnClick}
        className="bulk_action_button"
      >
        Mark as read
      </button>
      <button
        type="button"
        onClick={handleUnreadOnClick}
        className="bulk_action_button"
      >
        Mark as unread
      </button>
    </div>
  );
}
