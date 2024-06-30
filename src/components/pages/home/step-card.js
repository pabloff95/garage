import React from "react";

class StepCard extends React.Component {
  get isContainerRenderedAsRow() {
    const parentContainerWidth = Math.ceil(window.innerWidth * 0.8); // 80% because the parent container uses w-[80%]
    return Math.ceil(parentContainerWidth / 3 > 250); // 250 because that's the step-carf min-width
  }

  getCardWidth = () => {
    return this.isContainerRenderedAsRow
      ? "max-w-[25%] min-w-[250px]"
      : "w-full sm:w-3/4";
  };

  render() {
    const { step, title, children } = this.props;

    return (
      <div
        className={`${this.getCardWidth()} flex flex-col justify-center align-center min-h-[40vh] animate-on-scroll my-4`}
      >
        <section
          className={`w-full ${
            this.isContainerRenderedAsRow ? "h-1/3" : "h-[10vh]"
          }`}
        >
          <div className="relative h-full flex justify-center items-center">
            <div className="flex justify-center items-center z-10 text-4xl font-bold text-white">
              {step}
            </div>
            <div className="absolute h-full aspect-square bg-primary-element rounded-full z-0 opacity-80"></div>
          </div>
        </section>
        <section className="h-2/3 text-center px-6 grow flex flex-col gap-4 mt-8">
          <p className="text-xl font-bold uppercase tracking-wider">{title}</p>
          <div className="paragraph">{children}</div>
        </section>
      </div>
    );
  }
}

export default StepCard;
