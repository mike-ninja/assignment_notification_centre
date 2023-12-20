import { useEffect } from "react";
import { notificationsData } from "./lib/data";
import { HomePage, NotificationPage, Warning } from "./components";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
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
        interactions: Array.isArray(notification.interactions)
          ? [...notification.interactions]
          : null,
      })),
    );
  }, [setNotifications]);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/notification/:id",
      element: <NotificationPage />,
    },
  ]);

  return (
    <section className="section">
      <Warning />
      <div className="container">
        <RouterProvider router={router} />
      </div>
    </section>
  );
}

export default App;
