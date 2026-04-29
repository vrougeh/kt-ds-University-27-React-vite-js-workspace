import TodoContext from "./contexts/TodoContext.jsx";

const TodoGrid = ({ children }) => {
  console.log("TodoGrid 시작");
  const providerProps = {
    componentName: "TodoGrid",
  };
  return (
    <ul className="tasks">
      <TodoContext.Provider value={providerProps}>
        {children}
      </TodoContext.Provider>
    </ul>
  );
};
export default TodoGrid;
