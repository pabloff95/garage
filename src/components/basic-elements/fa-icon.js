import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faCopy,
  faTimes,
  faClock,
  faLocationDot,
  faUpRightFromSquare,
  faPhone,
  faStar,
  faMagnifyingGlassPlus,
  faRankingStar,
  faHandshake,
  faPeopleGroup,
  faIdBadge,
  faEnvelope,
  faCar,
  faOilCan,
  faScrewdriverWrench,
  faArrowTrendUp,
  faPlus,
  faCircleDot,
  faSquareXmark,
} from "@fortawesome/free-solid-svg-icons";
// import * as Icons from "@fortawesome/free-solid-svg-icons"; See comment bellow
import { faFacebook } from "@fortawesome/free-brands-svg-icons";

// Import only the used icons to avoid loading all the icons when loading the pages. New icons should be imported
// from "@fortawesome/free-solid-svg-icons" and then added to "iconList". In case of wanting to import them all uncomment the following code.

/* 
  Import all icons from https://fontawesome.com
  const iconList = Object.keys(Icons)
    .filter((key) => key !== "fas" && key !== "prefix")
    .map((icon) => Icons[icon]);
*/

const iconList = [
  faCopy,
  faTimes,
  faClock,
  faLocationDot,
  faUpRightFromSquare,
  faPhone,
  faStar,
  faMagnifyingGlassPlus,
  faRankingStar,
  faHandshake,
  faPeopleGroup,
  faIdBadge,
  faEnvelope,
  faCar,
  faOilCan,
  faScrewdriverWrench,
  faArrowTrendUp,
  faPlus,
  faCircleDot,
  faSquareXmark,
];

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
