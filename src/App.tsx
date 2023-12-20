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
      element: (
        <>
          <Warning />
          <div className="container">
            <HomePage />
          </div>
        </>
      ),
    },
    {
      path: "/notification/:id",
      element: (
        <>
          <div className="container">
            <NotificationPage />
          </div>
        </>
      ),
    },
  ]);

  return (
    <section className="section">
      <RouterProvider router={router} />
    </section>
  );
}

export default App;
