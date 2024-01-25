import React from "react";
import OfferCard from "../components/pages/sales/offer-card";
import * as offers from "../data/offers.json";
import moment from "moment";
import { Link } from "react-router-dom";
import { Tooltip } from "react-tooltip";

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
          <h1 className="w-80% mx-[10%] font-bold text-3xl mt-3">Ofertas</h1>
        </section>
        <section className="mb-5 py-3 w-full">
          <p className="w-80% mx-[10%] text-lg">
            Disfruta de nuestras mejores ofertas por tiempo limitado:
          </p>
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
        <section className="mb-5 py-3 w-full">
          <div className="w-80% mx-[10%] ">
            <p className="text-lg">
              No dudes en ponerte en contácto con nosotros:
            </p>
            <div className="w-full flex justify-center">
              <Link
                className="text-neutral-color border-neutral-color hover:border-primary-element hover:text-primary-element hover:scale-95 hover:text-shadow-tertiary-element transition-all duration-200 w-fit py-3 px-16 rounded font-bold tracking-wider"
                to="/contact"
                data-tooltip-content="Abrir página de contacto"
                data-tooltip-id="to-contact-link-tooltip"
                data-tooltip-place="bottom"
              >
                CONTACTANOS
                <Tooltip id="to-contact-link-tooltip" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Sales;
