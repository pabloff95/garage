import React from "react";
import { Link } from "react-router-dom";

class OfferCard extends React.Component {
  getReducedPrice = () => {
    // Show reduced price as percentage
    const { originalPrice, currentPrice } = this.props;

    const reducedPrice = Math.round(100 - (currentPrice * 100) / originalPrice);

    return reducedPrice ? `-${reducedPrice}%` : "";
  };

  render() {
    const {
      title,
      description,
      originalPrice,
      currentPrice,
      imgPath,
      daysLeft,
    } = this.props;

    const daysLeftMessage =
      daysLeft === 0
        ? "¡Hoy es el último día!"
        : `¡Solo queda ${daysLeft} día${daysLeft === 1 ? "" : "s"}!`;

    return (
      <div className="animate-on-scroll min-w-[300px]">
        <div className="w-full shadow-neutral-color-gray">
          <div className="w-full h-full flex flex-col lg:flex-row gap-2 border rounded p-4">
            <section className="m-auto lg:m-0 w-full sm:w-11/12 lg:w-auto flex flex-col gap-2 p-2">
              <div className="relative h-full">
                {this.getReducedPrice() && (
                  <div className="top-6 right-0 mr-2 absolute bg-red-500 text-white font-bold text-xl px-2 py-1 rounded-l-md">
                    {this.getReducedPrice()}
                  </div>
                )}
                <img
                  src={imgPath}
                  className="w-full h-full"
                  alt={`Oferta actual en nuestro taller en "${title}", por ${currentPrice}€!`}
                />
              </div>
            </section>
            <section className="m-auto lg:m-0 w-full sm:w-11/12 lg:w-[60vw] flex flex-col gap-2 sm:gap-4 justify-center p-2">
              <div className="h-fit flex flex-col sm:gap-4">
                <p className="text-3xl font-bold">{title}</p>
                <p>{description}</p>
              </div>
              <div className="text-center my-2 sm:my-6 lg:my-8">
                <p className="text-lg text-gray-400">antes {originalPrice}€</p>
                <p className="text-6xl sm:text-8xl font-bold">
                  {currentPrice}€
                </p>
              </div>
              <Link
                className="mx-auto w-fit bg-red-500 text-neutral-color-contrast hover:scale-90 active:scale-90 transition-all duration-200 py-3 px-12 lg:px-8 rounded-sm font-bold tracking-wider"
                to="/contacto"
              >
                CONTACTANOS
              </Link>
              <span className="text-center mt-4 font-bold text-red-500">
                {daysLeftMessage}
              </span>
            </section>
          </div>
        </div>
      </div>
    );
  }
}

export default OfferCard;
