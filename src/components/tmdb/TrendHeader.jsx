import { useContext } from "react";
import TrendContext from "./contexts/TrendContext.jsx";

const TrendHeader = ({ children }) => {
  const { componentName } = useContext(TrendContext);
  if (!componentName || componentName !== "TrendBox") {
    return <></>;
  }
  const providerProps = {
    componentName: "TrendHeader",
  };
  return (
    <li className="trand-header">
      <TrendContext.Provider value={providerProps}>
        {children}
      </TrendContext.Provider>
    </li>
  );
};
export default TrendHeader;
