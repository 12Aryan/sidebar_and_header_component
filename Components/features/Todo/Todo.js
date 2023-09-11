"use client";
import React, { useState } from "react";

const Todo = () => {
  const [task, setTask] = useState("");
  const [desc, setDesc] = useState("");
  const [todo, setTodo] = useState([]);
  const submitHandler = (e) => {
    e.preventDefault();
    console.log("task", task);
    console.log("desc", desc);
    setTodo([...todo, { task, desc }]);
    setTask("");
    setDesc("");
    console.log("todo", todo);
  };
  const deleteTask = (i) => {
    console.log("delte", i);
    let copyTask = [...todo];
    copyTask.splice(i, 1);
    setTodo(copyTask);
  };
  return (
    <>
      <div className="flex items-center justify-center p-5 bg-gray-400">
        <div className="header text-3xl  ">My Todo List</div>
      </div>
      <div className="flex items-center justify-center  p-2">
        <form action="" onSubmit={submitHandler}>
          <input
            type="text"
            value={task}
            placeholder="Enter task here"
            className="border-2 p-2 text-black border-zinc-800 rounded-xl"
            onChange={(e) => {
              setTask(e.target.value);
            }}
          />
          <input
            type="text"
            value={desc}
            placeholder="Enter Description here"
            className="border-2 p-2 text-black border-zinc-800 rounded-xl"
            onChange={(e) => {
              setDesc(e.target.value);
            }}
          />
          <button className="bg-black px-5 py-2 rounded">Add</button>
        </form>
      </div>
      <div className="todo-list bg-gray-950">
        {todo.length > 0
          ? todo.map((t, i) => {
              return (
                <>
                  <div className="flex justify-between px-5 py-5 ">
                    <div className="todo-list-items">{t.task}</div>

                    <div className="todo-list-items"> {t.desc}</div>
                    <button
                      onClick={() => {
                        deleteTask(i);
                      }}
                      className="bg-red-800 px-6 py-3 rounded"
                    >
                      delete
                    </button>
                  </div>
                </>
              );
            })
          : "No task availabel"}
      </div>
    </>
  );
};

export default Todo;
