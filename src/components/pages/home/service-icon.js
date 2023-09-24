import React from "react";
import FaIcon from "../../basic-elements/fa-icon";

class ServiceIcon extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="flex flex-row gap-3 items-center">
        <div className="h-10 w-10 bg-yellow-300 rounded-full flex justify-center items-center">
          <FaIcon
            icon={this.props.icon}
            className="h-[65%] w-[65%]"
            color="rgb(39 39 42)" // text-zinc-800
          />
        </div>
        <span className="text-lg font-sans text-zinc-800">
          {this.props.iconText}
        </span>
      </div>
    );
  }
}

export default ServiceIcon;
