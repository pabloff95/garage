import React from "react";
import Button from "./basic-elements/button";

class NavigationButton extends React.Component {
  constructor(props) {
    super(props);
  }

  navigateToUrl = () => {
    console.log("Navigate!");
  };

  render() {
    return <Button text={this.props.text} onClick={this.navigateToUrl} />;
  }
}

export default NavigationButton;
