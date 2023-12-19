export type CategoryType = "TASK" | "REMINDER" | "COMMENT";

type InteractionType = {
  name: string;
  category: CategoryType;
};

export type NotificationType = {
  id: string;
  date: Date;
  read: boolean;
  title: string;
  archived: boolean;
  description: string;
  category: CategoryType;
  interactions: InteractionType[] | null;
};

export type TabType = "Unarchived" | "Archived";
