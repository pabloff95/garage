import React from "react";
import Button from "./basic-elements/button";
import BasicModal from "./basic-elements/basic-modal";
import { Link } from "react-router-dom";

class ServiceCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isModalOpen: false,
    };
  }

  uniqueId = Date.now();

  getImageSection = () => {
    return (
      <section
        className="w-1/6 flex justify-center items-center"
        key={`${this.uniqueId}-img`}
      >
        <div
          className="flex justify-center w-5/6 overflow-hidden rounded"
          onClick={() => this.openModal()}
        >
          <img
            className="w-full hover:picture"
            src="/images/pages/services/car.png"
            alt="Logo de coche"
          />
        </div>
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
          <Button
            styles="w-fit"
            text="Leer más"
            onClick={() => this.openModal()}
          ></Button>
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

  openModal = () => {
    this.setState({
      isModalOpen: true,
    });
  };

  closeModal = () => {
    this.setState({
      isModalOpen: false,
    });
  };

  render() {
    return (
      <div className="border shadow-neutral-color-gray p-4 rounded-lg flex flex-row gap-2">
        {this.getServiceCardSections()}
        <BasicModal
          isOpen={this.state.isModalOpen}
          onClose={this.closeModal}
          title={this.props.title}
          showCloseButton={true}
        >
          <div className="flex flex-col justify-between h-full">
            <section className="flex flex-col gap-2">
              {this.props.children}
            </section>
            <section className="w-full flex justify-center my-2">
              <Link
                className="text-sm border border-b-neutral-color-primary hover:border-primary-element hover:text-primary-element hover:scale-95 hover:text-shadow-tertiary-element transition-all duration-200 w-fit p-1.5 rounded font-bold tracking-wider"
                to="/contact"
              >
                CONTACTANOS
              </Link>
            </section>
          </div>
        </BasicModal>
      </div>
    );
  }
}

export default ServiceCard;
