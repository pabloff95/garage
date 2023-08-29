import React from "react";
import { Link } from "react-router-dom";

class NavigationButton extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <Link to={this.props.href}>{this.props.text}</Link>;
  }
}

export default NavigationButton;
