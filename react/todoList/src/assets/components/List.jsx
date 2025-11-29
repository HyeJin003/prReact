import { useState } from "react";
import "./List.css";
import TodoItem from "./TodoItem";
const List = ({ todos }) => {
  const [search, setSearch] = useState("");
  const onChangeSearch = (event) => {
    setSearch(event.target.value);
  };
  const getFilterData = () => {
    if (search === "") {
      return todos;
    }
    return todos.filter((todo) =>
      todo.content.toLowerCase().includes(search.toLowerCase())
    );
  };
  const filteredTodos = getFilterData();
  return (
    <div className="List">
      <h4>Todo List💕</h4>
      <input
        type="text"
        value={search}
        onChange={onChangeSearch}
        placeholder="검색어를 입력하세요"
      />
      <div className="todos_wrapper"></div>
      {filteredTodos.map((todo) => {
        return <TodoItem key={todo.id} {...todo} />;
      })}
    </div>
  );
};
export default List;
