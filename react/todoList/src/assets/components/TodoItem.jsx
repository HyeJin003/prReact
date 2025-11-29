import "./TodoItem.css";
const TodoItem = () => {
  return (
    <div className="ListItem">
      <input type="checkbox" />
      <article className="content">Todo..</article>
      <article className="date">date</article>
      <button>삭제 </button>
    </div>
  );
};
export default TodoItem;
