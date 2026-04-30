import { useRef } from "react";
import { Confirm } from "../ui/Modals";
import { useContext } from "react";
import TodoContext from "./contexts/TodoContext.jsx";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllDoneTodo, fetchTodoList } from "../../http/todo/fetchTodo.js";
import { todoAction } from "../../stores/toolkit/slices/todoSlice.js";

const TodoHeader = () => {
  console.log("TodoHeader 시작");
  const checkboxRef = useRef();
  const confirmRef = useRef();

  // react-redux store > todo 가져오기
  const { list: todoList } = useSelector((store) => store.todo);
  const count = {
    all: todoList.length,
    // 완료된 개수만 반환
    done: todoList.filter((todo) => todo.done).length,
    // 완료안된 개수만 반환
    process: todoList.filter((todo) => !todo.done).length,
  };

  const reactReduxDispatcher = useDispatch();

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

  const onConfirmOkClickHandler = async () => {
    // all done에 대한 낙관적 업데이트 진행
    // 사용자가 all done을 요청했을 때 요청 겨로가와 상관없이 우선 all done이 된것처럼 보여준다
    // fetch 이후 실패했을 경우 원래상태로 돌려준다
    //            성공했을 경우 변경된 상태 유지
    //            all done 을 수행중에 다른사용자로 인해 데이터가 추가 됐다면 불러올 필요
    reactReduxDispatcher({ type: "todo-all-done" });
    const allDoneResult = await fetchAllDoneTodo();
    if (allDoneResult.errors) {
      alert(allDoneResult.errors);
    }
    const fetchResult = await fetchTodoList();
    reactReduxDispatcher(todoAction.refresh(fetchResult.body));
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
