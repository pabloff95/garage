import React from "react";
import FaIcon from "../../basic-elements/fa-icon";

class ServiceIcon extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="flex flex-col gap-3 items-center text-zinc-800">
        <FaIcon icon={this.props.icon} className="h-11" />
        <span className="text-lg font-sans font-semibold">
          {this.props.iconText}
        </span>
      </div>
    );
  }
}

export default ServiceIcon;
