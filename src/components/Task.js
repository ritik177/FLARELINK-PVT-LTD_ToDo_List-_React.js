import React from "react";
import { FaTrash, FaCheck } from "react-icons/fa";
import TaskPriority from "./TaskPriority"; // Custom priority component

const Task = ({ task, deleteTask, toggleComplete, updatePriority }) => {
  return (
    <div
      className={`flex items-center justify-between p-4 bg-white rounded-xl shadow-lg transition-all transform hover:scale-105 ${task.completed ? "bg-green-200" : "bg-gray-100"}`}
    >
      <div className="flex items-center space-x-4">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => toggleComplete(task.id)}
          className="form-checkbox text-green-500 hover:scale-125 transition-transform"
        />
        <span
          className={`text-xl ${task.completed ? "line-through text-gray-400" : "text-black"} transition-all`}
        >
          {task.title}
        </span>
      </div>
      <div className="flex items-center space-x-4">
        <TaskPriority
          priority={task.priority}
          updatePriority={updatePriority}
          taskId={task.id}
        />
        <button
          onClick={() => deleteTask(task.id)}
          className="text-red-500 hover:text-red-700 transition-all transform hover:scale-110"
        >
          <FaTrash size={20} />
        </button>
      </div>
    </div>
  );
};

export default Task;
