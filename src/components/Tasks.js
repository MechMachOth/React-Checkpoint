import { ImMenu } from "react-icons/im";
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
  diese,
  setDiese,
  setText,
  todos,
  setTodos,
}) {
  
  function options() {
    setOp(!op);
    setTask(false);
  }
  
  function clearall () {
    setTodos([])
  }


  return (
    <div
      className={`mt-5 ${bgColor} flex justify-center text-white   `}
    >
      <div className="absolute">
        <h3>#{diese}</h3>
      </div>
      <div className="mt-6">
        <h1>
          {`${
            bgColor === "bg-red-500" ? `Time to focus!` : "Time for a break!"
          } `}
        </h1>
      </div>
      <div className="absolute mt-16 flex border-b-[5px] rounded-lg border-gray-400 w-[380px]  h-[45px] md:w-[500px]">
        
        <h1 className="font-bold text-xl md:mr-[120px]">Tasks</h1>
        <div
          className={`${countColor} text-white relative ml-[290px]  text-xl  h-8 w-8 rounded flex justify-center`}
        >
          <div className="hover:drop-shadow-md text-md flex hover:text-2xl">
          <button  onClick={() => options()}>
            <ImMenu onClick={() => options()} />
          </button></div>

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
              <h2 onClick={clearall} className=" flex justify-start border-2 rounded h-10 items-center hover:bg-gray-200 ">
                <RiDeleteBin6Line className="mr-2 ml-4" />
                Clear all tasks
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tasks;
