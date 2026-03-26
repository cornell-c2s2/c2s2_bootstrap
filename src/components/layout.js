import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./header.js";
import Footer from "./footer.js";

function Layout() {
  return (
    <div className="App">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Layout;
