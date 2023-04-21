import React from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import "../../style/board/css/Board.css";

const Editor = () => {
  return (
    <>
      <div className="Editor_Container">
        <CKEditor
          editor={ClassicEditor}
          data="<p>Hello World</p>"
          onReady={(editor) => {
            // console.log('Editor is ready to use!', editor);
          }}
          onChange={(event, editor) => {
            const data = editor.getData();
          }}
          onBlur={(event, editor) => {
            // console.log('Blur.', editor);
          }}
          onFocus={(event, editor) => {
            // console.log('Focus.', editor);
          }}
        />
      </div>
    </>
  );
};

export default Editor;
