export const notificationsData = [
  {
    title: "Notification 1",
    description: "Description 1",
    date: "2021-01-01",
    category: "TASK",
    read: false,
    archived: true,
    interaction: {
      name: "Interaction 1",
      category: "TASK",
    },
  },
  {
    title: "Notification 2",
    description: "Description 2",
    date: "2021-01-02",
    category: "REMINDER",
    read: false,
    archived: false,
    interaction: {
      name: "Interaction 2",
      category: "REMINDER",
    },
  },
  {
    title: "Notification 3",
    description: "Description 3",
    date: "2021-01-02",
    category: "REMINDER",
    read: false,
    archived: false,
    interaction: {
      name: "Interaction 3",
      category: "REMINDER",
    },
  },
] as const;
