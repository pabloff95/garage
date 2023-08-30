import React from "react";
import { Link } from "react-router-dom";

class NavigationButton extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="p-2 hover:bg-slate-500 rounded">
        <Link to={this.props.href}>{this.props.text}</Link>
      </div>
    );
  }
}

export default NavigationButton;
