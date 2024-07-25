import React from "react";
import { Link } from "react-router-dom";

class ServiceCard extends React.Component {
  uniqueId = Date.now();

  getImageSection = () => {
    return (
      <section
        className="min-w-[200px] w-full md:w-[20%] flex justify-center items-center"
        key={`${this.uniqueId}-img`}
      >
        <div className="w-4/6 md:w-full lg:w-5/6 flex justify-center h-auto overflow-hidden rounded">
          <img
            className="w-full picture-shadow-light-sm"
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
          <p className="paragraph">{this.props.text}</p>
          <Link
            className="button mb-4 text-center md:mb-0 w-full md:w-fit px-6"
            to="/contacto"
          >
            CONTACTANOS
          </Link>
        </div>
      </section>
    );
  };

  render() {
    return (
      <div className="animate-on-scroll mx-auto w-full min-w-[250px] border border-b-4 border-b-primary-element shadow-neutral-color-gray p-4 rounded-lg flex flex-col-reverse md:flex-row">
        {[this.getInformationSection(), this.getImageSection()]}
      </div>
    );
  }
}

export default ServiceCard;
