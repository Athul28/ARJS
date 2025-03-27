import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter(counter + 1);
  };

  const decrement = () => {
    setCounter(counter > 0 ? counter - 1 : 0);
  };

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>{counter}</h1>
      <div className="container">
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
      </div>
    </div>
  );
}

export default App;
