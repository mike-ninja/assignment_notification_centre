export const notificationsData = [
  {
    date: "2021-01-01",
    read: false,
    title: "New Task",
    archived: false,
    description: "Complete the assignment by Friday",
    category: "TASK",
    interactions: [
      {
        name: "John Doe",
        category: "TASK",
      },
    ],
  },
  {
    date: "2021-01-02",
    read: true,
    title: "Meeting Reminder",
    archived: false,
    description: "Team meeting at 2:00 PM",
    category: "REMINDER",
    interactions: null,
  },
  {
    date: "2021-01-02",
    read: false,
    title: "Comment on Project",
    archived: false,
    description: "Please review the latest changes in the project",
    category: "COMMENT",
    interactions: [
      {
        name: "Alice Smith",
        category: "READ",
      },
      {
        name: "Alice Smith",
        category: "COMMENT",
      },
    ],
  },
  {
    date: "2022-01-02",
    read: false,
    title: "New Task Assigned",
    archived: false,
    description: "Assign the marketing tasks to the team",
    category: "TASK",
    interactions: [
      {
        name: "Manager",
        category: "TASK",
      },
    ],
  },
  {
    date: "2022-03-02",
    read: true,
    title: "Project Update",
    archived: true,
    description: "The project has been successfully completed!",
    category: "COMMENT",
    interactions: [
      {
        name: "Project Team",
        category: "COMMENT",
      },
    ],
  },
] as const;
