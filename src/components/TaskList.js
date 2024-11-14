import React from "react";
import Task from "./Task";

const TaskList = ({ tasks, deleteTask, toggleComplete, updatePriority }) => {
  return (
    <div className="space-y-4">
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          deleteTask={deleteTask}
          toggleComplete={toggleComplete}
          updatePriority={updatePriority}
        />
      ))}
    </div>
  );
};

export default TaskList;
