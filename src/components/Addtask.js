import React, { memo, useEffect, useState } from "react";
import { AiFillPlusCircle } from "react-icons/ai";
import Todo from "./Todo";

const Addtask = memo(
  ({
    countColor,
    setCountColor,
    setBgColor,
    bgColor,
    startColor,
    setStartColor,
    min,
    setMin,
    sec,
    setSec,
    start,
    setStart,
    op,
    setOp,
    task,
    setTask,
    diese,
    setdiese,
    setText,
    text,
    todos,
    setTodos,
    todo,
    setTodo,
  }) => {

    let t = "";

    useEffect(()=>{
      
    })


    const [clickTask, setClickTask] = useState(false);
    function remplirtask() {
      setTask(!task);
      setOp(false);
    }

    const inputTextHandler = (e) => {
      setText(e.target.value);
    };

    const submitTodoHandler = (e) => {
      if (text !== "") {
        setTodos([
          ...todos,
          {
            text: text,
            completed: false,
            id: Math.random() * 1000,
            select: false,
            edit : false,
          },
        ]);
        setTodo(text);
        setText("");
        ta();
      }
    };

    function ta() {
      for (let i = 0; i < todos.length; i++) {
        if (todos[i].select === true) {
          t = todos[i].text;
        }
      }
      return t;
    }
    function tr () {
      for (let i = 0 ; i<todos.length ; i++){
        if (todos[i].select === true) {
          return true;
        }
      }
      return false
    }

    return (
      <div
        className={`absolute mt-[42px] md:w-full  p-4 w-full ${bgColor} flex justify-center flex-wrap`}
      >
        <div
          className={`${
            (tr() )
              ? `absolute w-[200px] h-[50px] ${bgColor} flex justify-center 4 mt-[-100px]`
              : ""
          }`}
        >
          {` ${ta()}`}
        </div>

        <div className=" ">
          {todos.map((todo) => (
            <div className={`${bgColor} `}>
              <Todo
                key={todo.id}
                todos={todos}
                setTodos={setTodos}
                countColor={countColor}
                text={todo.text}
                todo={todo}
                clickTask={clickTask}
                setClickTask={setClickTask}
                select={todo.select}
                setTask={setTask}
                setText={setText}
                task={task}
                setOp={setOp}
                setTodo={setTodo}
              />
            </div>
          ))}
          <div
            onClick={() => remplirtask()}
            className=" border-dashed border-2 border-gray-400 w-[370px] md:w-[490px] mt-2 h-16 flex justify-center text-gray-300 items-center rounded hover:border-white hover:text-white  cursor-pointer"
          >
            <AiFillPlusCircle />
            <h1 className="ml-2">Add Task</h1>
          </div>

          <div
            className={`${
              task ? "block" : "hidden"
            }  relative mt-[-64px] text-black h-50 w-[370px] md:w-[490px]  z-9 bg-white text-sm rounded-lg drop-shadow-xl `}
          >
            <div>
              <input
                maxLength={28}
                value={text}
                onChange={inputTextHandler}
                type="text"
                placeholder="    What are you working on?"
                className="h-20 w-[340px] flex justify-center ml-4 rounded-lg lg:w-[450px] text-xl focus:outline-0"
              />{" "}

            </div>
            <div>
              <h2 className=" flex justify-start rounded-lg h-10 items-center  ml-4">
                {" "}
                Est promodoros
              </h2>
            </div>
            <div>
              <input
                type="number"
                min={0}
                placeholder=" 1"
                className="h-10 w-20 ml-4 bg-gray-200 rounded-md text-xl border-none focus:outline-0"
              />{" "}
              <button className="h-8 w-8 drop-shadow-sm bg-gray-100 border-2 absolute ml-3  mt-1 rounded">
                +
              </button>
              <button className="h-8 w-8 drop-shadow-sm bg-gray-100 border-2 absolute ml-12  mt-1 rounded ">
                -
              </button>
            </div>
            <div className="flex ">
              <h2 className="ml-4 mt-4 underline-offset-4 text-gray-500">
                + Add Note
              </h2>
              <h2 className="ml-4 mt-4 text-gray-500 mb-4">+ Add Project</h2>
            </div>
            <div className=" bg-gray-100 rounded-lg md:w-[480px] h-16 w-[370px]">
              <button
                className="h-10 w-20  ml-[190px] md:ml-[310px]  mt-4  text-gray-500 rounded "
                onClick={() => remplirtask()}
              >
                Cancel
              </button>
              <button
                onClick={submitTodoHandler}
                type="submit"
                className={`h-10 w-20  drop-shadow-sm  text-white border-2 absolute mt-4 rounded-md ${
                  text !== "" ? "bg-gray-900" : "bg-gray-400"
                }
            }`}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
);

export default Addtask;
