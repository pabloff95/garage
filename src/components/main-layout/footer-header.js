import React from "react";
import FaIcon from "../basic-elements/fa-icon";

class FooterHeader extends React.Component {
  render() {
    return (
      <div className="flex flex-row gap-2 items-center">
        <FaIcon icon={this.props.icon} />
        <span className="footer-title">{this.props.text}</span>
      </div>
    );
  }
}

export default FooterHeader;
