import { useContext } from "react";
import TodoContext from "./contexts/TodoContext.jsx";

const TodoList = ({ children }) => {
  // console.log(todoDatas);
  const { componentName } = useContext(TodoContext);

  console.log("TodoList : ", componentName);

  if (!componentName || componentName !== "TodoGrid") {
    return <></>;
  }

  const providerProps = {
    componentName: "TodoList",
  };
  return (
    <TodoContext.Provider value={providerProps}>
      {children}
    </TodoContext.Provider>
  );
};
export default TodoList;
