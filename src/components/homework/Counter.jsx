import { useState } from "react";

const Counter = () => {
  const [countValue, setCountValue] = useState(0);

  const onButtonClickHandler = (event) => {
    const className = event.target.classList.value;
    const className2 = event.target.className;

    console.dir(className);
    console.dir(className2);

    setCountValue((prevCount) => {
      if (className.includes("decrease")) {
        if (prevCount === 0) {
          return prevCount;
        }
        return prevCount - 1;
      } else if (className.includes("increase")) {
        if (prevCount === 100) {
          return prevCount;
        }
        return prevCount + 1;
      }
      return prevCount;
    });
  };

  return (
    <div className="homework">
      <button
        type="button"
        className="decrease test"
        onClick={onButtonClickHandler}
      >
        -
      </button>
      <div className="countValue">{countValue}</div>
      <button type="button" className="increase" onClick={onButtonClickHandler}>
        +
      </button>
    </div>
  );
};
export default Counter;
