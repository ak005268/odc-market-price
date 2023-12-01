// import React from "react";
// import Image from "../components/Image";

const Header = () => {
  const menu = [
    { name: "Home", nav: "/home" },
    { name: "Price", nav: "/Price" },
    { name: "About", nav: "/About" },
  ];
  return (
    <div>
      <div className="bg-color-blue  opacity-50">
        <ul className="flex right-0">
          {menu.map((item: any) => (
            <>
              <li className="text-color-mild ml-2">{item?.name}</li>
            </>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Header;
