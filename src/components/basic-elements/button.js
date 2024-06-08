import React from "react";
import FaIcon from "./fa-icon";

class Button extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <button
        type="button"
        className={`button ${this.props.styles}`}
        onClick={this.props.onClick}
      >
        {this.props.icon && <FaIcon icon={this.props.icon} className="mr-2" />}
        {this.props.text}
      </button>
    );
  }
}

export default Button;
