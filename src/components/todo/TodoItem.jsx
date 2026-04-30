import { useRef, useContext } from "react";
import { Confirm } from "../ui/Modals";
import TodoContext from "./contexts/TodoContext.jsx";
import { fetchDoneTodo, fetchTodoList } from "../../http/todo/fetchTodo.js";
import { useDispatch } from "react-redux";
import { todoAction } from "../../stores/toolkit/slices/todoSlice.js";

const TodoItem = ({ todo }) => {
  console.log("TodoItem 시작");
  const priorities = ["없음", "높음", "보통", "낮음"];

  const itemConfirmRef = useRef();
  const checkboxRef = useRef();

  const { componentName } = useContext(TodoContext);

  const reactReduxDispatcher = useDispatch();

  // console.log("TodoItem : ", componentName);

  if (!componentName || componentName !== "TodoList") {
    return <></>;
  }

  const { id, task: todoTask, dueDate, priority, done: isDone } = todo;
  const doneClass = isDone ? "done" : "";

  const onDoneChangeHandler = () => {
    const checked = checkboxRef.current.checked;
    let message = "";
    if (checked) {
      message = todoTask + "을/를 완료하시겠습니까";
    } else {
      message = todoTask + "을/를 미완료하시겠습니까";
    }
    itemConfirmRef.current.showConfirmModal(message);
  };

  const onConfirmOkClickHandler = async () => {
    reactReduxDispatcher(todoAction.doneItem(id));

    const doneResult = await fetchDoneTodo(id);
    if (doneResult.errors) {
      alert(doneResult.errors);
    }
    const fetchResult = await fetchTodoList();
    reactReduxDispatcher(todoAction.refresh(fetchResult.body));
  };
  const onConfirmCloseClickHandler = () => {
    checkboxRef.current.checked = isDone;
  };

  return (
    <li className="task-item">
      <Confirm
        dialogRef={itemConfirmRef}
        onOkClick={onConfirmOkClickHandler}
        onCloseClick={onConfirmCloseClickHandler}
      />
      <input
        type="checkbox"
        id={id}
        checked={isDone}
        ref={checkboxRef}
        onChange={onDoneChangeHandler}
      />
      <label className={doneClass} htmlFor={id}>
        {todoTask}
      </label>
      <span className={`due-date ${doneClass}`}>{dueDate}</span>
      <span className={`priority ${doneClass}`}>{priorities[priority]}</span>
    </li>
  );
};
export default TodoItem;

export const TodoItemForChildren = ({ children }) => {
  return <li className="task-item">{children}</li>;
};
