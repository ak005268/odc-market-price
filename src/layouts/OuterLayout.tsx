import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
// import Image from "../components/Image";

const OuterLayout = () => {
  return (
    <div className="theme-bg ">
      <Header />
      <Outlet />
    </div>
  );
};

export default OuterLayout;
