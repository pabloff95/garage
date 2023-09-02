import React from "react";
import FaIcon from "../../basic-elements/fa-icon";

class ServiceIcon extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="flex flex-col items-center">
        <div className="h-10 w-10 bg-lime-500 rounded-full flex justify-center items-center">
          <FaIcon icon={this.props.icon} class="w-4/6 h-4/6" />
        </div>
        <span className="text-xs">{this.props.iconText}</span>
      </div>
    );
  }
}

export default ServiceIcon;
