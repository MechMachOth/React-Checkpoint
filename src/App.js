import { useState } from "react";
import "./App.css";
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
  const [change,setChange]=useState(false);
  const [diese,setDiese]=useState(1);
  {console.log(bgColor)}
  {console.log(bgColor)}
  {console.log(bgColor)}
  return (
    <div className={`${bgColor}`}>
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
      <div className="">
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
          change={change}
          setChange={setChange}
          diese={diese}
          setdiese={setDiese}
        />
      </div>
    </div>
  );
}

export default App;
