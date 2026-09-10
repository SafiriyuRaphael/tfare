import React from "react";
import HeaderIcon from "../../components/HeaderIcon";
import { Outlet } from "react-router";

const AuthLayout = () => {
  return (
    <div className='bg-[url("/auth.jpg")] min-h-screen bg-cover relative z-20'>
      <div className="absolute inset-0 backdrop-blur-xs -z-10 bg-black/30"></div>
      <HeaderIcon />
      <div className="pt-32 flex items-center justify-center">
        <Outlet />
      </div>
    </div>
  );
};

export default AuthLayout;
