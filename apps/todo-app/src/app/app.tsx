import React, { useState, FormEvent } from 'react';
import { Icon } from '@iconify/react';
import { v4 as uuidv4 } from 'uuid';

// Define the Task type with an id and name
type Task = {
  id: string;
  name: string;
};

// Task component props
type TaskProps = {
  task: Task;
  deleteTask: (taskId: string) => void;
};

// Task component
const Task: React.FC<TaskProps> = ({ task, deleteTask }) => (
  <div className="flex items-center justify-between p-2 border-b">
    <span>{task.name}</span>
    <button onClick={() => deleteTask(task.id)}>
      <Icon icon="mdi:delete" className="text-red-500" />
    </button>
  </div>
);

// TaskList component props
type TaskListProps = {
  tasks: Task[];
  deleteTask: (taskId: string) => void;
};

// TaskList component
const TaskList: React.FC<TaskListProps> = ({ tasks, deleteTask }) => (
  <div>
    {tasks.map((task) => (
      <Task key={task.id} task={task} deleteTask={deleteTask} />
    ))}
  </div>
);

// App component
const App: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTaskName, setNewTaskName] = useState('');

  // Function to add a new task
  const addTask = (e: FormEvent) => {
    e.preventDefault();
    if (newTaskName.trim()) {
      setTasks([...tasks, { id: uuidv4(), name: newTaskName }]);
      setNewTaskName('');
    }
  };

  // Function to delete a task
  const deleteTask = (taskId: string) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="p-4 max-w-sm mx-auto bg-white rounded-xl shadow-md">
        <h1 className="text-xl font-bold">To-Do List</h1>
        <form onSubmit={addTask} className="flex items-center space-x-2">
          <input
            className="border p-2 rounded"
            type="text"
            value={newTaskName}
            onChange={(e) => setNewTaskName(e.target.value)}
            placeholder="Add a new task"
          />
          <button type="submit" className="bg-blue-500 text-white p-2 rounded">
            <Icon icon="mdi:plus-circle" />
          </button>
        </form>
        <TaskList tasks={tasks} deleteTask={deleteTask} />
      </div>
    </div>
  );
};

export default App;
