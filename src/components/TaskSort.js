import React from "react";

const TaskSort = ({ setSortOrder }) => {
  return (
    <div className="flex flex-col sm:flex-row sm:space-x-6 mb-8 justify-center items-center sm:justify-start">
      <button
        onClick={() => setSortOrder("none")}
        className="px-8 py-3 bg-gradient-to-r from-teal-400 to-indigo-500 text-white rounded-xl shadow-lg hover:bg-gradient-to-r hover:from-indigo-500 hover:to-teal-400 focus:outline-none transform transition-all duration-300 ease-in-out hover:scale-105"
      >
        Sort by None
      </button>
      <button
        onClick={() => setSortOrder("priority")}
        className="mt-4 sm:mt-0 px-8 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-xl shadow-lg hover:bg-gradient-to-r hover:from-indigo-600 hover:to-purple-600 focus:outline-none transform transition-all duration-300 ease-in-out hover:scale-105"
      >
        Sort by Priority
      </button>
    </div>
  );
};

export default TaskSort;
