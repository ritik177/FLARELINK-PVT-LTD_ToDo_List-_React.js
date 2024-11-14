import React from "react";

const TaskPriority = ({ priority, updatePriority, taskId }) => {
  const priorityColors = {
    low: "bg-green-300",
    medium: "bg-yellow-300",
    high: "bg-red-300",
  };

  return (
    <select
      value={priority}
      onChange={(e) => updatePriority(taskId, e.target.value)}
      className={`p-2 rounded-xl shadow-sm ${priorityColors[priority]} focus:outline-none focus:ring-2 focus:ring-indigo-400 transition-all`}
    >
      <option value="low">Low</option>
      <option value="medium">Medium</option>
      <option value="high">High</option>
    </select>
  );
};

export default TaskPriority;
