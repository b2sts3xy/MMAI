import React, { useState, useEffect, useRef, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Headers from "../Headers";
import Editor from "./Editor";
import { Button, Input, Space } from "antd";
import "../../style/board/css/Write.css";
import axios from "axios";
import Category from "./Category";

const Write = () => {
  const [category, setCategory] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState("");
  const [file, setFile] = useState([]);
  const navigate = useNavigate();
  const postId = useRef();

  useEffect(() => {
    return async () => {
      await axios.delete(`/api/upload/${postId.current}`);
    };
  }, []);

  const onChangeTitle = (e) => {
    setTitle(e.target.value);
  };

  const onChangeCategory = (e) => {
    setCategory(e.target.value);
  };

  const onRegister = async (e) => {
    e.preventDefault();
    console.log(file);
    const data = {
      category: category,
      title: title,
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

  const onSaveUrl = async (e) => {
    const formData = new FormData();

    [...e.target.files].forEach((file) => {
      formData.append("file", file);
    });
    console.log(formData);

    const res = await axios
      .post(`/api/upload/${postId.current}/?type=files`, formData)
      .then((res) => res.data);
    setFile(res);
  };

  return (
    <>
      <div className="WriteContainer">
        <form className="WriteForm" onSubmit={onRegister}>
          <div className="WriteFormHeader">
            <select className="Category" onChange={onChangeCategory}>
              <option>category</option>
              <option value="pureWorld">Pure World</option>
              <option value="mmaiGames">MMAI GAMES</option>
              <option value="general">General</option>
              <option valye="news">News</option>
            </select>
            <Input
              className="inputBox"
              value={title}
              onChange={onChangeTitle}
              size="large"
              placeholder="제목을 입력해주세요"
            />
          </div>
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
