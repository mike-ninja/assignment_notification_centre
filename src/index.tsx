import App from "./App";
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import NotificationsContextProvider from "./context/NotificationsContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);
root.render(
  <React.StrictMode>
    <main>
      <NotificationsContextProvider>
        <App />
      </NotificationsContextProvider>
    </main>
  </React.StrictMode>,
);
