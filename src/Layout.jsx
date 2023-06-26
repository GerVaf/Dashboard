import React from "react";
import Nav from "./components/Nav";
import SlideBar from "./SlideBar";

const Layout = ({ children }) => {
  return (
    <div className="flex">
      <div className="w-2/12">
        <SlideBar />
      </div>
      <div className="w-10/12 bg-zinc-200 overflow-scroll flex flex-col">
        <Nav />
        {children}
      </div>
    </div>
  );
};

export default Layout;
