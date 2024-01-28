import * as offers from "../data/offers.json";
import moment from "moment";

export default function displaySalesSection() {
  const currentDate = moment();

  const offersInValidDate = offers.default.filter((offer) => {
    const offerEndDate = moment(
      `${offer.endDate}/${moment().year()}`,
      "DD/MM/YYYY"
    );

    return offerEndDate.diff(currentDate, "days") > 0;
  });

  return offersInValidDate.length > 0;
}
