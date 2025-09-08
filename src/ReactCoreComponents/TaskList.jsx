import React from "react";

const TaskList = ({ title }) => {
  const tasks = [
    { id: 1, title: "Do Laundry", completed: true },
    { id: 2, title: "Watch Movies", completed: false },
    { id: 3, title: "Go to Cinemas", completed: false },
    { id: 4, title: "Play Games", completed: true },
    { id: 5, title: "Have Rest", completed: true },
    { id: 6, title: "Make Dinner", completed: false },
  ];

  return (
    <div>
      <h1>{title}</h1>
      {tasks.map((task) => (
        <li key={task.id} style={{ color: task.completed ? "green" : "red" }}>
          {task.title}
        </li>
      ))}
    </div>
  );
};

export default TaskList;
