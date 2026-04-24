import { useState } from "react";

const Calc = () => {
  // const [first, setFirst] = useState(0);
  // const [second, setSecond] = useState(0);
  // const [result, setResult] = useState(0);

  const [{ first, second, result }, setNums] = useState({
    first: 0,
    second: 0,
    result: 0,
  });

  // const plusHandler = () => {
  //   setResult(first + Number(second));
  // };

  // const minusHandler = () => {
  //   setResult(first - second);
  // };

  // const multiHandler = () => {
  //   setResult(first * second);
  // };

  // const divHandler = () => {
  //   // second === 0 ? setResult("error") : setResult((first / second).toFixed(2));

  //   if (second !== 0) {
  //     const res = first / second;
  //     setResult(res.toFixed(2));
  //   } else {
  //     setResult("Error");
  //   }
  // };

  const onCalcButtonClickHander = (operator) => {
    let result = 0;
    if (operator === "+") {
      result = first + Number(second);
    } else if (operator === "-") {
      result = first - second;
    } else if (operator === "*") {
      result = first * second;
    } else if (operator === "/") {
      result = first / second;
    }
    setNums((prevNums) => {
      return { ...prevNums, result };
    });
    // if (operator === "+") {
    //   setNums((prevNums) => {
    //     return { ...prevNums, result: first + Number(second) };
    //   });
    // } else if (operator === "-") {
    //   setNums((prevNums) => {
    //     return { ...prevNums, result: first - second };
    //   });
    // } else if (operator === "*") {
    //   setNums((prevNums) => {
    //     return { ...prevNums, result: first * second };
    //   });
    // } else if (operator === "/") {
    //   setNums((prevNums) => {
    //     return { ...prevNums, result: first / second };
    //   });
    // }

    // if (operator === "+") {
    //   setResult(first + Number(second));
    // } else if (operator === "-") {
    //   setResult(first - second);
    // } else if (operator === "*") {
    //   setResult(first * second);
    // } else if (operator === "/") {
    //   setResult(first / second);
    // }
  };

  const firstHandler = (e) => {
    // setFirst(parseInt(e.target.value));
    setNums((prevNums) => {
      const newNums = { ...prevNums, first: parseInt(e.target.value) };
      return newNums;
    });
  };

  return (
    <div className="homework">
      <input type="number" value={first} onChange={firstHandler} />

      <div className="column">
        <button onClick={onCalcButtonClickHander.bind(this, "+")}>+</button>
        <button onClick={onCalcButtonClickHander.bind(this, "-")}>-</button>
        <button onClick={onCalcButtonClickHander.bind(this, "*")}>*</button>
        <button onClick={onCalcButtonClickHander.bind(this, "/")}>/</button>
      </div>

      <input
        type="number"
        value={second}
        onChange={(e) => {
          setNums((prevNums) => {
            const newNums = { ...prevNums, second: parseInt(e.target.value) };
            return newNums;
          });
        }}
      />

      <div className="result"> = {result}</div>
    </div>
  );
};

export default Calc;
