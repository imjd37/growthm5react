import React from "react";
import Footer from "./Components/Footer/Footer";
import { Outlet } from "react-router-dom";
import Navigation from "./Components/Navigation/Navigation";
import { useSelector } from "react-redux";
import NavigationEnquiry from "./Components/NavigationEnquiryy/NavigationEnquiry";

function Layout() {
  const navBarChange = useSelector((state) => state.navBarChange);

  return (
    <>
      {navBarChange ? <Navigation /> : <NavigationEnquiry />}
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
