import React from "react";
import OfferCard from "../components/pages/sales/offer-card";
import * as offers from "../data/offers.json";

class Sales extends React.Component {
  render() {
    return (
      <div className="mt-[5vh]">
        <section className="my-5 py-3 w-full">
          <h1 className="w-80% mx-[10%] font-bold text-3xl my-3">Ofertas</h1>
        </section>
        <section className="my-5 w-full py-3">
          <div className="w-80% mx-[10%] flex flex-row justify-center gap-6 items-center">
            {offers.default.map((offer, index) => {
              const {
                title,
                description,
                originalPrice,
                currentPrice,
                imgPath,
              } = offer;

              return (
                <OfferCard
                  title={title}
                  description={description}
                  originalPrice={originalPrice}
                  currentPrice={currentPrice}
                  imgPath={imgPath}
                  key={`offer-card-${index}`}
                />
              );
            })}
          </div>
        </section>
      </div>
    );
  }
}

export default Sales;
