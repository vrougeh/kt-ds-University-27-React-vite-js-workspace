const TodoItem = ({ todo, priorities }) => {
  const { id, todo: todoTask, dueDate, priority } = todo;
  return (
    <li className="task-item">
      <input type="checkbox" id={id} />
      <label htmlFor={id}>{todoTask}</label>
      <span className="due-date">{dueDate}</span>
      <span className="priority">{priorities[priority]}</span>
    </li>
  );
};
export default TodoItem;

export const TodoItemForChildren = ({ children }) => {
  return <li className="task-item">{children}</li>;
};
