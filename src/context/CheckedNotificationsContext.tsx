import { createContext, useContext, useState } from "react";

type CheckedNotificationsContextProviderProps = {
  children: React.ReactNode;
};

type CheckedNotificationsContextType = {
  checkedNotifications: number[];
  setCheckedNotifications: React.Dispatch<React.SetStateAction<number[]>>;
};

const CheckedNotificationsContext = createContext<
  CheckedNotificationsContextType | null
>(null);

export default function CheckedNotificationsContextProvider(
  { children }: CheckedNotificationsContextProviderProps,
) {
  const [checkedNotifications, setCheckedNotifications] = useState<number[]>(
    [],
  );

  return (
    <CheckedNotificationsContext.Provider
      value={{
        checkedNotifications,
        setCheckedNotifications,
      }}
    >
      {children}
    </CheckedNotificationsContext.Provider>
  );
}

export function useCheckedNotificationsContext() {
  const context = useContext(CheckedNotificationsContext);

  if (context === null) {
    throw new Error(
      "CheckedNotificationsContextContext must be used within an CheckedNotificationsContextlProvider",
    );
  }
  return context;
}
