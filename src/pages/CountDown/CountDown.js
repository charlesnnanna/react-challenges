import React, { useEffect, useState } from "react";

function CountDown(props) {
  const [minutes, setMinutes] = useState("00");
  const [seconds, setSeconds] = useState("00");
  const [onTimer, setOnTimer] = useState(false);
  const date = new Date("12/30/2022 00:05:00");
  // const [timer, setTimer] = useState('')
  console.log(date);

  useEffect(() => {
    var counter = setTimeout(() => {
      date.setSeconds(date.getSeconds() - 1);

      console.log(`${date.getMinutes()} : ${date.getSeconds()}`);
      setOnTimer(`${date.getMinutes()} : ${date.getSeconds()}`);
    }, 1000);

    if (date.getSeconds() === 0 && date.getMinutes() === 0) {
      clearTimeout(counter);
    }
  }, []);

  function handlesMinutes(e) {
    setMinutes(e.target.value);
  }

  function handleSeconds(e) {
    setSeconds(e.target.value);
  }

  function startTimer() {
    setSeconds((seconds) => seconds - 1);
  }

  function resetTimer() {
    setOnTimer(false);
  }

  function reduceTime() {}

  return (
    <div>
      <input
        type="text"
        name="minutes"
        placeholder={minutes}
        onChange={handlesMinutes}
      />
      <input
        type="text"
        name="seconds"
        placeholder={seconds}
        onChange={handleSeconds}
      />
      <button
        onClick={() => {
          startTimer();
        }}
      >
        Start Timer
      </button>
      <button
        onClick={() => {
          resetTimer();
        }}
      >
        Reset Timer
      </button>
      <button
        onClick={() => {
          reduceTime();
        }}
      >
        Reduce Timer
      </button>
      <h1>{`${onTimer}`}</h1>
    </div>
  );
}

export default CountDown;
