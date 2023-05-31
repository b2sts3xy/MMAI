import React, { useEffect, useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { Table, Button, ConfigProvider } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import "../../style/board/css/Board.css";
import BoardDetail from "./BoardDetail";
import axios from "axios";
import Headers from "../Headers";
import SideBar from "../navBar/SideBar";

const { Column } = Table;

const data = [
  {
    key: "1",
    index: 1,
    title: "Test1",
    writer: "Brown",
    date: "2023.04.23",
    viewCnt: 100,
  },
  {
    key: "2",
    index: 2,
    title: "Test2",
    writer: "Green",
    date: "2023.04.24",
    viewCnt: 120,
  },
  {
    key: "3",
    index: 3,
    title: "Test3",
    writer: "Black",
    date: "2023.04.24",
    viewCnt: 140,
  },
];

const BoardList = () => {
  const navigate = useNavigate();
  const [content, setContent] = useState([]);

  useEffect(() => {
    const getPostList = async () => {
      const res = await axios.get("/api/data");
      res.data.sort((a, b) => b.index - a.index);
      setContent(() => res.data);
    };
    getPostList();
  }, [content]);
  return (
    <div className="BoardContainer">
      <section className="BoardListContainer">
        <div className="temp">
          <SearchOutlined className="search" />
        </div>
        <Table
          dataSource={content}
          pagination={{
            position: ["bottomCenter"],
          }}
          // bordered={{ outerBorder: true, innerBorder: true }}
          onRow={(record, rowIndex) => {
            return {
              onClick: () => {
                navigate(`/board/notice/${record.index}`);
              },
            };
          }}
        >
          <Column
            title="number"
            dataIndex="index"
            key="index"
            width="4%"
            align="center"
          />
          <Column
            title="category"
            dataIndex="index"
            key="index"
            width="4%"
            align="center"
          />
          <Column
            title="title"
            dataIndex="title"
            key="title"
            width="40%"
            align="center"
          />
          <Column
            title="writer"
            dataIndex="writer"
            key="writer"
            width="7%"
            align="center"
          />
          <Column
            title="date"
            dataIndex="date"
            key="date"
            width="7%"
            align="center"
          />
          <Column title="view" dataIndex="viewCnt" key="viewCnt" width="6%" />
        </Table>

        <Button className="writeBtn">
          <Link to="/write">게시글 작성</Link>
        </Button>
      </section>
      <SideBar />
    </div>
  );
};

export default BoardList;
