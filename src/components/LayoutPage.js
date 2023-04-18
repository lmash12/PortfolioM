import React from "react";
import { Outlet } from "react-router-dom";
import HeaderSection from "./HeaderSection";
import Footer from "./Footer";

const LayoutPage = () => {
  return (
    <div>
      <HeaderSection />
      {<Outlet />}
      <Footer />
    </div>
  );
};

export default LayoutPage;
