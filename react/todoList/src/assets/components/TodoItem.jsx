import "./TodoItem.css";
const TodoItem = ({ id, Done, content, date }) => {
  return (
    <div className="ListItem">
      <input readOnly checked={Done} type="checkbox" />
      <article className="content">{content}</article>
      <article className="date">{new Date(date).toLocaleDateString()}</article>
      <button>삭제 </button>
    </div>
  );
};
export default TodoItem;
