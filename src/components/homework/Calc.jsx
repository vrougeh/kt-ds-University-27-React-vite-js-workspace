import { useState } from "react";

const Calc = () => {
  const [first, setFirst] = useState(0);
  const [second, setSecond] = useState(0);
  const [result, setResult] = useState(0);

  const plusHandler = () => {
    setResult(first + Number(second));
  };

  const minusHandler = () => {
    setResult(first - second);
  };

  const multiHandler = () => {
    setResult(first * second);
  };

  const divHandler = () => {
    // second === 0 ? setResult("error") : setResult((first / second).toFixed(2));

    if (second !== 0) {
      const res = first / second;
      setResult(res.toFixed(2));
    } else {
      setResult("Error");
    }
  };
  const firstHandler = (e) => {
    setFirst(parseInt(e.target.value));
  };

  return (
    <div className="homework">
      <input type="number" value={first} onChange={firstHandler} />

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
