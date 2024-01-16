import React from "react";
import Header from "../components/main-layout/header";
import { Outlet } from "react-router-dom";
import Footer from "../components/main-layout/footer";
import Notification from "../components/notification";

class Layout extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="h-full w-full">
        <Header />
        <Outlet />
        <Footer />
        <Notification />
        {/* Notification component must only be added once, to prevent duplicates */}
      </div>
    );
  }
}

export default Layout;
