import { useRef } from "react";
import { Confirm } from "../ui/Modals";
import { useContext } from "react";
import TodoContext from "./contexts/TodoContext.jsx";

const TodoHeader = ({ onAllDoneChange, count }) => {
  console.log("TodoHeader 시작");
  const checkboxRef = useRef();
  const confirmRef = useRef();
  const { componentName } = useContext(TodoContext);

  // console.log("TodoHeader : ", componentName);

  if (!componentName || componentName !== "TodoGrid") {
    return <></>;
  }
  const onAllDoneChangeHandler = () => {
    const checked = checkboxRef.current.checked;
    let message = "";
    if (checked) {
      message = "모든 item들을 '완료' 하시겠습니까";
    } else {
      message = "모든 item들을 '미완료' 하시겠습니까";
    }
    confirmRef.current.showConfirmModal(message);
  };

  const onConfirmOkClickHandler = () => {
    onAllDoneChange(checkboxRef.current.checked);
  };
  const onConfirmCloseClickHandler = () => {
    checkboxRef.current.checked = !checkboxRef.current.checked;
  };

  return (
    <>
      <li className="tasks-counter">
        <div>전체 : {count.all}</div>
        <div>진행중 : {count.process}</div>
        <div>완료 : {count.done}</div>
      </li>
      <li className="tasks-header">
        <Confirm
          dialogRef={confirmRef}
          onOkClick={onConfirmOkClickHandler}
          onCloseClick={onConfirmCloseClickHandler}
        />
        <input
          type="checkbox"
          id="checkall"
          ref={checkboxRef}
          onChange={onAllDoneChangeHandler}
        />
        <label>Task</label>
        <span className="due-date">Due date</span>
        <span className="priority">Priority</span>
      </li>
    </>
  );
};
export default TodoHeader;
