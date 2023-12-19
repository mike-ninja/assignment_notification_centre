import "../styles/global.css";
import { useEffect, useState } from "react";
import NotificationsDisplay from "./NotificationsDisplay";
import Loading from "./Loading";

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
