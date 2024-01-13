import React from "react";
import { Link } from "react-router-dom";

class Logo extends React.Component {
  render() {
    return (
      <div>
        <Link to="/" className="logo-container">
          {" "}
          <span className="flex flex-row align-center items-center">
            <span className="logo-text-first">TALLERES</span>
            <span className="logo-text">MOTEC</span>
          </span>
        </Link>
      </div>
    );
  }
}

export default Logo;
