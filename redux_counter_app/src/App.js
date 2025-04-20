import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decreement, increement } from "./features/Counterslice";

const App = () => {
  const current_value = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={() => dispatch(increement())}>plus</button>
      <div>{current_value}</div>
      <button onClick={() => dispatch(decreement())}>minus</button>
    </div>
  );
};

export default App;
