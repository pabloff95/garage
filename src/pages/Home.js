import React from "react";
import PageTitle from "../components/page-title";
import ServiceIcon from "../components/pages/home/service-icon";
import ReviewCard from "../components/pages/home/review-card";
import HorizontalScrollContainer from "../components/horizontal-scroll-container";
import * as reviews from "../data/reviews.json";

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      reviewCardHeigth: 0,
    };
  }

  // Update heigth state when the "read more" option is clicked on the reivew card components
  updateReviewCardHeight = (height) => {
    this.setState({ reviewCardHeigth: height });
  };

  componentDidUpdate = (prevProps, prevState) => {
    if (prevState.reviewCardHeigth === this.state.reviewCardHeigth) {
      return;
    }

    // Update heigth with the new card heigth because the Carousel will not update the height with dynamically
    const container = document.querySelector(".horizontal-scroll-container");
    if (!container) {
      return;
    }

    const currentHeight = Number.isNaN(parseInt(container.style.height))
      ? 0
      : parseInt(container.style.height);

    let carouselHeigth = "auto";

    if (
      this.state.reviewCardHeigth !== 0 &&
      currentHeight < this.state.reviewCardHeigth && // If multiple cards are open, keep heigth of the largest
      this.state.reviewCardHeigth > container.getBoundingClientRect().height // If default heigth is bigger than the expanded card, keep default (when "read more..." is used a small card)
    ) {
      carouselHeigth = `${this.state.reviewCardHeigth + 25}px`; // 25px of extra space
    }

    container.style.height = carouselHeigth;
    return;
  };

  getReviewCards = () => {
    return reviews.default.map((review, index) => {
      return (
        <ReviewCard
          rate={review.rate}
          message={review.message}
          url={review.url}
          author={review.author}
          date={review.date}
          onToggle={this.updateReviewCardHeight}
          key={`review-card-${index}`}
        />
      );
    });
  };

  render() {
    return (
      <div>
        <section>
          <PageTitle text="Motec SL: motor y tecnología"></PageTitle>
          <div className="w-full p-3">
            <img
              className="w-4/6 ml-5"
              src="/images/pages/home/title-picture.png"
              alt="Instalaciones de talleres Motec"
            />
          </div>
        </section>
        <section className="my-5">
          <div className="flex flex-row justify-center gap-10">
            <ServiceIcon icon="car" iconText="Mecánica" />
            <ServiceIcon icon="screwdriver-wrench" iconText="Mantenimiento" />
            <ServiceIcon icon="arrow-trend-up" iconText="Puesta a punto" />
            <ServiceIcon icon="plus" iconText="Y mas!" />
          </div>
        </section>
        <section className="my-5 flex justify-center">
          <HorizontalScrollContainer
            itemsPerSlide="3"
            className={`w-full py-5 my-3 horizontal-scroll-container`}
          >
            {this.getReviewCards()}
          </HorizontalScrollContainer>
        </section>
      </div>
    );
  }
}

export default Home;
