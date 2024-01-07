import React from "react";
import { Link } from "react-router-dom";

class NavigationButton extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Link className="navigation-button" to={this.props.href}>
        {this.props.text.toUpperCase()}
      </Link>
    );
  }
}

export default NavigationButton;
