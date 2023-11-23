import React from "react";
import { Outlet } from "react-router-dom";

const AdminLayout = () => {
  return (
    <div className="">
      <p className="bg-color-red text-color-mild text-center font-extrabold text-xl">
        {" "}
        Welcome to AdminLayout
      </p>
      <div className="p-4">
        <Outlet />
      </div>
    </div>
  );
};

export default AdminLayout;
