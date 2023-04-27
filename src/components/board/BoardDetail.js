import React from "react";
import { useParams } from "react-router-dom";
import { Typography } from "antd";

const { Title } = Typography;

const BoardDetail = ({ record }) => {
  const { postId } = useParams();
  return (
    <>
      <div>
        <p>{postId}</p>
        {console.log(postId)}
      </div>
      <div className="DetailContainer">
        <Title level={1}>안녕하세요</Title>
      </div>
    </>
  );
};

export default BoardDetail;
