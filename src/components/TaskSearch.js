import React from "react";

const TaskSearch = ({ setSearch }) => {
  return (
    <input
      type="text"
      placeholder="Search tasks..."
      onChange={(e) => setSearch(e.target.value)}
      className="w-full p-3 mb-6 border border-indigo-500 rounded-xl shadow-md focus:ring-2 focus:ring-indigo-400 focus:outline-none transition-all"
    />
  );
};

export default TaskSearch;
