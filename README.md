# To-Do List Web App (v3)

This repository contains the third edition of a **To-Do List** web app built using **React**, **TypeScript**, and **Tailwind CSS**. Initially developed in JavaScript, this project evolved over time with bug fixes, feature additions, and technology shifts from **JavaScript** to **TypeScript** and **CSS** to **Tailwind CSS**.

Feel free to explore, copy, and learn from this project—it's a great hands-on beginner project to help you get familiar with React, TypeScript, and Tailwind CSS!

## Table of Contents
- Features
- Technologies Used
- Project Structure
- How It Works
- Local Setup
- Usage
- Future Improvements

## Features
- **Persistent Data**: Tasks are saved in **localStorage**, ensuring they remain available even after refreshing or reopening the browser.
- **Input Validations**: Prevents blank submissions and provides feedback if attempted.
- **Task Management**: Users can:
  - Add tasks via the "Add" button or by pressing **Enter**.
  - Toggle task completion (done/not done) by clicking on the task.
  - Remove tasks by clicking the trash/bin icon.
- **Visual Feedback**: Tasks marked as "done" change from an empty circle icon to a ticked circle.

## Technologies Used
- **React**: Component-based structure for building dynamic UI.
- **TypeScript**: Type-safe development and improved scalability.
- **Tailwind CSS**: For styling the application with utility-first CSS classes.
- **LocalStorage**: Storing task data and completion statuses persistently.

## Project Structure
```
├── src
│   ├── assets
│   │   └── Images      # Images for icons like trash and checkmarks
|   ├── ToDo.tsx        # To-do list componet 
│   ├── main.tsx        # Main application
│   └── index.css       # React entry point
├── public              # Static assets like HTML
├── package.json        # Project dependencies
└── tailwind.config.js  # Tailwind CSS configuration
```

## How It Works
1. **Task Addition**: Users can enter a task via the input field and either click the "Add" button or press **Enter** to add the task to the list.
2. **Task Display**: All tasks are displayed in a list with options to mark as done/not done and delete.
3. **Persistent Data**: Tasks and their done status are stored in the browser’s `localStorage`. Upon loading the app, stored tasks are retrieved and displayed.

### LocalStorage Handling:
- `tasks`: Stores the array of task strings.
- `status`: Stores the boolean values representing whether tasks are marked as done.

  
### Steps to Run Locally
1. Clone the repository:
   ```bash
   git clone https://github.com/M-Abdullah12/To-do-list.git
   ```
2. Install the dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm start
   ```

## Usage
1. **Adding Tasks**: Type in the input field and click "Add" or press **Enter**.
2. **Marking Tasks**: Click on any task to toggle between done/not done.
3. **Deleting Tasks**: Click the trash icon to remove a task.

## Future Improvements
- **Categories**: Group tasks into different categories (e.g., Work, Personal).
