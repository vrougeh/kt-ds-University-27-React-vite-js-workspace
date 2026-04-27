import { useRef } from "react";
import { Alert } from "../ui/Modals";

const TodoAppender = ({ onSaveButtonClick }) => {
  const todoRef = useRef();
  const dateRef = useRef();
  const priorityRef = useRef();
  const alertRef = useRef();
  const onSaveButtonClickHandler = () => {
    if (!todoRef.current.value) {
      alertRef.current.showModal("할일을 적어주세요");
      return;
    }
    if (!dateRef.current.value) {
      alertRef.current.showModal("날짜를 적어주세요");
      return;
    }
    if (!priorityRef.current.value) {
      alertRef.current.showModal("우선순위를 적어주세요");
      return;
    }
    onSaveButtonClick(
      todoRef.current.value,
      dateRef.current.value,
      priorityRef.current.value,
    );
    todoRef.current.value = "";
    dateRef.current.value = "";
    priorityRef.current.value = "";
  };

  return (
    <footer>
      <Alert dialogRef={alertRef} />
      <input type="text" placeholder="Task" ref={todoRef} />
      <input type="date" ref={dateRef} />
      <select ref={priorityRef}>
        <option value="">우선순위</option>
        <option value="1">높음</option>
        <option value="2">보통</option>
        <option value="3">낮음</option>
      </select>
      <button type="button" onClick={onSaveButtonClickHandler}>
        Save
      </button>
    </footer>
  );
};
export default TodoAppender;
