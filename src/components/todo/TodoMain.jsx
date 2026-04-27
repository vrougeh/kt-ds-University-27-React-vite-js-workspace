// ecma function (fat arrow function)
// const 상수 정의 키워드
// (parameter) => {function body} : fat arrow function
// const abc = () => {};

import { useState } from "react";
import TodoAppender from "./TodoAppender.jsx";
import TodoHeader from "./TodoHeader.jsx";
import TodoList from "./TodoList.jsx";

// function과 fat arrow function의 기능적 차이
// function = 함수를 호출한 대상을 this 객체로 알 수 있다.
// fat arrow function = this 키워드 사용불가
// event 파라미터로만 알 수 있음

// export default 이후에 const 키워드가 나타날 수 없음
// export default const > export const
const TodoMain = () => {
  //TODO JSON DATA
  const todoDatas = [
    {
      id: "todo_1",
      todo: "React Component Master 1",
      dueDate: "2026-04-22",
      priority: 1,
      isDone: true,
    },
    {
      id: "todo_2",
      todo: "React Component Master 2",
      dueDate: "2026-04-23",
      priority: 2,
      isDone: false,
    },
    {
      id: "todo_3",
      todo: "React Component Master 3",
      dueDate: "2026-04-24",
      priority: 3,
      isDone: false,
    },
  ];
  const [cashedData, setCashedData] = useState(todoDatas);
  console.log(cashedData);

  const isAllDoneChangeHandler = (isDone) => {
    setCashedData((prevData) => {
      // cashedData 를 반복하면서 모든 isDone의 값을 변경한다.
      // const newData = prevData.map((todo) => (todo.isDone = isDone));
      const newData = prevData.map((todo) => ({ ...todo, isDone }));
      // const newData = prevData.map((todo) => {
      //   todo.isDone = isDone;
      //   return todo;
      // });
      // 변경된 결과를 반환한다.
      return newData;
    });
  };

  // 특정 dodo의 isDone 값을 반전시키는 함수
  // 이 함수를 TodoList에게 porps로 전달
  // TodoList는 TodoItem에게 함수를 props 전달
  const onDoneChangeHandler = (todoId, isDone) => {
    setCashedData((prevData) => {
      const newStateMemory = [...prevData];

      // java for each 와 같은 동작
      for (const todo of newStateMemory) {
        if (todo.id === todoId) {
          todo.isDone = isDone;
          break;
        }
      }
      return newStateMemory;
    });
    console.log(todoId, todoDatas);
  };

  const onSaveButtonClickHandler = (todo, dueDate, priority) => {
    console.log("저장합니다.");
    setCashedData((prevData) => [
      ...prevData,
      { id: prevData.length + 1, todo, dueDate, priority, isDone: false },
    ]);
  };

  // 컴포넌트가 만들어 줄 HTML tag set를 반환
  return (
    <div className="wrapper">
      <header>React Todo</header>
      <ul className="tasks">
        <TodoHeader onAllDoneChange={isAllDoneChangeHandler} />
        <TodoList todoDatas={cashedData} onDoneChange={onDoneChangeHandler} />
      </ul>
      <TodoAppender onSaveButtonClick={onSaveButtonClickHandler} />
    </div>
  );
};

export default TodoMain;
