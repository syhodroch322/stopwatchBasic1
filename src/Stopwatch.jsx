import React, { useRef, useState } from "react";
import "./Stopwatch.css";

const Stopwatch = () => {
  const [time, setTime] = useState(0);
  const [status, setStatus] = useState("Таймер остановлен");
  const intervalId = useRef(null);

  const startTimer = () => {
    if (intervalId.current) return;

    intervalId.current = setInterval(() => {
      setTime((prevTime) => prevTime + 1);
      setStatus("Таймер запущен");
    }, 1000);
  };

  const stopTimer = () => {
    clearInterval(intervalId.current);
    intervalId.current = null;
    setStatus("Таймер остановлен");
  };

  const resetTimer = () => {
    setTime(0);
    clearInterval(intervalId.current);
    intervalId.current = null;
    setStatus("Таймер остановлен");
  };

  return (
    <div>
      <h2>Секундомер</h2>
      <p>Время: {time} сек</p>
      <p>{status}</p>
      <button onClick={startTimer}>Старт</button>
      <button onClick={stopTimer}>Стоп</button>
      <button onClick={resetTimer}>Сбросить</button>
    </div>
  );
};

export default Stopwatch;
