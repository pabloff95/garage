import React from "react";
import { Link } from "react-router-dom";

class NavigationButton extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="p-2 hover:bg-primary-element hover:text-neutral-primary rounded">
        <Link to={this.props.href}>{this.props.text.toUpperCase()}</Link>
      </div>
    );
  }
}

export default NavigationButton;
