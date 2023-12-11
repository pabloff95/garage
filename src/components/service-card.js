import React from "react";
import Button from "./basic-elements/button";

class ServiceCard extends React.Component {
  constructor(props) {
    super(props);
  }

  uniqueId = Date.now();

  getImageSection = () => {
    return (
      <section
        className="w-1/6 flex justify-center items-center"
        key={`${this.uniqueId}-img`}
      >
        <img
          className="w-5/6"
          src="/images/pages/services/car.png"
          alt="Logo de coche"
        />
      </section>
    );
  };

  getInformationSection = () => {
    return (
      <section
        className="w-5/6 flex justify-center items-center"
        key={`${this.uniqueId}-information`}
      >
        <div className="flex flex-col gap-2 w-11/12">
          <h2 className="font-bold">{this.props.title}</h2>
          <p>{this.props.text}</p>
          <Button styles="w-fit" text="Leer más"></Button>
        </div>
      </section>
    );
  };

  getServiceCardSections = () => {
    // Alternate order on each row
    if (this.props.isEven) {
      return [this.getImageSection(), this.getInformationSection()];
    }

    return [this.getInformationSection(), this.getImageSection()];
  };

  render() {
    return (
      <div className="border shadow-neutral-color-gray p-4 rounded-lg flex flex-row gap-2">
        {this.getServiceCardSections()}
      </div>
    );
  }
}

export default ServiceCard;
