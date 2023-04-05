import React from "react";
import Navbar from "./Navbar";

const Layout = ({ headerData }) => {
  return (
    <header className=" flex min-w-full flex-col">
      <Navbar headerData={headerData} />
    </header>
  );
};

export default Layout;
