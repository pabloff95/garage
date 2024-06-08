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
        className="min-w-[200px] w-full md:w-[20%] flex justify-center items-center"
        key={`${this.uniqueId}-img`}
      >
        <div
          className="w-4/6 md:w-full lg:w-5/6 flex justify-center h-auto overflow-hidden rounded"
          onClick={() => this.openModal()}
        >
          <img
            className="w-full hover:picture picture-shadow-light-sm"
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
        className="w-full md:w-[80%] flex justify-center items-center md:py-4"
        key={`${this.uniqueId}-information`}
      >
        <div className="flex flex-col gap-4 md:gap-2 w-11/12 justify-evenly h-full">
          <h2 className="text-center md:text-left font-bold text-2xl mt-6 md:mt-0">
            {this.props.title}
          </h2>
          <p>{this.props.text}</p>
          <Button
            styles="mb-4 md:mb-0 w-full md:w-fit px-8"
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
      <div className="mx-auto w-5/6 md:w-full min-w-[250px] border shadow-neutral-color-gray p-4 rounded-lg flex flex-col-reverse md:flex-row">
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
                to="/contacto"
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
