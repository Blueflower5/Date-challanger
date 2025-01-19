import { useState } from "react";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}
function Counter() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);
  function addCount() {
    setCount((c) => c + step);
  }
  function minesCount() {
    if (count > 0) setCount((c) => c - step);
  }
  function addStep() {
    setStep((s) => s + 1);
  }
  function minesStep() {
    setStep((s) => s - 1);
  }
  return (
    <div>
      <div>
        <button onClick={minesStep}>-</button>
        Step:{step}
        <button onClick={addStep}>+</button>
      </div>
      <div>
        <button onClick={minesCount}>-</button>
        Count:{count}
        <button onClick={addCount}>+</button>
      </div>
      <div>{count}days from today.</div>
    </div>
  );
}
