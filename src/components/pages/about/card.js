import React from "react";
import FaIcon from "../../basic-elements/fa-icon";

class Card extends React.Component {
  componentDidMount = () => {
    // Set circle width equal to height. Update it everytime that the element resizes. Using ResizeObserver can cause the loop limit times to be exceeded, due to some issue with the % height. See comment in app.js
    const circleElement = document.getElementById(`${this.props.icon}-circle`);

    const resizeObserver = new ResizeObserver(() => {
      circleElement.style.width = `${circleElement.offsetHeight}px`;
    });

    resizeObserver.observe(circleElement);
  };

  render() {
    const { title, description, icon, iconClasses, cardWidth } = this.props;

    return (
      <div
        className={`animate-on-scroll min-w-[${
          cardWidth ?? "200"
        }px] min-[525px]:w-[22%] h-auto flex flex-col items-center border shadow-neutral-color-gray p-4 rounded-lg border-b-4 border-b-primary-element bg-white`}
      >
        <section className="relative flex justify-center min-h-[75px] md:min-h-[100px] max-h-[15vw] w-full">
          <div
            id={`${icon}-circle`}
            className="absolute h-full bg-primary-element rounded-full z-0 opacity-80"
          ></div>
          <div className="z-10 flex items-center justify-center">
            <FaIcon className={iconClasses ?? "h-full"} icon={icon} />
          </div>
        </section>
        <section className="flex flex-col grow pt-3 pb-5">
          <span className="text-center text-lg font-bold">{title}</span>
          <span className="mt-2 text-md text-justify text-gray-800">
            {description}
          </span>
        </section>
      </div>
    );
  }
}

export default Card;
