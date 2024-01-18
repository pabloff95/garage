import React from "react";

class OfferCard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { title, description, originalPrice, currentPrice, imgPath } =
      this.props;

    return (
      <div>
        <div className="w-fit shadow-neutral-color-gray">
          <main className="flex flex-col gap-2 items-center border rounded border-primary-element p-4">
            <section className="h-[40vh]">
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
