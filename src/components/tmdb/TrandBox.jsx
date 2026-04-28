import TrendContext from "./contexts/TrendContext";

const TrendBox = ({ children }) => {
  const providerProps = {
    componentName: "TrendBox",
  };
  return (
    <TrendContext.Provider value={providerProps}>
      {children}
    </TrendContext.Provider>
  );
};
export default TrendBox;
