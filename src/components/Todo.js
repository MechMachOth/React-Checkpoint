import { BsCheckCircleFill } from "react-icons/bs";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { MdOutlineEditNote } from "react-icons/md";
import React, { memo, useEffect } from "react";

const Todo = memo(
  ({
    id,
    todos,
    setTodos,
    countColor,
    text,
    todo,
    clickTask,
    setClickTask,
    select,
    setTask,
    setText,
    task,
    setOp,
    setTodo,
  }) => {
    if (todos.length < 2) {
      todos[0].select = true;
    }
    let t = "";

    const inputTextHandler = (e) => {
      todo.text=e.target.value;
      console.log(todo.text)
    };
    const submitTodoHandler = (e) => {

        todo.edit = false
        todo.select = true

        setTodo(text);
        setText("");
        ta();
      
    };

    function ta() {
      for (let i = 0; i < todos.length; i++) {
        if (todos[i].select === true) {
          t = todos[i].text;
        }
      }
      return t;
    }

    const deleteHandler = () => {
      setTodos(todos.filter((el) => el.id !== todo.id));
      if (todo.select === true ) {
        todos[0].select = true;
      }
      console.log(todos);


    };
    const canceltask = () => {
      todo.edit = false;
      console.log(todo.edit);
      console.log(todos); 
    };

    const editHandler = () => {
      setTask(false);

      todo.select = true;
      todo.edit = true;
      for (let i = 0; i < todos.length; i++) {
        if (todos[i].id !== todo.id) {
          todos[i].edit = false;
        }
      }
      console.log(todos);
    };

    const clickTasks = () => {
      setClickTask(!clickTask);
      todo.select = !select;
      let x = 0;
      for (let i = 0; i < todos.length; i++) {
        if (todos[i].id !== todo.id) {
          todos[i].select = false;
        }
        if (todos[i].select === true) {
          x=x+1;
        }
      }
      if (x === 0) {
        todos[0].select = true;
      }
    };
    return todo.edit === false ? (
      <div className={`bg-gray-300  rounded-lg hover:drop-shadow-md `}>
        <div
          onClick={clickTasks}
          className={`${countColor} w-[360px]  h-auto hover:border-l-4  hover:border-gray-400 hover:drop-shadow-md mt-2 flex rounded-lg items-center ${
            todo.select ? "border-l-4" : ""
          } md:w-[480px]`}
        >
          <BsCheckCircleFill className={`w-5 h-5 ml-4 `} />
          <div className="flex justify-between w-[280px] md:w-[390px]  ">
            <span className={`ml-4 min-h-[60px] flex items-center font-bold ${todo.completed ? '':''}`}>{`${todo.text}`}</span>
            <h1 className="flex items-center font-bold text-[22px]">0/1</h1>
          </div>
          <MdOutlineEditNote
            onClick={editHandler}
            className="ml-[15px] mt-1 h-7 w-7"
          />
          <div className=" absolute  mt-[-57px] ml-[-7px] md:mt-[0px] md:ml-[500px]">
            <AiOutlineCloseCircle onClick={deleteHandler} />
          </div>
        </div>
      </div>
    ) : (
      <>
        <div className={`bg-gray-300 mt-2  rounded-lg p-1 w-[370px] md:w-auto`}>
          <div className="">
          <textarea onChange ={inputTextHandler} maxLength={28} class="caret-pink-500 h-20 w-[340px]  ml-3 md:ml-4  rounded-lg md:w-[450px]  text-xl focus:outline-0 flex justify-center items-center text-black">{todo.text}</textarea>

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
            <button className="h-8 w-8 drop-shadow-sm bg-gray-700 border-2 absolute ml-3  mt-1 rounded">
              +
            </button>
            <button className="h-8 w-8 drop-shadow-sm bg-gray-500 border-2 absolute ml-12  mt-1 rounded ">
              -
            </button>
          </div>
          <div className="flex ">
            <h2 className="ml-4 mt-4 underline-offset-4 text-gray-500">
              + Add Note
            </h2>
            <h2 className="ml-4 mt-4 text-gray-500 mb-4">+ Add Project</h2>
          </div>
          <div className=" border-t-2 rounded-lg md:w-[480px] h-16 w-[360px]">
            <button
              className="h-10 w-20  ml-[190px] md:ml-[310px]  mt-4  text-gray-500 rounded "
              onClick={() => canceltask()}
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
          <button
            className="absolute md:ml-[10px] ml-2 mt-[-45px] md:mt-[-45px] w-20 h-10 rounded-lg text-sm bg-gray-500"
            onClick={deleteHandler}
          >
            Delete
          </button>
        </div>
      </>
    );
  }
);

export default Todo;
