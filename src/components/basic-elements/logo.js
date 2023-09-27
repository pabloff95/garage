import React from "react";
import { Link } from "react-router-dom";
import FaIcon from "./fa-icon";

class Logo extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Link to="/" className="logo-container">
          {" "}
          <FaIcon icon="screwdriver-wrench" className="logo-icon" />
          <span className="logo-text">MOTEC</span>
        </Link>
      </div>
    );
  }
}

export default Logo;
