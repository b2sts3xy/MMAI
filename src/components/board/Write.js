import React, { useState } from "react";
import Editor from "./Editor";

const Write = () => {
  const defaultString = "Hello, This is CKEditor~~";
  const [content, setContent] = useState(defaultString);
  return (
    <div>
      <div>Write</div>
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
    </div>
  );
};

export default Write;
