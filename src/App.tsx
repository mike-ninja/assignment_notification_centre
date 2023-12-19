import "./styles/global.css";
import { useEffect } from "react";
import { Notifications } from "./components";
import { notificationsData } from "./lib/data";
import { useNotificationsContext } from "./context/NotificationsContext";

function App() {
  const { setNotifications } = useNotificationsContext();

  useEffect(() => {
    setNotifications(
      notificationsData.map((notification, index) => ({
        id: `id-${index}`,
        title: notification.title,
        description: notification.description,
        date: new Date(notification.date),
        category: notification.category,
        read: notification.read,
        archived: notification.archived,
        interaction: notification.interaction,
      })),
    );
  }, [setNotifications]);

  return (
    <section className="section">
      <div className="container">
        <Notifications />
      </div>
    </section>
  );
}

export default App;
