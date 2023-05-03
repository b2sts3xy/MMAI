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
  const [file, setFile] = useState([]);
  const navigate = useNavigate();
  const inputRef = useRef([]);
  const postId = useRef();

  useEffect(() => {
    return async () => {
      await axios.delete(`/api/upload/${postId.current}`);
    };
  }, []);

  const onRegister = async (e) => {
    e.preventDefault();
    console.log(file);
    const data = {
      title: inputRef.current[0].input.value,
      content: content,
      file: file,
      idx: postId.current,
    };

    console.log(data);
    const res = await axios.post("/api/register", data);
    console.log(res.data);
    if (res.status === 200) {
      console.log("성공~");
    } else {
      console.log("fail");
    }
    navigate(-1);
  };

  const onSaveUrl = (e) => {
    const formData = new FormData();
    formData.append("file", e.target.files[0]);
    axios
      .post(`/api/upload/${postId.current}/?type=files`, formData)
      .then((res) => {
        setFile([...file, res.data.filename]);
      });
  };

  return (
    <>
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
          <Input type="file" multiple={true} onChange={onSaveUrl} />
          <Button htmlType="submit" className="writeBtn">
            작성하기
          </Button>
        </form>
      </div>
    </>
  );
};

export default Write;
