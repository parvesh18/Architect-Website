import React from "react";
import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <div style={{"font-family": "Raleway"}}>
      <Navbar />
      <Outlet />
    </div>
  );
};

export default AppLayout;
