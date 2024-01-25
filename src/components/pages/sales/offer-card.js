import React from "react";
import FaIcon from "../../basic-elements/fa-icon";

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
        <div className="font-bold text-xl py-1">
          <div className="relative h-fit flex flex-row w-full justify-center items-end mb-2">
            <span>¡Solo quedan </span>
            <span className="relative flex justify-center w-[3rem]">
              <FaIcon icon="calendar" className="absolute h-full" />
              <span className="text-white !z-50 mt-[1rem]">{daysLeft}</span>
            </span>
            <span> días!</span>
          </div>
        </div>
        <div className="w-fit shadow-neutral-color-gray">
          <main className="flex flex-col gap-2 items-center border rounded border-primary-element p-4">
            <section className="h-[40vh] w-fit relative">
              {this.getReducedPrice() && (
                <div className="top-4 right-0 absolute bg-red-500 text-white font-bold text-xl px-2 py-1 rounded-l-md">
                  {this.getReducedPrice()}
                </div>
              )}
              <img src={imgPath} className="h-full" />
            </section>
            <section>
              <span className="text-3xl font-bold">{title}</span>
            </section>
            <section>
              <span>{description}</span>
            </section>
          </main>
          <footer>
            <span className="flex flex-col text-center bg-primary-element py-2">
              <span className="text-4xl  font-bold">{currentPrice}€</span>
              <span className="line-through mr-1">{originalPrice}€</span>
            </span>
          </footer>
        </div>
      </div>
    );
  }
}

export default OfferCard;
