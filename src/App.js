import { useState } from "react";
import "./App.css";
import Addtask from "./components/Addtask";
import Counter from "./components/Counter";
import Nav from "./components/Nav";
import Tasks from "./components/Tasks";

function App() {
  const [bgColor, setBgColor] = useState("bg-red-500");
  const [countColor, setCountColor] = useState("bg-red-400");
  const [startColor, setStartColor] = useState("text-red-500");
  const [min, setMin] = useState(25);
  const [sec, setSec] = useState(0);
  const [start, setStart] = useState(false);
  const [op,setOp]=useState(false);
  const [task,setTask]=useState(false);
  const [diese,setDiese]=useState(1);
  const [text,setText]=useState("");
  const [todos,setTodos]=useState([]);
  const [todo,setTodo]=useState('');
  return (
    <div className={`${bgColor} w-sceen h-screen`}>
      <Nav
        countColor={countColor}
        setCountColor={setCountColor}
        setBgColor={setBgColor}
        bgColor={bgColor}
      />
      <div className={`flex flex-col items-center `}>
        <Counter
          countColor={countColor}
          setCountColor={setCountColor}
          setBgColor={setBgColor}
          bgColor={bgColor}
          startColor={startColor}
          setStartColor={setStartColor}
          min={min}
          setMin={setMin}
          sec={sec}
          setSec={setSec}
          start={start}
          setStart={setStart}
          op={op}
          setOp={setOp}
          diese={diese}
          setDiese={setDiese}
        />
      </div>
      <div className={`${bgColor}` }>
        <Tasks
          countColor={countColor}
          setCountColor={setCountColor}
          setBgColor={setBgColor}
          bgColor={bgColor}
          startColor={startColor}
          setStartColor={setStartColor}
          min={min}
          setMin={setMin}
          sec={sec}
          setSec={setSec}
          start={start}
          setStart={setStart}
          op={op}
          setOp={setOp}
          task={task}
          setTask={setTask}
          diese={diese}
          setdiese={setDiese}
          setText={setText}
          todos={todos}
          setTodos={setTodos}
        />
      </div>
      <div className={`mt-4 ${bgColor} flex justify-center text-white  `}>
        <Addtask
        countColor={countColor}
        setCountColor={setCountColor}
        setBgColor={setBgColor}
        bgColor={bgColor}
        startColor={startColor}
        setStartColor={setStartColor}
        min={min}
        setMin={setMin}
        sec={sec}
        setSec={setSec}
        start={start}
        setStart={setStart}
        op={op}
        setOp={setOp}
        task={task}
        setTask={setTask}
        diese={diese}
        setdiese={setDiese}
        setText={setText} 
        text={text}
        todos={todos}
        setTodos={setTodos}
        todo={todo}
        setTodo={setTodo}
        />
      </div>
    </div>
  );
}

export default App;
