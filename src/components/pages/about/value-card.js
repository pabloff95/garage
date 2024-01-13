import React from "react";
import FaIcon from "../../basic-elements/fa-icon";

class ValueCard extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount = () => {
    // Set circle width equal to height. Update it everytime that the element resizes. Using ResizeObserver can cause the loop limit times to be exceeded, due to some issue with the % height. See comment in app.js
    const circleElement = document.getElementById(`${this.props.icon}-circle`);

    const resizeObserver = new ResizeObserver(() => {
      circleElement.style.width = `${circleElement.offsetHeight}px`;
    });

    resizeObserver.observe(circleElement);
  };

  render() {
    const { styles, title, description, icon } = this.props;

    return (
      <div
        className={`${styles} flex flex-col justify-evenly items-center border shadow-neutral-color-gray p-4 rounded-lg border-b-4 border-b-primary-element`}
      >
        <section className="relative flex justify-center h-1/2 w-full">
          <div
            id={`${icon}-circle`}
            className="absolute h-full bg-primary-element rounded-full z-0 opacity-80"
          ></div>
          <div className="z-10">
            <FaIcon className="h-full" icon={icon} />
          </div>
        </section>
        <section className="flex flex-col px-3">
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
