"use client";
import React, { useState } from "react";

const page = () => {
  const [title, settitle] = useState("");
  const [desc, setdesc] = useState("");

  const [mainTask, setmainTask] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    // console.log(title)
    // console.log(desc)

    setmainTask([...mainTask, { title, desc }]);
    settitle("");
    setdesc("");
    console.log(mainTask);
  };

  const deleteHandler = (i) => { 
    let copytask = [...mainTask]
    copytask.splice(i,1)
    setmainTask(copytask)

  }

  let renderTask = <h2>No task available </h2>;

  if (mainTask.length > 0) {
    renderTask = mainTask.map((t, i) => {
      return (
        <li key={i} className="flex items-center justify-evenly mb-5">
          <div className="flex justify-evenly mb-5 w-2/3 ">
            <h5 className="text-2xl font-semibold">{t.title}</h5>
            <h6 className="text-xl font-medium">{t.desc}</h6>
          </div>
          <button
            onClick={  () => {
              deleteHandler(i)
            }}
            className="bg-red-400 text-black px-4 py-3 rounded font-bold">
            DELETE
          </button>
        </li>
      );
    });
  }

  return (
    <>
      <h1 className="bg-black text-white p-5 text-5xl font-bold text-center">
        ToDo List
      </h1>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          className="text=2xl border-black-800 border-4 m-8 px-4 py-2 "
          placeholder="Enter Task Here "
          value={title}
          onChange={(e) =>
            // console.log(e.target.value)
            settitle(e.target.value)
          }
        />

        <input
          type="text"
          className="text=2xl border-black-800 border-4 m-8 px-4 py-2 "
          placeholder="Enter Decsricption Here "
          value={desc}
          onChange={(e) =>
            // console.log(e.target.value)
            setdesc(e.target.value)
          }
        />

        <button className="bg-black text-white px-4 py-3 tet-2xl font-bold rounded m-5">
          Add Task
        </button>
      </form>
      <hr />

      <div className="p-8 bg-slate-400">
        <ul>{renderTask}</ul>
      </div>
    </>
  );
};

export default page;
