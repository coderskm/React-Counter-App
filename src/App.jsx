import { useReducer } from "react";

let initialState = 0;

const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement": {
      if (state != 0) return state - 1;
      else return 0;
    }
    case "reset":
      return 0;
    default:
      return state;
  }
};

function App() {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="container">
      <p className="heading">COUNTER</p>
      <p className="count-style">{count}</p>
      <button className="inc" onClick={() => dispatch("increment")}>
        INCREMENT
      </button>
      <button className="res" onClick={() => dispatch("reset")}>
        RESET
      </button>
      <button className="dec" onClick={() => dispatch("decrement")}>
        DECREMENT
      </button>
    </div>
  );
}

export default App;
