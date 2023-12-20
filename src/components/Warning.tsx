import clsx from "clsx";
import "../styles/warning.css";
import { useEffect, useState } from "react";

export default function Warning() {
  const [warning, setWarning] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => {
      setWarning(true);
    }, 1000);

    setTimeout(() => {
      setWarning(false);
    }, 4000);
  }, []);

  return (
    <div
      className={clsx("warning_wrapper warning_wrapper_show", {
        "warning_wrapper_hide": !warning,
      })}
    >
      <h2 className="warning_header">
        Warning: Your notification will be automatically deleted after 60 days!
      </h2>
    </div>
  );
}
