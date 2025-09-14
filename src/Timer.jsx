import { useRef, useState } from "react";

const Timer = () => {
  const timerRef = useRef(null);
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  const handleStart = () => {
    if (isRunning) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    } else {
      timerRef.current = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    }
    setIsRunning(!isRunning);
  };

  return (
    <div>
      <h1>Time :{time}</h1>
      <p onClick={handleStart}>{isRunning ? "stop" : "start"}</p>
    </div>
  );
};

export default Timer;
