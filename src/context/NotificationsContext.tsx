import { NotificationType } from "../types/types";
import React, { createContext, useContext, useState } from "react";

type NotificationsContextProviderProps = {
  children: React.ReactNode;
};

type NotificationsContextType = {
  notifications: NotificationType[];
  setNotifications: React.Dispatch<React.SetStateAction<NotificationType[]>>;
};

const NotificationsContext = createContext<
  NotificationsContextType | null
>(
  null,
);

export default function NotificationsContextProvider(
  { children }: NotificationsContextProviderProps,
) {
  const [notifications, setNotifications] = useState<NotificationType[]>([]);

  return (
    <NotificationsContext.Provider
      value={{
        notifications,
        setNotifications,
      }}
    >
      {children}
    </NotificationsContext.Provider>
  );
}

export function useNotificationsContext() {
  const context = useContext(NotificationsContext);

  if (context === null) {
    throw new Error(
      "NotificationsContextContext must be used within an NotificationsContextlProvider",
    );
  }
  return context;
}
