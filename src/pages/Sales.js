import React from "react";
import OfferCard from "../components/pages/sales/offer-card";
import * as offers from "../data/offers.json";
import moment from "moment";

class Sales extends React.Component {
  getDaysLeft = (endDate) => {
    const endDateMoment = moment(`${endDate}/${moment().year()}`, "DD/MM/YYYY");

    const currentDateMoment = moment();

    const daysLeft = endDateMoment.diff(currentDateMoment, "days");

    return daysLeft;
  };

  getValidOffers = () => {
    // Get valid offers (date is in the valid range when compared to the current date)
    const validOffers = offers.default.filter((offer) => {
      const daysLeft = this.getDaysLeft(offer.endDate);

      return daysLeft > 0;
    });

    return validOffers.map((offer) => ({
      ...offer,
      daysLeft: this.getDaysLeft(offer.endDate),
    }));
  };

  render() {
    return (
      <div className="mt-[5vh]">
        <section className="my-5 py-3 w-full">
          <h1 className="w-80% mx-[10%] font-bold text-3xl my-3">Ofertas</h1>
        </section>
        <section className="my-5 w-full py-3">
          <div className="w-80% mx-[10%] flex flex-row flex-wrap justify-center gap-6 items-center">
            {this.getValidOffers().map((offer, index) => {
              const {
                title,
                description,
                originalPrice,
                currentPrice,
                imgPath,
                daysLeft,
              } = offer;

              return (
                <OfferCard
                  title={title}
                  description={description}
                  originalPrice={originalPrice}
                  currentPrice={currentPrice}
                  imgPath={imgPath}
                  daysLeft={daysLeft}
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
