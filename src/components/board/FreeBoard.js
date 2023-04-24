import React from "react";
import Headers from "../Headers";
import { Link } from "react-router-dom";
import { Table, Button } from "antd";
import "../../style/board/css/Board.css";

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

const FreeBoard = () => {
  return (
    <>
      <Headers />
      <section className="BoardContainer">
        <Table
          dataSource={data}
          pagination={{
            position: ["bottomCenter"],
          }}
          bordered
        >
          <Column
            title="번호"
            dataIndex="index"
            key="index"
            width="5%"
            align="center"
          />
          <Column
            title="제목"
            dataIndex="title"
            key="title"
            width="50%"
            align="center"
          />
          <Column
            title="글쓴이"
            dataIndex="writer"
            key="writer"
            width="7%"
            align="center"
          />
          <Column
            title="날짜"
            dataIndex="date"
            key="date"
            width="7%"
            align="center"
          />
          <Column
            title="조회 수"
            dataIndex="viewCnt"
            key="viewCnt"
            width="7%"
          />
        </Table>
        <Button className="writeBtn">
          <Link to="/write">게시글 작성</Link>
        </Button>
      </section>
    </>
  );
};

export default FreeBoard;
