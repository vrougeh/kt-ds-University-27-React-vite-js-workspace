import { useContext } from "react";
import TrendContext from "./contexts/TrendContext";

const TrendItem = ({ movie }) => {
  const { componentName } = useContext(TrendContext);
  if (!componentName || componentName !== "TrendList") {
    return <></>;
  }
  return (
    <li className="task-item">
      <img src={movie.poster} />
      <div>{movie.name}</div>
      <div>{movie.openDate}</div>
    </li>
  );
};
export default TrendItem;
