import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./header.js";
import Footer from "./footer.js";
import ScrollToHash from "./scrolltohash.js";

function Layout() {
  return (
    <div className="App">
      <ScrollToHash />
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Layout;
