import React, { useState, useRef, useEffect } from "react";

function Stopwatch() {
  const [time, setTime] = useState(0); 
  const [running, setRunning] = useState(false);
  const [laps, setLaps] = useState([]);
  const [lapName, setLapName] = useState("");

  const intervalRef = useRef(null); 
  const inputRef = useRef(null);

  const handleStart = () => {
    if (intervalRef.current !== null) return;

    setRunning(true);
    intervalRef.current = setInterval(() => {
      setTime(t => t + 10);
    }, 10);
  };

  const handlePause = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
    setRunning(false);
  };

  const handleReset = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
    inputRef.current.focus();
    setRunning(false);
    setTime(0);
    setLaps([]);
  };

  // Add lap
  const handleAddLap = () => {
    if (!lapName) return;

    setLaps(prev => [
      ...prev,
      { name: lapName, time }
    ]);

    setLapName("");
  };

  // Format time
  const formatTime = (ms) => {
    const minutes = Math.floor(ms / 60000);
    const seconds = Math.floor((ms % 60000) / 1000);
    const milliseconds = Math.floor((ms % 1000) / 10);

    return `${minutes}:${seconds.toString().padStart(2, "0")}.${milliseconds
      .toString()
      .padStart(2, "0")}`;
  };

  return (
    <div>
      <h1>Stopwatch</h1>

      <h2>{formatTime(time)}</h2>

      <button onClick={handleStart} disabled={running}>
        Start
      </button>
      <button onClick={handlePause} disabled={!running}>
        Pause
      </button>
      <button onClick={handleReset}>
        Reset
      </button>

      <hr />

      <input
        ref={inputRef}
        type="text"
        placeholder="Lap name"
        value={lapName}
        onChange={(e) => setLapName(e.target.value)}
      />
      <button onClick={handleAddLap}>
        Add Lap
      </button>

      <ul>
        {laps.map((lap, index) => (
          <li key={index}>
            {lap.name} - {formatTime(lap.time)}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Stopwatch;
