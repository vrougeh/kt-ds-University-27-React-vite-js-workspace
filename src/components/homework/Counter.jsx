import { useState } from "react";

const Counter = () => {
  const [countValue, setCountValue] = useState(0);
  const countIncreaseHandler = () => {
    if (countValue < 100) {
      setCountValue((prevCount) => {
        return prevCount + 1;
      });
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
      <div className="countValue">{countValue}</div>
      <button onClick={countIncreaseHandler}>+</button>
    </div>
  );
};
export default Counter;
