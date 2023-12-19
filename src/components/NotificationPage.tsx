import React from "react";
import { useParams } from "react-router-dom";
import { useNotificationsContext } from "../context/NotificationsContext";
import NotificationButtons from "./NotificationButtons";

export default function NotificationPage() {
  const { id } = useParams<{ id: string }>();
  const { notifications } = useNotificationsContext();
  const notification = notifications.find((notification) =>
    notification.id === id
  );

  if (!notification) {
    return (
      <>
        <h1>Notification not found</h1>
      </>
    );
  }

  return (
    <>
      <div>
        <h1>{notification.title}</h1>
        <p>{notification.description}</p>
      </div>
      {notification.interactions && (
        <div>
          {notification.interactions.map((interaction, index) => (
            <div key={index}>
              <h2>{interaction.name}</h2>
              <p>{interaction.category}</p>
            </div>
          ))}
        </div>
      )}
      <div>
        <NotificationButtons notification={notification} />
      </div>
    </>
  );
}
