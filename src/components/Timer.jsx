import { useEffect, useRef, useState } from "react";
import TimerControls from "./TimerControls";

const Timer = () => {
  const timerRef = useRef(null);
  const [time, setTime] = useState(() => {
    const time = JSON.parse(localStorage.getItem("time"));
    return time || [];
  });

  useEffect(() => {
    localStorage.setItem("time", JSON.stringify(time));
  }, [time]);
  const [isRunning, setIsRunning] = useState(false);

  const toggleTimer = () => {
    if (isRunning) {
      // clear interval to stop the timer
      clearInterval(timerRef.current);
      timerRef.current = null;
    } else {
      // start timer
      timerRef.current = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    }
    setIsRunning(!isRunning);
  };
  // reset timer
  const resetTimer = () => {
    clearInterval(timerRef.current);
    setIsRunning(false);
    setTime(0);
    timerRef.current = null;
  };
  return (
    <div className="max-w-md mx-auto mt-10 p-6 rounded-lg bg-gray-100 shadow-lg text-center">
      <h2 className="text-4xl font-semibold, mt-4">Timer : {time}</h2>
      <TimerControls
        toggleTimer={toggleTimer}
        isRunning={isRunning}
        resetTimer={resetTimer}
      ></TimerControls>
    </div>
  );
};

export default Timer;
