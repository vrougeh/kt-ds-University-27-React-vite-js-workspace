import { useState } from "react";

const Calc = () => {
  const [first, setFirst] = useState(0);
  const [second, setSecond] = useState(0);
  const [result, setResult] = useState(0);

  // 2. Handlers to update the result state
  const plusHandler = () => {
    setResult(Number(first) + Number(second));
  };

  const minusHandler = () => {
    setResult(first - second);
  };

  const multiHandler = () => {
    setResult(first * second);
  };

  const divHandler = () => {
    if (second !== 0) {
      const res = first / second;
      setResult(res.toFixed(2));
    } else {
      setResult("Error");
    }
  };

  return (
    <div className="homework">
      {/* 3. Link inputs to state using value and onChange */}
      <input
        type="number"
        value={first}
        onChange={(e) => setFirst(e.target.value)}
      />

      <div className="column">
        <button onClick={plusHandler}>+</button>
        <button onClick={minusHandler}>-</button>
        <button onClick={multiHandler}>*</button>
        <button onClick={divHandler}>/</button>
      </div>

      <input
        type="number"
        value={second}
        onChange={(e) => setSecond(e.target.value)}
      />

      <div className="result"> = {result}</div>
    </div>
  );
};

export default Calc;
