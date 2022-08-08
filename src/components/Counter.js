import { useEffect, useState } from "react";
import { IoPlaySkipForward } from "react-icons/io5";

function Counter({
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
  diese,
  setDiese,
}) {
  const [modalstate, SetModal] = useState(false);
  const [sonne, setSonne] = useState(false);
  console.log(bgColor);
  let audio = new Audio("/audio/s.mp3");
  let click = new Audio("/audio/c.mp3");

  if (sonne) {
    audio.play();
  } else {
    audio.pause();
  }

  const changeColor = (bg, count, start, minutes, secondes) => {
    console.log(minutes);
    setBgColor(bg);
    setCountColor(count);
    setStartColor(start);
    setMin(minutes);
    setSec(secondes);
  };

  const startCount = () => {
    setStart(!start);
    click.play();
  };

  function showmodal() {
    SetModal(!modalstate);
    setStart(!start);
    if (countColor === "bg-blue-400" || countColor === "bg-green-400") {
      SetModal(false);
      changeColor("bg-red-500", "bg-red-400", "text-red-500", 25, 0);
    }
  }
  let timer;
  useEffect(() => {
    
    bgColor === "bg-red-500"
      ? (document.title = `${min}:${sec} - Time to focus!`)
      : (document.title = `${min}:${sec} - Time to break!`);

    if (min === "0-1") {
      setMin(0);
      setSec(0);
    }
    if (start === true) {
      
      timer = setInterval(() => {
        if (sec < 1) {
          setMin((min) => min - 1);
          setSec(60);
        }
        if (min < 1 && sec < 1) {
          setSonne(true);
          console.log("working");
          startCount();
          showmodal();
        }

        setSec((sec) => sec - 1);
      }, 1000);
      return () => clearInterval(timer);
    }
  });

  if (min < 10) {
    min = "0" + min;
    console.log(min);
  }
  if (sec < 10) {
    sec = "0" + sec;
  }

  function closeModel() {
    setSonne(false);
    SetModal(false);
    setStart(true);
  }

  function shortbreak() {
    setSonne(false);
    changeColor("bg-blue-500", "bg-blue-400", "text-blue-500", 5, 0);
    SetModal(!modalstate);
    setDiese(diese+1)

  }
  function longbreak() {
    setSonne(false);
    changeColor("bg-green-500", "bg-green-400", "text-green-500", 15, 0);
    SetModal(!modalstate);
    setDiese(diese+1)

  }

  function promodoro() {
    setSonne(false);
    changeColor("bg-red-500", "bg-red-400", "text-red-500", 25, 0);
    SetModal(!modalstate);
    setDiese(diese+1)
  }

  return (
    <div
      className={`${countColor} h-[290px] w-[370px] md:w-[500px] md:h-[310px]   rounded-md mt-10 text-white text-lg`}
    >
      <div className="flex justify-around mt-5">
        <button
          className={`${
            countColor === "bg-red-400" ? "bg-red-500" : countColor
          } w-[110px]  rounded-lg`}
          onClick={() =>
            changeColor("bg-red-500", "bg-red-400", "text-red-500", 0, 2)
          }
        >
          Pomodoro
        </button>
        <button
          className={`${
            countColor === "bg-blue-400" ? "bg-blue-500" : countColor
          } w-[110px] rounded-lg`}
          onClick={() =>
            changeColor("bg-blue-500", "bg-blue-400", "text-blue-500", 0, 2)
          }
        >
          Short Break
        </button>
        <button
          className={`${
            countColor === "bg-green-400" ? "bg-green-500" : countColor
          } w-[110px] rounded-lg`}
          onClick={() =>
            changeColor("bg-green-500", "bg-green-400", "text-green-500", 0, 2)
          }
        >
          Long Break
        </button>
      </div>
      <div className="flex justify-center font-bold h-[90px] lg:mt-6 mt-4 text-9xl">
        <h1>
          {min}:{sec}
        </h1>
      </div>
      <div className="flex justify-center">
        <button
          className={`${
            start ? "border-b-0" : "border-b-8"
          } lg:mt-[70px] mt-16 bg-white ${startColor} h-12 w-40 font-bold rounded `}
          onClick={() => startCount()}
        >
          {start ? "STOP" : "START"}
        </button>

        <div
          className={`absolute  lg:mt-[75px] lg:ml-80 mt-[69px] ml-60 text-4xl  ${
            start ? "block" : "hidden"
          }`}
        >
          <IoPlaySkipForward onClick={() => showmodal()} />
        </div>
      </div>

      {modalstate && (
        <div
          onClick={() => closeModel()}
          class="relative z-10"
          aria-labelledby="modal-title"
          role="dialog"
          aria-modal="true"
        >
          <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

          <div class="fixed z-10 inset-0 overflow-y-auto">
            <div class="flex items-end sm:items-center justify-center min-h-full p-4 text-center sm:p-0">
              <div class="relative bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:max-w-lg sm:w-full">
                <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                  <div class="sm:flex sm:items-start">
                    <div class="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                      <svg
                        class="h-6 w-6 text-red-600"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="2"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                        />
                      </svg>
                    </div>
                    <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                      <h3
                        class="text-lg leading-6 font-medium text-gray-900"
                        id="modal-title"
                      >
                        Deactivate account
                      </h3>
                      <div class="mt-2">
                        <p class="text-sm text-gray-500">
                          Are you sure you want to deactivate your account? All
                          of your data will be permanently removed. This action
                          cannot be undone.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="bg-gray-50 px-4 py-3 sm:px-6  sm:flex sm:flex-row-reverse">
                  <button
                    type="button"
                    onClick={() => promodoro()}
                    class="w-full mt-3 inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
                  >
                    Promodoro
                  </button>
                  <button
                    type="button"
                    onClick={() => shortbreak()}
                    class="mt-3 w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
                  >
                    Short break
                  </button>
                  <button
                    type="button"
                    onClick={() => longbreak()}
                    class="mt-3 w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
                  >
                    Long break
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Counter;
