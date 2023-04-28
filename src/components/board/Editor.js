import React, { useState, useEffect } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import "../../style/board/css/Editor.css";
import axios from "axios";

const Editor = ({ postId, content, setContent, setImage }) => {
  const [flag, setFlag] = useState(false);
  const imgLink = "http://localhost:8000/images";

  useEffect(() => {
    const getPostId = async () => {
      try {
        const idx = await axios.get("/api/postId");
        postId.current = idx.data;
      } catch (e) {
        console.err(e);
      }
    };
    getPostId();
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
              .post(`/api/upload/${postId.current}`, data)
              .then((res) => {
                if (!flag) {
                  setFlag(true);
                  setImage(res.data.filename);
                }
                resolve({
                  default: `${imgLink}/temp/postId_${postId.current}/${res.data.filename}`,
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
