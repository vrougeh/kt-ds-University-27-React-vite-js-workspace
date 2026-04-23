const Calc = () => {
  const calcdata = 0;
  const plusHandler = () => {
    calcdata = first + second;
  };
  const minusHandler = () => {};
  const multiHandler = () => {};
  const divHandler = () => {};
  return (
    <div className="homework">
      <input type="number" defaultValue={0} />
      <div className="column">
        <button onClick={plusHandler}>+</button>
        <button>-</button>
        <button>*</button>
        <button>/</button>
      </div>
      <input type="number" defaultValue={0} />
      <div>=</div>
      <div>{calcdata}</div>
    </div>
  );
};
export default Calc;
