import React from "react";
import ReviewCard from "../components/pages/home/review-card";
import HorizontalScrollContainer from "../components/horizontal-scroll-container";
import * as reviews from "../data/reviews.json";
import { Link } from "react-router-dom";
import GarageMap from "../components/garage-map";
import Title from "../components/basic-elements/title";
import Card from "../components/pages/about/card";
import StepCard from "../components/pages/home/step-card";

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

  garageWork = [
    {
      title: "Servicio personalizado",
      description:
        "Ofrecemos un trato individualizado para cada cliente. Nuestro equipo se dedica a brindar una atención cálida y profesional en cada visita",
      icon: "street-view",
      id: "garage_card_1",
    },
    {
      title: "Diagnóstico preciso",
      description:
        "Utilizamos tecnología de punta para realizar diagnósticos precisos de tu vehículo, identificando cualquier problema con rapidez y exactitud",
      icon: "magnifying-glass",
      id: "garage_card_2",
    },
    {
      title: "Reparaciones de calidad",
      description:
        "Nuestros mecánicos se esfuerzan en garantizar la durabilidad y el rendimiento óptimo de cada reparación realizada en nuestro taller",
      icon: "wrench",
      id: "garage_card_3",
    },
  ];

  getStepsFlexBox() {
    const parentContainerWidth = Math.ceil(window.innerWidth * 0.8); // 80% because the parent container uses w-[80%]

    return Math.ceil(parentContainerWidth / 3 > 250) // 250 because that's the step-carf min-width
      ? "flex-row justify-between"
      : "flex-col items-center";
  }

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
                  className="text-neutral-color-contrast border-neutral-color-contrast hover:border-element-gained-focus hover:text-element-gained-focus w-fit p-3 rounded font-bold tracking-wider main-button hover:main-button"
                  to="/contacto"
                >
                  CONTACTANOS
                </Link>
              </div>
            </div>
            <img
              className="w-full min-h-[60vh] lg:min-h-fit grayscale opacity-90"
              src="garage/images/pages/home/home-header.jpg"
              alt="Instalaciones de talleres Motec"
            />
          </div>
        </section>
        <section className="py-10 w-full flex items-center min-h-[80vh] justify-center bg-alternate">
          <div className="w-80% mx-[10%] h-full flex flex-col gap-12 justify-center">
            <Title text="¿Necesitas ayuda con tu vehículo?"></Title>
            <div className={`w-full flex ${this.getStepsFlexBox()}`}>
              <StepCard title="Contáctanos" step="1">
                <p>
                  Ponte en contacto con nostros por teléfono, correo electrónico
                  o a través de nuestro formulario de contacto.
                </p>
              </StepCard>
              <StepCard title="Acuerda una cita" step="2">
                <p>
                  Nuestro equipo evaluará tu situación y te ofrecerá una cita lo
                  antes posible.
                </p>
              </StepCard>
              <StepCard title="Ven al taller" step="3">
                <p>
                  Ven a nuestro taller en Guarnizo, abierto de 8:00 a 13:00 y
                  15:00 a 18:00 de lunes a jueves y de 8:00 a 14:00 los viernes.
                </p>
              </StepCard>
            </div>
            <a
              href="contacto"
              className="button w-fit mx-auto py-2 px-4 text-xl"
            >
              Ponerme en contacto
            </a>
          </div>
        </section>
        <section className="py-10 w-full flex items-center min-h-[90vh]">
          <div className="w-80% mx-[10%] flex flex-col gap-2 justify-center">
            <Title text="La opinion de nuestros clientes"></Title>
            <p className="paragraph text-center">
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
        <section className="py-10 w-full flex items-center min-h-[90vh] bg-alternate">
          <div className="w-80% mx-[10%] h-full flex flex-col gap-12 justify-center">
            <Title text="Cuidamos de tu vehículo"></Title>
            <p className="paragraph text-center">
              En Talleres Motec utilizamos tecnología de vanguardia y piezas de
              alta calidad para garantizar resultados duraderos.
              <br /> Ven a nuestro taller y explora nuestra amplia gama de
              servicios.
            </p>
            <div className="mt-2 w-full flex flex-row flex-wrap justify-center gap-6 sm:gap-24">
              {this.garageWork.map(({ title, description, icon, id }) => (
                <Card
                  title={title}
                  description={description}
                  icon={icon}
                  key={id}
                  iconClasses="h-2/3"
                />
              ))}
            </div>
            <div className="w-full flex justify-center my-8">
              <a href="sobre-nosotros" className="button py-2 px-4 text-xl">
                Descrubrir más
              </a>
            </div>
          </div>
        </section>
        <section className="py-10 w-full min-h-[90vh] flex align-center justify-center">
          <div className="w-full mx-[10%] flex flex-col gap-2 justify-center">
            <Title text="Encuentranos en Astillero (Santander)"></Title>
            <p className="paragraph text-center">
              ¡Ven a cononcernos! Nos ubicamos en el parque empresarial de
              Morero, parcela 2-11 nave nº2, Guarnizo el Astillero:
            </p>
            <div className="w-full pb-12">
              <GarageMap mapClasses="h-[60vh]" zoom="13" showLink={true} />
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Home;
