import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Divider, Typography } from "antd";
import axios from "axios";
import "../../style/board/css/BoardDetail.css";
import parse from "html-react-parser";

const { Title } = Typography;

const BoardDetail = ({ record }) => {
  const [data, setData] = useState([]);
  const { postId } = useParams();

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get(`/api/data/${postId}`);
        if (res.status === 200) {
          setData(() => res.data);
        } else {
          console.log("Err");
        }
      } catch (e) {
        console.error(e);
      }
    };
    getData();
  }, []);

  return (
    <>
      <div className="DetailContainer">
        <Title level={1}>{data.title}</Title>
        <Divider />
        <div>{data?.content ? parse(data.content) : null}</div>
      </div>
    </>
  );
};

export default BoardDetail;
