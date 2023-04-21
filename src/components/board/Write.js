import React, { useState } from "react";
import Editor from "./Editor";
import { Button } from "antd";
import "../../style/board/css/Write.css";

const Write = () => {
  const defaultString = "Hello, This is CKEditor~~";
  const [content, setContent] = useState(defaultString);
  return (
    <div className="WriteContainer">
      <Editor
        data={content}
        uploadFolder="Test"
        uploader="bloodseeker"
        onChange={(event, editor) => {
          const data = editor.getData();
          setContent(data);
          console.log({ event, editor, data });
        }}
      />
      <Button className="writeBtn">작성하기</Button>
    </div>
  );
};

export default Write;
