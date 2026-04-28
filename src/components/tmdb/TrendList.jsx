import { useContext } from "react";
import TrendContext from "./contexts/TrendContext";

const TrendList = ({ children }) => {
  const { componentName } = useContext(TrendContext);
  if (!componentName || componentName !== "TrendBox") {
    return <></>;
  }
  const providerProps = {
    componentName: "TrendList",
  };
  return (
    <TrendContext.Provider value={providerProps}>
      <div className="flex-col">{children}</div>
    </TrendContext.Provider>
  );
};
export default TrendList;
