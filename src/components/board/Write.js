import React, { useState, useEffect, useRef, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Headers from "../Headers";
import Editor from "./Editor";
import { Button } from "antd";
import "../../style/board/css/Write.css";
import axios from "axios";

const Write = () => {
  const [content, setContent] = useState("");
  const [image, setImage] = useState("");
  const navigate = useNavigate();
  const fileRef = useRef(null);

  useEffect(() => {
    return async () => {
      await axios.delete(`/api/upload`);
    };
  }, []);

  const onRegister = async () => {
    console.log(content);
    navigate(-1);
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
        <Editor data={content} setContent={setContent} setImage={setImage} />
        <input type="file" ref={fileRef} onChange={onUploadImage} />
        <Button className="writeBtn" onClick={onRegister()}>
          작성하기
        </Button>
      </div>
    </>
  );
};

export default Write;
