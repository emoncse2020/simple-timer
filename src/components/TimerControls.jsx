const TimerControls = ({ toggleTimer, isRunning, resetTimer }) => {
  return (
    <div>
      <button
        onClick={toggleTimer}
        className="mt-3 bg-green-500 rounded-md text-white px-4 py-2 hover:bg-green-600"
      >
        {isRunning ? "Pause" : "Start"}
      </button>
      <button
        onClick={resetTimer}
        className="mt-3 bg-red-500 rounded-md text-white ml-3 px-4 py-2 hover:bg-red-600"
      >
        Reset
      </button>
    </div>
  );
};

export default TimerControls;
