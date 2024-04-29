import React from "react";
import FaIcon from "../../basic-elements/fa-icon";

class ServiceIcon extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="basis-[100%] min-[300px]:basis-[50%] my-2 sm:my-0 sm:basis-[unset] flex flex-col sm:gap-3 items-center text-zinc-800">
        <FaIcon icon={this.props.icon} className="h-6 sm:h-8 md:h-11" />
        <span className="text-sm sm:text-md md:text-lg font-sans font-semibold">
          {this.props.iconText}
        </span>
      </div>
    );
  }
}

export default ServiceIcon;
