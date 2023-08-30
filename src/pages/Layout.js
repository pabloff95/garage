import React from "react";
import Header from "../components/main-layout/header";
import { Outlet } from "react-router-dom";
import Footer from "../components/main-layout/footer";

class Layout extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Outlet />
        <Footer />
      </div>
    );
  }
}

export default Layout;
