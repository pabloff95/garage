import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import * as Icons from "@fortawesome/free-solid-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";

// Import all icons from https://fontawesome.com
const iconList = Object.keys(Icons)
  .filter((key) => key !== "fas" && key !== "prefix")
  .map((icon) => Icons[icon]);

// Brand icons belong to a different module. Add only those used in the app
iconList.push(faFacebook);

library.add(...iconList);

class FaIcon extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <FontAwesomeIcon
        icon={this.props.icon}
        className={this.props.className}
        style={{ color: this.props.color }}
      />
    );
  }
}

export default FaIcon;
