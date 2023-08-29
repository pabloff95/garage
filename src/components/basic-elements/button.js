import React from "react";

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <button type="button" onClick={this.props.onClick}>
        {this.props.text}
      </button>
    );
  }
}

export default Button;
