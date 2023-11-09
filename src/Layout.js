import React from "react";
import Footer from "./Components/Footer/Footer";
import { Outlet } from "react-router-dom";

function Layout(){
    return(
        <>
        <Outlet/>
        <Footer/>
        </>
    )
}

export default Layout;