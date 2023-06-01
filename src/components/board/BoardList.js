import React, { useEffect, useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { Table, Button, Input } from "antd";
import "../../style/board/css/Board.css";
import axios from "axios";
import SideBar from "../navBar/SideBar";

const { Column } = Table;
const { Search } = Input;

const BoardList = () => {
  const navigate = useNavigate();
  const [category, setCategory] = useState("all");
  const [content, setContent] = useState([]);
  const [filteredContent, setFilteredContent] = useState(content);

  useEffect(() => {
    const getPostList = async () => {
      const res = await axios.get("/api/data");
      res.data.sort((a, b) => b.index - a.index);
      setContent(() => res.data);
    };
    getPostList();
  }, []);

  useEffect(() => {
    setFilteredContent(
      category === "all"
        ? content
        : content.filter((item) => item.category === category)
    );
    console.log(filteredContent);
  }, [category, content]);

  const onSearch = (value) => {
    setFilteredContent(content.filter((item) => item.title.includes(value)));
  };

  return (
    <div className="BoardContainer">
      <section className="BoardListContainer">
        <Search onSearch={onSearch} enterButton />
        <Table
          dataSource={filteredContent}
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
            dataIndex="category"
            key="category"
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
      <SideBar setCategory={setCategory} />
    </div>
  );
};

export default BoardList;
