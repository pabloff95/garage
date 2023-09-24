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
      itemsPerSlide: this.getItemsPerSlide(),
    };
  }

  // --- Update heigth state when the "read more" option is clicked on the reivew card components
  updateReviewCardHeight = (height) => {
    this.setState({ reviewCardHeigth: height });
  };

  updateCarouselContainerHeigth = () => {
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

  // --- Update number of items per slide according to the window width
  updateItemsPerSlide = () => {
    this.setState({ itemsPerSlide: this.getItemsPerSlide() });
  };

  getItemsPerSlide = () => {
    const windowWidth = parseInt(window.innerWidth);

    if (windowWidth < 500) {
      return 1;
    }

    if (windowWidth < 850) {
      return 2;
    }

    if (windowWidth < 1600) {
      return 3;
    }

    return 4;
  };

  // --- Get DOM elements
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

  // --- Component life cycle
  componentDidMount = () => {
    window.addEventListener("resize", this.updateItemsPerSlide);
  };

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateItemsPerSlide);
  }

  componentDidUpdate = (prevProps, prevState) => {
    // Evaluate items per slide according to window width
    if (prevState.itemsPerSlide !== this.state.itemsPerSlide) {
      this.forceUpdate(); // Force rerender component to set changes
    }

    // Evaluate reviewCards heigth
    if (prevState.reviewCardHeigth !== this.state.reviewCardHeigth) {
      this.updateCarouselContainerHeigth();
    }
  };

  render() {
    return (
      <div>
        <section>
          <PageTitle text="Motec SL: motor y tecnología"></PageTitle>
          <div className="flex flex-row gap-3 grow  ml-5 px-3">
            <div>
              <img
                className="w-[95%]"
                src="/images/pages/home/title-picture.png"
                alt="Instalaciones de talleres Motec"
              />
            </div>
            <div className="flex flex-col justify-center gap-2 w-1/4">
              <ServiceIcon icon="car" iconText="Mecánica" />
              <ServiceIcon icon="oil-can" iconText="Cambio de aceite" />
              <ServiceIcon
                icon="circle-dot"
                iconText="Servicio de neumáticos"
              />
              <ServiceIcon icon="screwdriver-wrench" iconText="Mantenimiento" />
              <ServiceIcon icon="arrow-trend-up" iconText="Puesta a punto" />
              <ServiceIcon icon="plus" iconText="Y mas!" />
            </div>
          </div>
        </section>
        <section className="my-5 flex justify-center">
          <HorizontalScrollContainer
            key={this.state.itemsPerSlide}
            itemsPerSlide={this.state.itemsPerSlide}
            className="w-full py-5 my-3 horizontal-scroll-container"
            onSlideChange={() => this.updateReviewCardHeight(0)}
          >
            {this.getReviewCards()}
          </HorizontalScrollContainer>
        </section>
      </div>
    );
  }
}

export default Home;
