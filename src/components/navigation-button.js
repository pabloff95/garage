import React from "react";
import { Link } from "react-router-dom";

class NavigationButton extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Link
        className={`navigation-button p-0.5 sm:p-2 sm:tracking-wide text-center ${this.props.extraClasses}`}
        to={this.props.href}
      >
        {this.props.text.toUpperCase()}
      </Link>
    );
  }
}

export default NavigationButton;
