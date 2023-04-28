import React, { useState, useEffect, useRef, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Headers from "../Headers";
import Editor from "./Editor";
import { Button, Input, Space } from "antd";
import "../../style/board/css/Write.css";
import axios from "axios";

const Write = () => {
  const [content, setContent] = useState("");
  const [image, setImage] = useState("");
  const navigate = useNavigate();
  const inputRef = useRef([]);
  const postId = useRef();

  // useEffect(() => {
  //   return async () => {
  //     await axios.delete(`/api/upload`);
  //   };
  // }, []);

  const onRegister = async (e) => {
    e.preventDefault();
    const data = {
      title: inputRef.current[0].input.value,
      content: content,
      idx: postId.current,
    };

    const res = await axios.post("/api/register", data);
    console.log(res.data);
    if (res === 200) {
      console.log("성공~");
    } else {
      console.log("fail");
    }
  };

  const onUploadImage = useCallback((e) => {
    if (!e.target.files) {
      return;
    }
    console.log(e.target.files[0].name);
  }, []);

  return (
    <>
      <Headers />
      <div className="WriteContainer">
        <form className="WriteForm" onSubmit={onRegister}>
          <Input
            ref={(value) => (inputRef.current[0] = value)}
            className="inputBox"
            size="large"
            placeholder=""
          />
          <Editor
            data={content}
            postId={postId}
            setContent={setContent}
            setImage={setImage}
          />
          <Input
            type="file"
            ref={(value) => inputRef.current[1]}
            onChange={onUploadImage}
          />
          <Button htmlType="submit" className="writeBtn">
            작성하기
          </Button>
        </form>
      </div>
    </>
  );
};

export default Write;
