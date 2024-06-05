import React from "react";
import ServiceIcon from "../components/pages/home/service-icon";
import ReviewCard from "../components/pages/home/review-card";
import HorizontalScrollContainer from "../components/horizontal-scroll-container";
import * as reviews from "../data/reviews.json";
import { Link } from "react-router-dom";
import GarageMap from "../components/garage-map";
import { Tooltip } from "react-tooltip";

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

    if (windowWidth < 823) {
      return 1;
    }

    if (windowWidth < 1253) {
      return 2;
    }

    if (windowWidth < 1650) {
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
        <section className="w-full">
          <div className="w-full h-fit relative">
            <div className="p-6 md:p-0 h-full md:h-fit w-full md:w-fit z-10 absolute md:left-[5%] lg:left-[15%] top-[20%] flex flex-col md:gap-2 align-center">
              <h1 className="text-neutral-color-contrast text-3xl sm:text-4xl tracking-wide text-shadow-neutral-color-primary">
                Taller mecánico
              </h1>
              <h2 className="font-rubik-mono-one text-primary-element text-5xl sm:text-6xl lg:text-8xl tracking-wide text-shadow-neutral-color-primary-title">
                MOTEC
              </h2>
              <h3 className="text-neutral-color-contrast text-xl sm:text-3xl text-shadow-neutral-color-primary">
                Servicios de mantenimiento y reparación para tu vehículo
              </h3>
              <div className="h-1 w-full bg-[#f2f2f2] mt-2 mb-14 rounded"></div>
              <div className="text-center sm:text-left">
                <Link
                  className="text-neutral-color-contrast border-neutral-color-contrast hover:border-element-gained-focus hover:text-element-gained-focus hover:scale-95 hover:text-shadow-secondary-element transition-all duration-200 w-fit p-3 rounded font-bold tracking-wider"
                  to="/contacto"
                  data-tooltip-content="Abrir página de contacto"
                  data-tooltip-id="to-contact-link-tooltip"
                  data-tooltip-place="bottom"
                >
                  CONTACTANOS
                  <Tooltip id="to-contact-link-tooltip" />
                </Link>
              </div>
            </div>
            <img
              className="w-full min-h-[60vh] lg:min-h-fit grayscale opacity-90"
              src="/images/pages/home/home-header.jpg"
              alt="Instalaciones de talleres Motec"
            />
          </div>
        </section>
        <section className="pb-3 sm:pb-5 w-full">
          <div className="p-3 w-full px-[5%] lg:px-[15%] py-5 bg-[#e2e2e2a4] flex flex-col">
            <div className="w-full h-full flex flex-row flex-wrap justify-between">
              <ServiceIcon icon="car" iconText="Mecánica" />
              <ServiceIcon icon="oil-can" iconText="Aceite" />
              <ServiceIcon icon="circle-dot" iconText="Neumáticos" />
              <ServiceIcon icon="screwdriver-wrench" iconText="Mantenimiento" />
              <ServiceIcon icon="arrow-trend-up" iconText="Puesta a punto" />
              <ServiceIcon icon="plus" iconText="Y mas!" />
            </div>
          </div>
          <div className="p-3 w-full h-4 bg-gradient-to-b from-[#e2e2e2a4] to-[#fbf8f8]"></div>
        </section>
        <section className="pb-3 sm:pb-5 w-full">
          <div className="w-80% mx-[10%] flex flex-col gap-2">
            <h2 className="text-2xl font-semibold">Nuestros servicios</h2>
            <p>
              En nuestro taller ofrecemos una amplia gama de servicios, desde
              cambios de aceite y frenos hasta reparaciones de motor y
              transmisión, para asegurarnos de que tu vehículo funcione de
              manera segura y eficiente en todo momento.
              <br />
              <br />
              Utilizamos tecnología de vanguardia y piezas de alta calidad para
              garantizar resultados duraderos. Nuestros mecánicos se
              enorgullecen de mantener tus vehículos en óptimas condiciones y
              brindar soluciones confiables para todas tus necesidades.
            </p>
          </div>
        </section>
        <section className="pb-3 sm:pb-5 w-full">
          <div className="w-80% mx-[10%] flex flex-col gap-2">
            <h2 className="text-2xl font-semibold">
              Encuentranos en Astillero (Santander)
            </h2>
            <p>
              ¡Ven a cononcernos! Nos ubicamos en el parque empresarial de
              Morero, parcela 2-11 nave nº2, Guarnizo el Astillero:
            </p>
            <div className="w-full">
              <GarageMap
                mapClasses="w-full h-96 m-auto"
                zoom="13"
                showLink={true}
              />
            </div>
          </div>
        </section>
        <section className="pb-3 sm:pb-5 w-full">
          <div className="w-80% mx-[10%] flex flex-col gap-2">
            <h2 className="text-2xl font-semibold">
              La opinion de nuestros clientes
            </h2>
            <p>
              Tu satisfacción es nuestra prioridad. En talleres Motec nos
              enorgullecemos de ofrecer servicios de alta calidad a precios
              competitivos. Descubre por qué somos la elección preferida de
              nuestros clientes cuando se trata de cuidar sus vehículos:
            </p>
            <HorizontalScrollContainer
              key={this.state.itemsPerSlide}
              itemsPerSlide={this.state.itemsPerSlide}
              className="w-full py-5 my-5 horizontal-scroll-container"
              onSlideChange={() => this.updateReviewCardHeight(0)}
              tooltipMessage="Abrir review en Google"
              hidePagination={false}
              autoPlay={false}
              renderAsGrid={true}
            >
              {this.getReviewCards()}
            </HorizontalScrollContainer>
          </div>
        </section>
      </div>
    );
  }
}

export default Home;
