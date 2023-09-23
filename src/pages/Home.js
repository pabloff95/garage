import React from "react";
import PageTitle from "../components/page-title";
import ServiceIcon from "../components/pages/home/service-icon";
import ReviewCard from "../components/pages/home/review-card";
import HorizontalScrollContainer from "../components/horizontal-scroll-container";

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

  componentDidUpdate(prevProps, prevState) {
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
      currentHeight < this.state.reviewCardHeigth // If multiple cards are open, keep heigth of the largest
    ) {
      carouselHeigth = `${this.state.reviewCardHeigth}px`;
    }

    container.style.height = carouselHeigth;
    return;
  }

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
            className={`w-10/12 my-3 horizontal-scroll-container`}
          >
            <ReviewCard
              rate="5"
              message="Servicio excelente. Tuve un pinchazo mientras estuve de visita en cabarceno. Les llame y como no tenían mi neumático me ayudaron a buscar un taller que las tuviera. Como no había stock en ninguno de la zona me recomendó uno cerca de la zona  por donde me hospedaba (LLanes). Se involucró mucho y fue una gran ayuda aunque no fuese a cambiar las ruedas en su taller"
              url="https://goo.gl/maps/ijdfjFbM1YhkKnkp8"
              author="J. Rosendo"
              date="2018"
              onToggle={this.updateReviewCardHeight}
            />
            <ReviewCard
              rate="5"
              message="Muy buenos profesionales, especialmente en opel (marca de mi coche). Muy buen servicio y buenos precios. Es mi taller de confianza"
              url="https://goo.gl/maps/EKMcSFQwzThHKwmm9"
              author="D. Correcaminos"
              date="2022"
              onToggle={this.updateReviewCardHeight}
            />
            <ReviewCard
              rate="5"
              message="Servicio excelente, trabajadores excepcionales y muy buen trato y servicio. Volveré sin duda."
              url="https://goo.gl/maps/NJ9MBxBrmBYPU6kd7"
              author="E. Suarez"
              date="2022"
              onToggle={this.updateReviewCardHeight}
            />
            <ReviewCard
              rate="5"
              message="Son súper atentos puntuales y todo lo que hacen lo hacen de 10 👌 muy recomendable! Yo llevo dos años llevando el coche y no he estado nunca tan contento en ningún taller, todo perfecto 👌"
              url="https://goo.gl/maps/o7Nk2Jbx7n2TaL9bA"
              author="A. Hierro"
              date="2021"
              onToggle={this.updateReviewCardHeight}
            />
            <ReviewCard
              rate="5"
              message="Taller serio, profesional y con buenos precios, un problema en el Jeep en el abs, acertó con el diagnóstico a la primera, acordamos un día y una hora y para poder cuadrarlo con el trabajo y problema resuelto"
              url="https://goo.gl/maps/T5ySZaR51v1Qen1X9"
              author="D. Correcaminos"
              date="2022"
              onToggle={this.updateReviewCardHeight}
            />
            <ReviewCard
              rate="5"
              message="Siempre tienen el mejor interés de sus clientes en mente. Su enfoque está en la mejor relación precio-calidad. El trato es excelente y se preocupan por encajar en la agenda más ocupada. Personalmente, me han ahorrado mucho dinero y preocupaciones"
              url="https://goo.gl/maps/MUDVrZ1XqgJGENi87"
              author="J. Zeilfelder"
              date="2022"
              onToggle={this.updateReviewCardHeight}
            />
          </HorizontalScrollContainer>
        </section>
      </div>
    );
  }
}

export default Home;
