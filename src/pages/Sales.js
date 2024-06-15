import React from "react";
import OfferCard from "../components/pages/sales/offer-card";
import * as offers from "../data/offers.json";
import moment from "moment";
import Title from "../components/basic-elements/title";

class Sales extends React.Component {
  getDaysLeft = (endDate) => {
    const endDateMoment = moment(`${endDate}/${moment().year()}`, "DD/MM/YYYY");

    const currentDateMoment = moment();

    const daysLeft = endDateMoment.diff(currentDateMoment, "days");

    return daysLeft;
  };

  isOfferInValidDateRange = (offer) => {
    const { startDate, endDate } = offer;

    const daysLeft = this.getDaysLeft(endDate);

    if (daysLeft < 0) {
      // Offer already expired
      return false;
    }

    const startDateMoment = moment(
      `${startDate}/${moment().year()}`,
      "DD/MM/YYYY"
    );
    const currentDateMoment = moment();

    const differenceToStart = startDateMoment.diff(
      currentDateMoment,
      "minutes"
    );

    if (differenceToStart > 0) {
      // Offer has not yet started
      return false;
    }

    return true;
  };

  getValidOffers = () => {
    // Get valid offers (date is in the valid range when compared to the current date)
    const validOffers = offers.default.filter((offer) =>
      this.isOfferInValidDateRange(offer)
    );

    const validOffersData = validOffers.map((offer) => ({
      ...offer,
      daysLeft: this.getDaysLeft(offer.endDate),
    }));

    validOffersData.sort((a, b) => a.daysLeft - b.daysLeft); // Display offers from less days to more days

    return validOffersData;
  };

  render() {
    return (
      <div className="mt-[5vh]">
        <section className="py-3 sm:py-5 w-full">
          <Title text="Ofertas"></Title>
        </section>
        <section className="py-1 sm:py-3 w-full">
          <div className="w-80% mx-[10%] flex flex-col gap-2">
            <p>Disfruta de nuestras mejores ofertas por tiempo limitado:</p>
          </div>
        </section>
        <section className="py-1 sm:py-3 w-full">
          <div className="w-80% mx-[10%] flex flex-row flex-wrap justify-center gap-6 items-center mt-2 mb-8">
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
