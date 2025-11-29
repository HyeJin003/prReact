import "./App.css";
import Header from "./assets/components/Header.jsx";
import List from "./assets/components/List.jsx";
import Editor from "./assets/components/Editor.jsx";
import { useState, useRef } from "react";
//1. DOM 요소 접근하기 --useRef
//2. 변수 저장하기(렌더링 없이 값 유지)
//3. 컴포넌트가 리렌더돼도 사라지지 않는 값 저장
function App() {
  const mockData = [
    {
      id: 0,
      Done: false,
      content: "Ract 공부하기",
      // date: new Date(mockData[0].date).toLocaleDateString(),
      date: new Date().getTime(),
    },
    {
      id: 1,
      Done: false,
      content: "빨래하기",
      // date: new Date(mockData[0].date).toLocaleDateString(),
      date: new Date().getTime(),
    },
    {
      id: 2,
      Done: false,
      content: "노래하기",
      // date: new Date(mockData[0].date).toLocaleDateString(),
      date: new Date().getTime(),
    },
  ];
  const [todos, setTodos] = useState(mockData);
  const idRef = useRef(3);

  const onContentAdd = (content) => {
    const newTodo = {
      id: idRef.current++,
      Done: false,
      content: content,
      date: new Date().getTime(),
    };
    setTodos([newTodo, ...todos]);
  };

  return (
    <div className="App">
      <Header></Header>
      <Editor onContentAdd={onContentAdd}></Editor>
      <List todos={todos}></List>
    </div>
  );
}

export default App;
