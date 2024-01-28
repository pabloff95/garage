import * as offers from "../data/offers.json";
import moment from "moment";

export default function displaySalesSection() {
  const currentDate = moment();

  const offersInValidDate = offers.default.filter((offer) => {
    // use minutes instead of days to calculate differences, since moment.js would return 0 if just some hours of difference are left
    const { startDate, endDate } = offer;

    const offerEndDate = moment(`${endDate}/${moment().year()}`, "DD/MM/YYYY");

    const minutesLeft = offerEndDate.diff(currentDate, "minutes");

    if (minutesLeft < 0) {
      // Offer already expired
      return false;
    }

    const offerStartDate = moment(
      `${startDate}/${moment().year()}`,
      "DD/MM/YYYY"
    );

    const differenceToStart = offerStartDate.diff(currentDate, "minutes");

    if (differenceToStart > 0) {
      // Offer has not yet started
      return false;
    }

    return true;
  });

  return offersInValidDate.length > 0;
}
