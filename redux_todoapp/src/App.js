import React, { useState } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { addToDo, deleteToDo } from "./features/TodoSlicer";

const App = () => {
  const arr = useSelector((state) => state.toDo.value);
  const dispatch = useDispatch();
  const [toDoElement, setToDoElement] = useState("");

  function inputFunction(e) {
    setToDoElement(e.target.value);
  }

  function addToDoElement() {
    if (toDoElement) {
      dispatch(addToDo(toDoElement));
      setToDoElement("");
    }
  }

  function deleteToDoFun(index) {
    dispatch(deleteToDo(index));
  }

  return (
    <div className="todo-container">
      <h2>📝 Todo App</h2>
      <div>
        <input
          type="text"
          value={toDoElement}
          placeholder="Enter a task..."
          onChange={(e) => inputFunction(e)}
        />
        <button
          className="add-btn"
          onClick={() => {
            addToDoElement();
          }}
        >
          Add
        </button>
      </div>
      <ul>
        {arr.map((value, index) => {
          return (
            <li key={index}>
              {value}
              <button
                className="delete-btn"
                onClick={() => {
                  deleteToDoFun(index);
                }}
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default App;
