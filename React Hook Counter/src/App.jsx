import "./styles.css";
import { useState } from "react";

export default function App() {
  return (
    <div className="App">
      {/* <h1>Counter : {counter}</h1>
      <button onClick={() => changeValue(1)}>Increment</button>
      <button onClick={() => changeValue(-1)}>Decrement</button>
      <div>
        <button onClick={() => doubleValue(2)}>Double</button>
      </div> */}

      {/* <Counter initial={0} /> */}
      <Counter />
    </div>
  );
}

function Counter() {
  // console.log(initial);
  const [counter, setCounter] = useState(0);

  const changeValue = (value) => {
    setCounter(counter + value);
  };
  const doubleValue = (value) => {
    setCounter(counter * value);
  };
  return (
    <div>
      <h1>Counter : {counter}</h1>
      <button onClick={() => changeValue(1)}>Increment</button>
      <button onClick={() => changeValue(-1)}>Decrement</button>
      <div>
        <button onClick={() => doubleValue(2)}>Double</button>
      </div>
      <h2>Counter is {counter % 2 === 0 ? "Even" : "Odd"}</h2>
    </div>
  );
}
