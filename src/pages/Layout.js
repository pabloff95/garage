import React from "react";
import Header from "../components/main-app/header";
import { Outlet, Link } from "react-router-dom";

class Layout extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Outlet />
      </div>
    );
  }
}

export default Layout;
