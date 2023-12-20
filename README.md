# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm install`

Downloads required packages. This only needs to run once to create `node_modules` directory.

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Some information

Dummy data in `/lib/data.ts` for an array notifications
  - Tasks
  - Reminders
  - Comments

### What was achieved

Base:
  - Displaying clickable notification which redirects to the notification page. Notification page includes more information, such as "interactions" from other members.
  - Ability to mark as unread, read & archived along with the ability to this by bulk selection.
  - Indication at start up that after 60 days their notifications will not be displayed.
  - Using setState & useEffect to manage the application.

Bonus:
  - Break unarchived/archived notifications into two tabs
  - Show a loading page (fake 1s delay)
  - Project was setup using create-react-app



