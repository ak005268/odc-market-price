import React from "react";
import { Outlet } from "react-router-dom";

const UserLayout = () => {
  return (
    <div className="">
      <p className="bg-color-blue text-color-mild text-center font-extrabold text-xl">
        {" "}
        Welcome to UserLayout
      </p>
      <div className="p-4">
        <Outlet />
      </div>
    </div>
  );
};

export default UserLayout;
