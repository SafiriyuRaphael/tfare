import React from "react";
import { Outlet } from "react-router";
import HeaderIcon from "./components/HeaderIcon";

const Layout = () => {
  return (
    <div>
      <header className="">
        <HeaderIcon />
      </header>
      <main className=" bg-cover bg-no-repeat bg-bottom min-h-screen relative z-20">
        <div className="absolute inset-0  -z-10">
          <img
            src="/unsplash1.jpg"
            alt=""
            className="w-full  object-fill  h-full"
          />
        </div>
        <div className="bg-black/60 backdrop-blur-xs absolute inset-0 -z-10"></div>
        <div>
          <Outlet />
        </div>
      </main>
      <footer></footer>
    </div>
  );
};

export default Layout;
