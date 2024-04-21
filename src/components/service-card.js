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
            src={this.props.img?.src}
            alt={this.props.img?.alt}
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
          <h2 className="font-bold text-2xl">{this.props.title}</h2>
          <p>{this.props.text}</p>
          <Button
            styles="w-fit mt-4"
            text="Leer más"
            onClick={() => this.openModal()}
          ></Button>
        </div>
      </section>
    );
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
      <div className="border shadow-neutral-color-gray p-4 rounded-lg flex flex-col sm:flex-row">
        {[this.getInformationSection(), this.getImageSection()]}
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
                className="text-sm border border-b-neutral-color-primary hover:border-element-gained-focus hover:text-element-gained-focus hover:scale-95 hover:text-shadow-secondary-element transition-all duration-200 w-fit p-1.5 rounded font-bold tracking-wider"
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
