import React, { useState } from "react";

const TaskInput = ({ addTask }) => {
  const [taskTitle, setTaskTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskTitle.trim()) {
      addTask({ title: taskTitle });
      setTaskTitle("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center justify-between mb-6 bg-gray-100 p-4 rounded-lg shadow-md">
      <input
        type="text"
        placeholder="Enter task title"
        value={taskTitle}
        onChange={(e) => setTaskTitle(e.target.value)}
        className="w-3/4 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
      />
      <button
        type="submit"
        className="ml-4 p-3 bg-blue-500 text-white rounded-lg shadow-lg hover:bg-blue-600 focus:outline-none transition"
      >
        Add Task
      </button>
    </form>
  );
};

export default TaskInput;
