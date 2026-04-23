import { useState } from "react";

const Counter = () => {
  const [countValue, setCountValue] = useState(0);
  const countEncreaseHandler = () => {
    if (countValue < 100) {
      setCountValue(countValue + 1);
    }
  };
  const countDecreaseHandler = () => {
    if (countValue > 0) {
      setCountValue(countValue - 1);
    }
  };

  return (
    <div className="homework">
      <button onClick={countDecreaseHandler}>-</button>
      <div>{countValue}</div>
      <button onClick={countEncreaseHandler}>+</button>
    </div>
  );
};
export default Counter;
