import React, { useState, useEffect, useRef } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import "../../style/board/css/Editor.css";
import axios from "axios";

const Editor = ({ content, setContent, setImage }) => {
  const [flag, setFlag] = useState(false);
  const imgLink = "http://localhost:8000/images/";
  const fileInput = useRef(null);

  useEffect(() => {
    axios.get("/api/test").then((res) => console.log(res));
  }, []);

  const customUploadAdapter = (loader) => {
    // (2)
    return {
      upload() {
        return new Promise((resolve, reject) => {
          const data = new FormData();
          loader.file.then((file) => {
            data.append("name", file.name);
            data.append("file", file);

            axios
              .post("/api/upload", data)
              .then((res) => {
                console.log("ASDFASDF");
                if (!flag) {
                  setFlag(true);
                  setImage(res.data.filename);
                }
                resolve({
                  default: `${imgLink}/${res.data.filename}`,
                });
              })
              .catch((err) => reject(err));
          });
        });
      },
    };
  };

  function uploadPlugin(editor) {
    // (3)
    editor.plugins.get("FileRepository").createUploadAdapter = (loader) => {
      return customUploadAdapter(loader);
    };
  }

  return (
    <>
      <div className="Editor_Container">
        <CKEditor
          editor={ClassicEditor}
          config={{
            // (4)
            extraPlugins: [uploadPlugin],
          }}
          data="<p>Hello World</p>"
          onReady={(editor) => {
            // console.log('Editor is ready to use!', editor);
          }}
          onChange={(event, editor) => {
            const data = editor.getData();
            setContent(data);
            console.log(data);
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
