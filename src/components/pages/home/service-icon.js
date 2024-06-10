import React from "react";
import FaIcon from "../../basic-elements/fa-icon";

class ServiceIcon extends React.Component {
  render() {
    const { iconText, icon } = this.props;

    return (
      <>
        <section className="basis-1/2 min-[600px]:basis-1/3 md:basis-auto my-2 flex flex-col sm:gap-3 items-center text-zinc-800">
          <div className="relative">
            <div className="absolute bg-primary-element rounded-full z-0 opacity-80 h-10 sm:h-14 md:h-20 w-10 sm:w-14 md:w-20  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
            <div className="relative z-10">
              <FaIcon icon={icon} className="h-6 sm:h-8 md:h-11 z-10" />
            </div>
          </div>
          <span className="text-center text-sm sm:text-lg font-bold mt-4">
            {iconText}
          </span>
        </section>
      </>
    );
  }
}

export default ServiceIcon;
