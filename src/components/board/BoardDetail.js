import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Typography } from "antd";
import axios from "axios";
import Headers from "../Headers";

const { Title } = Typography;

const BoardDetail = ({ record }) => {
  const [data, setData] = useState([]);
  const { postId } = useParams();

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get(`/api/data/${postId}`);
        setData(() => res.data);
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
        <p>{data.content}</p>
      </div>
    </>
  );
};

export default BoardDetail;
