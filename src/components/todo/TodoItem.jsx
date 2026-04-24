const TodoItem = ({ todo, priorities, onDoneChange }) => {
  const { id, todo: todoTask, dueDate, priority, isDone } = todo;
  const doneClass = isDone ? "done" : "";

  const onDoneChangeHandler = () => {
    onDoneChange(id, !isDone);
  };
  return (
    <li className="task-item">
      <input
        type="checkbox"
        id={id}
        checked={isDone}
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
