import { ImMenu } from "react-icons/im";
import { AiFillPlusCircle } from "react-icons/ai";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaCheck } from "react-icons/fa";
import { RiSave3Line } from "react-icons/ri";
import { ImPlus } from "react-icons/im";

function Tasks({
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
  change,
  setChange,
  diese,
  setDiese,
}) {
  
  function options() {
    setOp(!op);
    setTask(false);
  }
  function addtasks() {
    setTask(!task);
    setOp(false);
  }
  function changeSave(e) {
    e === "" ? setChange(false) : setChange(true);

  }
  return (
    <div
      className={`mt-5 ${bgColor} h-[435px] lg:h-[513px] md:h-[520px] flex justify-center text-white`}
    >
      <div className="absolute">
        <h3>#{diese}</h3>
      </div>
      <div className="mt-6">
        <h1>
          {`${
            bgColor === "bg-red-500" ? "Time to focus!" : "Time for a break!"
          } `}
        </h1>
      </div>
      <div className="absolute mt-16 flex ">
        <h1 className="font-bold text-xl md:mr-[120px]">Tasks</h1>
        <div
          className={`${countColor} text-white relative ml-[290px]  text-xl  h-8 w-8 rounded flex justify-center`}
        >
          <button onClick={() => options()}>
            <ImMenu onClick={() => options()} />
          </button>

          <div
            className={`${
              op ? "block" : "hidden"
            } absolute text-black  mt-7 ml-6 h-50 w-48 bg-white text-sm z-10 rounded drop-shadow-xl mr-48 `}
          >
            <div>
              <h2 className=" flex justify-star rounded h-10 items-center hover:bg-gray-200 ">
                <RiDeleteBin6Line className="mr-2 ml-4" />
                Clear finished tasks
              </h2>
            </div>
            <div>
              <h2 className=" flex justify-start rounded h-10 items-center hover:bg-gray-200 ml-4">
                <FaCheck className="mr-2 " />
                Clear act promodoros
              </h2>
            </div>
            <div>
              <h2 className=" flex justify-start rounded h-10 items-center hover:bg-gray-200 ml-4">
                <RiSave3Line className="mr-2" />
                Save as template
              </h2>
            </div>
            <div>
              <h2 className=" flex justify-start  rounded h-10 items-center hover:bg-gray-200 ml-2">
                <ImPlus className="mr-2 ml-2 " />
                Add from templetes
              </h2>
            </div>
            <div>
              <h2 className=" flex justify-start border-2 rounded h-10 items-center hover:bg-gray-200 ">
                <RiDeleteBin6Line className="mr-2 ml-4" />
                Clear all tasks
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute mt-[110px] md:w-[500px]  p-4 w-[380px] flex justify-center border-t-2">
        <div
          onClick={() => addtasks()}
          className=" border-dashed border-2 border-gray-400 w-[2000px] h-16 flex justify-center text-gray-300 items-center rounded hover:border-white hover:text-white  cursor-pointer"
        >
          <AiFillPlusCircle />
          <h1 className="ml-2">Add Task</h1>
        </div>

        <div
          className={`${
            task ? "block" : "hidden"
          }  absolute text-black h-50 w-[370px] md:w-[500px]  z-9 bg-white text-sm rounded-lg drop-shadow-xl `}
        >
          <div>
            <input
              type="text"
              placeholder="    What are you working on?"
              className="h-20 w-[370px] rounded-lg lg:w-[500px] text-xl"
              onChange={changeSave}
            />
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
              className="h-10 w-20 ml-4 bg-gray-200 rounded-md text-xl border-none"
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
          <div className=" bg-gray-100 rounded-lg md:w-[500px] h-16 w-[370px]">
            <button
              className="h-10 w-20  ml-[190px] md:ml-[320px]  mt-4  text-gray-500 rounded "
              onClick={() => addtasks()}
            >
              Cancel
            </button>
            <button
              className={`h-10 w-20  drop-shadow-sm  text-white border-2 absolute mt-4 rounded-md ${
                change ? "bg-gray-400" : "bg-gray-300"
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

export default Tasks;
