import React from "react";
import "../../style/sideBar/css/SideBar.css";

const SideBar = ({ setCategory }) => {
  const categories = ["all", "Pure World", "MMAI GAMES", "General", "News"];

  const onChangeCategory = (category) => {
    setCategory(() => category);
  };

  return (
    <div className="SideBar">
      <nav>
        {categories.map((category) => (
          <button
            key={category}
            className="CategoryBtn"
            onClick={() => onChangeCategory(category)}
          >
            {category}
          </button>
        ))}
      </nav>
    </div>
  );
};

export default SideBar;
