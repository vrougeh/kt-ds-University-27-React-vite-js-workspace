import { useContext } from "react";
import TrendContext from "./contexts/TrendContext";

const TrendSelector = ({ onSelectorButtonClick }) => {
  const { componentName } = useContext(TrendContext);
  if (!componentName || componentName !== "TrendHeader") {
    return <></>;
  }

  const onSelectorButtonClickHandler = (event) => {
    console.log(event.target.id);
    onSelectorButtonClick(event.target.id);
  };

  return (
    <>
      <button type="button" id="today" onClick={onSelectorButtonClickHandler}>
        오늘
      </button>
      <button type="button" id="week" onClick={onSelectorButtonClickHandler}>
        이번주
      </button>
    </>
  );
};
export default TrendSelector;
