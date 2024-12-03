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
  const [step, setStep] = useState(0);
  const [count, setCount] = useState(0);
  function stepNext() {
    setStep((y) => step * y);
  }

  function countNext() {
    setCount((x) => count + 1);
  }
  function countPervious() {
    setCount((x) => count - 1);
  }
  return (
    <>
      <div>
        <button>-</button>
        Step:
        <button>+</button>
      </div>
      <div>
        <button onClick={countPervious}>-</button>
        Count:{count}
        <button onClick={countNext}>+</button>
      </div>
      <div className={count < 0 ? "hidden" : ""}>{count} Days from now</div>
      <div className={count > -1 ? "hidden" : ""}>
        {Math.abs(count)} Days before now
      </div>
    </>
  );
}
