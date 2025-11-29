import "./App.css";
import Header from "./assets/components/Header";
import List from "./assets/components/List";
import Editor from "./assets/components/Editor";
function App() {
  return (
    <div className="App">
      <Header></Header>
      <Editor></Editor>
      <List></List>
    </div>
  );
}

export default App;
