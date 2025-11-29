import "./Editor.css";
import { useState, useRef } from "react";
const Editor = ({ onContentAdd }) => {
  const [content, setContent] = useState("");
  const contentRef = useRef();
  const onAddContent = (event) => {
    setContent(event.target.value);
  };
  const onKeydown = (event) => {
    if (event.key === "Enter") {
      onSubmit();
    }
  };
  const onSubmit = () => {
    if (content === "") {
      alert("입력 안해서 그래");
      contentRef.current.focus();
      return;
    }
    onContentAdd(content);
    setContent("");
  };

  return (
    <div className="Editor">
      <input
        type="text"
        ref={contentRef}
        onKeyDown={onKeydown}
        value={content}
        onChange={onAddContent}
        placeholder="새로운 Todo..."
      />
      <button onClick={onSubmit}>추가</button>
    </div>
  );
};

export default Editor;
