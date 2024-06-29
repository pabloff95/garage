import React from "react";
import FaIcon from "../../basic-elements/fa-icon";

class ValueCard extends React.Component {
  componentDidMount = () => {
    // Set circle width equal to height. Update it everytime that the element resizes. Using ResizeObserver can cause the loop limit times to be exceeded, due to some issue with the % height. See comment in app.js
    const circleElement = document.getElementById(`${this.props.icon}-circle`);

    const resizeObserver = new ResizeObserver(() => {
      circleElement.style.width = `${circleElement.offsetHeight}px`;
    });

    resizeObserver.observe(circleElement);
  };

  render() {
    const { title, description, icon, iconClasses } = this.props;

    return (
      <div
        className={`animate-on-scroll min-w-[200px] min-[400px]:w-[22%] h-[${
          window.innerHeight > 750 ? "35" : 45 // Fit content in small devices
        }vh] flex flex-col justify-evenly items-center border shadow-neutral-color-gray p-4 rounded-lg border-b-4 border-b-primary-element overflow-y-hidden bg-white`}
      >
        <section className="relative flex justify-center min-h-[75px] md:min-h-[100px] h-1/3 sm:h-1/2 max-h-[15vw] w-full">
          <div
            id={`${icon}-circle`}
            className="absolute h-full bg-primary-element rounded-full z-0 opacity-80"
          ></div>
          <div className="z-10 flex items-center justify-center">
            <FaIcon className={iconClasses ?? "h-full"} icon={icon} />
          </div>
        </section>
        <section className="flex flex-col pt-3 pb-5">
          <span className="text-center text-lg font-bold">{title}</span>
          <span className="mt-2 text-sm text-justify text-gray-800">
            {description}
          </span>
        </section>
      </div>
    );
  }
}

export default ValueCard;
