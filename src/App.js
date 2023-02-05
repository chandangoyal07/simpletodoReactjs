import "./App.css";
import { useState } from "react";

function App() {
  const [newTask, setNewTask] = useState("");
  const [toDoList, setToDoList] = useState([]);

  const addTask = () => {
    setToDoList([...toDoList, newTask]);
  };

  const del = (taskName) => {
    setToDoList(toDoList.filter((task) => taskName !== task));
  };

  return (
    <div className="App">
      <h1>Jai Shri Ram</h1>
      <h2>To Do App </h2>

      <div className="block1">
        <input onChange={(e) => setNewTask(e.target.value)} />
        <button onClick={addTask}>Add Task</button>
      </div>
      <div className="display">
        {toDoList.map((task) => {
          return (
            <div>
              <h1>{task}</h1>
              <button onClick={() => del(task)}>Delete</button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
