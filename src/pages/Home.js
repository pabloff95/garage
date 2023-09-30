import React from "react";
import PageSubitle from "../components/page-subtitle";
import ServiceIcon from "../components/pages/home/service-icon";
import ReviewCard from "../components/pages/home/review-card";
import HorizontalScrollContainer from "../components/horizontal-scroll-container";
import * as reviews from "../data/reviews.json";
import { Link } from "react-router-dom";

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
        <section className="relative w-full">
          <div className="h-full w-fit z-10 absolute left-[15%] top-[25%] flex flex-col gap-2">
            <h1 className="text-neutral-color-contrast text-4xl tracking-wide text-shadow-neutral-color-primary">
              Taller mecánico
            </h1>
            <h2 className="text-primary-element text-8xl font-bold tracking-wide text-shadow-neutral-color-primary-title">
              MOTEC
            </h2>
            <h3 className="text-neutral-color-contrast text-3xl text-shadow-neutral-color-primary">
              Servicios de mantenimiento y reparación para tu vehículo
            </h3>
            <div className="h-1 w-full bg-[#f2f2f2] mt-2 mb-14 rounded"></div>
            <Link
              className="text-neutral-color-contrast border-neutral-color-contrast hover:border-primary-element hover:text-primary-element transition-all duration-200 w-fit p-3 rounded font-bold tracking-wider"
              to="contact"
            >
              CONTACTANOS
            </Link>
          </div>
          <img
            className="w-full grayscale opacity-90"
            src="/images/pages/home/home-header.jpg"
            alt="Instalaciones de talleres Motec"
          />
          <div className="w-full px-[15%] py-5 bg-[#e2e2e2a4] flex flex-col gap-10">
            <h4 className="w-full font-bold text-3xl text-center">
              Nuestros servicios
            </h4>
            <div className="w-full h-full flex flex-row justify-between">
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
          <div className="w-full h-16 bg-gradient-to-b from-[#e2e2e2a4] to-[#fbf8f8]"></div>
        </section>
        <section className="p-3">
          <PageSubitle text="Taller de reparación de automóviles en Astillero (Santander)" />
          <p>
            En nuestro taller de coches, ofrecemos servicios de mantenimiento y
            reparación de alta calidad. Nuestro equipo de mecánicos se
            enorgullece de mantener tus vehículos en óptimas condiciones y
            brindar soluciones confiables para tus necesidades automotrices.
          </p>
          <br />
          <p>
            ¡Ven a cononcernos! Nos ubicamos en el parque empresarial de Morero,
            parcela 2-11 nave nº2, Guarnizo el Astillero:
          </p>
        </section>
        <section className="flex flex-col p-3 justify-center">
          <PageSubitle text="La opinion de nuestros clientes" />
          <p>
            Tu satisfacción es nuestra prioridad, y nos enorgullecemos de
            ofrecer servicios de alta calidad a precios competitivos. Descubre
            por qué somos la elección preferida de nuestros clientes cuando se
            trata de cuidar sus vehículos:
          </p>
          <HorizontalScrollContainer
            key={this.state.itemsPerSlide}
            itemsPerSlide={this.state.itemsPerSlide}
            className="w-full py-5 my-5 horizontal-scroll-container"
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
