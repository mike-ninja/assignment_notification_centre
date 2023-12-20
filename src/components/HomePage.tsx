import "../styles/global.css";
import Loading from "./Loading";
import { useEffect, useState } from "react";
import NotificationsDisplay from "./NotificationsDisplay";

export default function HomePage() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  return (
    <>
      {isLoading ? <Loading /> : <NotificationsDisplay />}
    </>
  );
}
