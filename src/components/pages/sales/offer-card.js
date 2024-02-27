import React from "react";
import { Link } from "react-router-dom";

class OfferCard extends React.Component {
  constructor(props) {
    super(props);
  }

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

    return (
      <div className="min-w-[30%]">
        <div className="w-full shadow-neutral-color-gray">
          <div className="w-full h-full flex flex-row gap-2 border rounded p-4">
            <section className="w-[40vw flex flex-col gap-2">
              <div className="p-2 relative h-full">
                {this.getReducedPrice() && (
                  <div className="top-6 right-0 mr-2 absolute bg-red-500 text-white font-bold text-xl px-2 py-1 rounded-l-md">
                    {this.getReducedPrice()}
                  </div>
                )}
                <img src={imgPath} className="w-full h-full" />
              </div>
            </section>
            <section className="w-[60vw] flex flex-col gap-4 justify-center">
              <div className="h-fit flex flex-col gap-4">
                <p className="text-3xl font-bold">{title}</p>
                <p>{description}</p>
              </div>
              <div className="text-center my-8">
                <p className="text-lg text-gray-400">antes {originalPrice}€</p>
                <p className="text-8xl font-bold">{currentPrice}€</p>
              </div>
              <Link
                className="mx-auto w-fit bg-red-500 text-neutral-color-contrast hover:scale-90 active:scale-90 transition-all duration-200 py-3 px-8 rounded-sm font-bold tracking-wider"
                to="/contact"
              >
                CONTACTANOS
              </Link>
              <span className="text-center mt-4 font-bold text-red-500">
                {daysLeft === 0 && "¡Hoy es el último día!"}
                {daysLeft === 1 && `¡Solo queda ${daysLeft} día!`}
                {daysLeft > 1 && `¡Solo quedan ${daysLeft} días!`}
              </span>
            </section>
          </div>
        </div>
      </div>
    );
  }
}

export default OfferCard;
