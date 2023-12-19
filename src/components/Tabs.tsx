import clsx from "clsx";
import { TabType } from "../types/types";

export default function Tabs(
  { setTab, tab }: { setTab: (tab: TabType) => void; tab: TabType },
) {
  return (
    <div className="tabs_wrapper">
      <button
        type="button"
        onClick={() => setTab("Unarchived")}
        className={clsx("tab", tab === "Unarchived" && "active_tab")}
      >
        Unarchived
      </button>
      <button
        type="button"
        onClick={() => setTab("Archived")}
        className={clsx("tab", tab === "Archived" && "active_tab")}
      >
        Archived
      </button>
    </div>
  );
}
