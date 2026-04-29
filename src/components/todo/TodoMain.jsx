// ecma function (fat arrow function)
// const 상수 정의 키워드
// (parameter) => {function body} : fat arrow function
// const abc = () => {};

import { useCallback, useEffect, useMemo, useState } from "react";
import TodoAppender from "./TodoAppender.jsx";
import TodoHeader from "./TodoHeader.jsx";
import TodoList from "./TodoList.jsx";
import TodoItem from "./TodoItem.jsx";
import TodoGrid from "./TodoGrid.jsx";
import AddCalculator from "./AddCalculator.jsx";
import {
  fetchAddTodo,
  fetchAllDoneTodo,
  fetchDoneTodo,
  fetchTodoList,
} from "../../http/todo/fetchTodo.js";

// function과 fat arrow function의 기능적 차이
// function = 함수를 호출한 대상을 this 객체로 알 수 있다.
// fat arrow function = this 키워드 사용불가
// event 파라미터로만 알 수 있음

// export default 이후에 const 키워드가 나타날 수 없음
// export default const > export const
const TodoMain = () => {
  console.log("TodoMain 시작");
  //TODO JSON DATA

  const [cashedData, setCashedData] = useState([]);
  // console.log(cashedData);

  const refreshTodoList = async () => {
    const todoList = await fetchTodoList();
    setCashedData(todoList.body);

    if (todoList.errors) {
      alert(todoList.errors);
    }
  };

  useEffect(() => {
    refreshTodoList();
  }, []);

  const todoCount = useMemo(() => {
    return {
      all: cashedData.length,
      // 완료된 개수만 반환
      done: cashedData.filter((todo) => todo.done).length,
      // 완료안된 개수만 반환
      process: cashedData.filter((todo) => !todo.done).length,
    };
  }, [cashedData]);

  const isAllDoneChangeHandler = useCallback(async () => {
    const allDoneResult = await fetchAllDoneTodo();
    if (!allDoneResult.errors) {
      refreshTodoList();
    } else {
      alert(allDoneResult.errors);
    }
  }, []);

  // 특정 dodo의 isDone 값을 반전시키는 함수
  // 이 함수를 TodoList에게 porps로 전달
  // TodoList는 TodoItem에게 함수를 props 전달
  const onDoneChangeHandler = async (todoId) => {
    const doneResult = await fetchDoneTodo(todoId);
    if (!doneResult.errors) {
      refreshTodoList();
    } else {
      alert(doneResult.errors);
    }
  };

  const onSaveButtonClickHandler = useCallback(
    async (todo, dueDate, priority) => {
      console.log("저장합니다.");
      const addResult = await fetchAddTodo(todo, dueDate, priority);
      if (!addResult.errors) {
        refreshTodoList();
      } else {
        alert(addResult.errors);
      }
    },
    [],
  );

  // 컴포넌트가 만들어 줄 HTML tag set를 반환
  return (
    <div className="wrapper">
      {/* <AddCalculator /> */}
      <header>React Todo</header>
      <TodoGrid>
        <TodoHeader
          onAllDoneChange={isAllDoneChangeHandler}
          count={todoCount}
        />
        <TodoList>
          {cashedData.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onDoneChange={onDoneChangeHandler}
            />
            // <TodoItemForChildren>
            //   <input type="checkbox" id={todo.id} />
            //   <label htmlFor={todo.id}>{todo.todo}</label>
            //   <span className="due-date">{todo.dueDate}</span>
            //   <span className="priority">{priorities[todo.priority]}</span>
            // </TodoItemForChildren>
          ))}
        </TodoList>
      </TodoGrid>
      <TodoAppender onSaveButtonClick={onSaveButtonClickHandler} />
    </div>
  );
};

export default TodoMain;
