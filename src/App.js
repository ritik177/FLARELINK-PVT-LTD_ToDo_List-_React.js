import React, { useState, useEffect } from "react";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";
import TaskSearch from "./components/TaskSearch";
import TaskSort from "./components/TaskSort";
import { motion } from "framer-motion"; // For animations

function App() {
  const [tasks, setTasks] = useState([]);
  const [search, setSearch] = useState("");
  const [sortOrder, setSortOrder] = useState("none");

  // Load tasks from localStorage when the app mounts
  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks"));
    if (storedTasks) {
      setTasks(storedTasks);
    }
  }, []);

  // Update localStorage whenever tasks change
  useEffect(() => {
    if (tasks.length > 0) {
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }
  }, [tasks]);

  const addTask = (task) => {
    setTasks([...tasks, { ...task, id: Date.now(), completed: false, priority: "low" }]);
  };

  const deleteTask = (id) => {
    // Delete the task from state
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);

    // Update localStorage immediately after deleting the task
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  };

  const toggleComplete = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const updatePriority = (id, priority) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, priority } : task
    ));
  };

  const filteredTasks = tasks.filter(task => 
    task.title.toLowerCase().includes(search.toLowerCase())
  );

  const sortedTasks = sortOrder === "priority"
    ? [...filteredTasks].sort((a, b) => a.priority.localeCompare(b.priority))
    : filteredTasks;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-gradient-to-br from-teal-400 via-blue-500 to-purple-600 rounded-lg shadow-xl">
      <motion.h1 
        className="text-5xl font-extrabold text-center text-white mb-8" 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Task Manager
      </motion.h1>

      {/* Task Input */}
      <div className="mb-6 w-full max-w-lg">
        <TaskInput addTask={addTask} />
      </div>

      {/* Task Search */}
      <div className="mb-6 w-full max-w-lg">
        <TaskSearch setSearch={setSearch} />
      </div>

      {/* Task Sort */}
      <div className="mb-6 w-full max-w-lg">
        <TaskSort setSortOrder={setSortOrder} />
      </div>

      {/* Task List */}
      <div className="space-y-4 w-full max-w-lg">
        <motion.div 
          className="transition-all duration-500 ease-in-out"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <TaskList 
            tasks={sortedTasks}
            deleteTask={deleteTask}
            toggleComplete={toggleComplete}
            updatePriority={updatePriority}
          />
        </motion.div>
      </div>
    </div>
  );
}

export default App;
