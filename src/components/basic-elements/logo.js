import React from "react";
import { Link } from "react-router-dom";
import FaIcon from "./fa-icon";

class Logo extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="flex flex-row items-center justify-center">
        <FaIcon icon="screwdriver-wrench" />
        <div className="logo">
          <Link to="/">MOTEC</Link>
        </div>
      </div>
    );
  }
}

export default Logo;
