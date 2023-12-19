import Tabs from "./Tabs";
import { useState } from "react";
import Archived from "./Archived";
import Unarchived from "./Unarchived";
import { TabType } from "../types/types";

export default function NotificationsDisplay() {
  const [tab, setTab] = useState<TabType>("Unarchived");

  return (
    <>
      <Tabs tab={tab} setTab={setTab} />
      {tab === "Archived" ? <Archived /> : <Unarchived />}
    </>
  );
}
