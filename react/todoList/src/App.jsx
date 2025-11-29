import "./App.css";
import Header from "./assets/components/Header.jsx";
import List from "./assets/components/List.jsx";
import Editor from "./assets/components/Editor.jsx";
import { useState } from "react";
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
  return (
    <div className="App">
      <Header></Header>
      <Editor></Editor>
      <List todos={todos}></List>
    </div>
  );
}

export default App;
