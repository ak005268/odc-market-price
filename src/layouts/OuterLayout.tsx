import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";

const OuterLayout = () => {
  return (
    <div className="">
      <Header />
      <Outlet />
    </div>
  );
};

export default OuterLayout;
