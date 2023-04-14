import React from "react";
import { Link } from "react-router-dom";
import Headers from "../Headers";

const FreeBoard = () => {
  return (
    <>
      <Headers />
      <div>FreeBoard</div>
      <Link to="/write">Write</Link>
    </>
  );
};

export default FreeBoard;
