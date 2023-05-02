import React from "react";
import { Outlet } from "react-router-dom";
import Headers from "./Headers";

const Layout = () => {
  return (
    <div>
      <Headers />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
