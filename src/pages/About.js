import React from "react";
import ValueCard from "../components/pages/about/value-card";
import HorizontalScrollContainer from "../components/horizontal-scroll-container";
import FaIcon from "../components/basic-elements/fa-icon";
import BasicModal from "../components/basic-elements/basic-modal";
import CompanyChrono from "../components/pages/about/company-chrono";
import Brands from "../components/pages/about/brands";

class About extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isPictureZoomed: false,
      zoomedPicture: "",
      autoplayCarrousel: true,
      navigationButtons: [],
      displayCarousel: true,
    };
  }

  getPicture = (picture) => {
    return (
      <div
        className="min-w-max h-[30vh] sm:h-[50vh] flex justify-center"
        key={`picture_${picture}`}
      >
        <div className="relative">
          <img
            src={`/images/pages/about/${picture}.png`}
            className="animate-on-scroll w-[50vw] h-full carousel-img picture-shadow"
            alt="Foto de las instalaciones de nuestro taller"
          />
          <button
            className="absolute bottom-2 right-2 hover:text-element-gained-focus"
            onClick={() => this.onZoomToggle(picture)}
          >
            <FaIcon icon="magnifying-glass-plus" />
          </button>
        </div>
      </div>
    );
  };

  onZoomToggle = (picture) => {
    this.setState({
      isPictureZoomed: !this.state.isPictureZoomed,
      zoomedPicture: !this.state.isPictureZoomed ? picture : "",
      autoplayCarrousel: this.state.isPictureZoomed, // Stop autoplay while user has the modal open
    });
  };

  closeModal = () => {
    this.setState({
      isPictureZoomed: false,
      zoomedPicture: "",
      autoplayCarrousel: true,
    });
  };

  // Due to some issue with the react-material-ui-carousel library, some extra nav buttons are being created after doing changes in the carousel element (ex.: zooming in a picture). Therefore, these elements are tracked and removed if required
  getCarrouselNavigationButtons = () => {
    // Get all elements with the attribute aria-label
    const elementsWithAriaLabel = document.querySelectorAll("[aria-label]");

    // Filter elements with aria-label containing the value "indicator" (these are the nav buttons of the carousel element)
    return Array.from(elementsWithAriaLabel).filter((element) => {
      const ariaLabelValue = element.getAttribute("aria-label");

      return ariaLabelValue.toLowerCase().includes("indicator");
    });
  };

  componentDidMount = () => {
    this.setState({
      navigationButtons: this.getCarrouselNavigationButtons(),
    });

    window.addEventListener("resize", this.resizeCarousel);
  };

  componentWillUnmount() {
    window.removeEventListener("resize", this.resizeCarousel);
  }

  resizeCarousel = () => {
    // On window resize, the carousel height is not updated correctly, see: https://github.com/Learus/react-material-ui-carousel/issues/189. Therefore, it has to be adapted manually.
    // Therefore, a work around is implemented in order to force the re-render of the component.

    this.setState({
      displayCarousel: false,
    });

    setTimeout(() => {
      this.setState({
        displayCarousel: true,
      });
    }, 500);
  };

  valueCardsInfo = [
    {
      title: "Calidad y excelencia",
      description:
        "Nos esforzamos por ofrecer servicios de reparación de la más alta calidad, utilizando tecnología avanzada y técnicas probadas.",
      icon: "ranking-star",
      id: "info_card_1",
    },
    {
      title: "Honestidad y transparencia",
      description:
        "Creemos en la honestidad en cada interacción. No hay sorpresas desagradables; solo transparencia y confianza",
      icon: "handshake",
      id: "info_card_2",
    },
    {
      title: "Trabajo en equipo",
      description:
        "Nuestro equipo está formado por profesionales apasionados que trabajan juntos para garantizar el mejor servicio posible.",
      icon: "people-group",
      id: "info_card_3",
    },
    {
      title: "Atención personalizada",
      description:
        "Valoramos a cada cliente y nos esforzamos por brindar una atención personalizada para satisfacer sus necesidades individuales.",
      icon: "id-badge",
      id: "info_card_4",
    },
  ];

  pictures = [
    this.getPicture("picture_1"),
    this.getPicture("picture_2"),
    this.getPicture("picture_3"),
    this.getPicture("picture_4"),
  ];

  render() {
    return (
      <div className="mt-[5vh]">
        <section className="py-3 sm:py-5 w-full">
          <h1 className="w-80% mx-[10%] font-bold text-3xl">Sobre nosotros</h1>
        </section>
        <section className="py-1 sm:py-3 w-full">
          <div className="w-80% mx-[10%] flex flex-col gap-2">
            <h2 className="text-2xl font-semibold">Historia</h2>
            <p>
              Desde nuestra fundación nuestro taller ha ofrecido soluciones
              confiables para las necesidades de nuestros clientes. A lo largo
              de los años, hemos construido una sólida reputación basada en la
              excelencia y el compromiso. Desde nuestros humildes comienzos
              hasta convertirnos en el referente local que somos hoy, cada año
              ha sido un capítulo en nuestra historia de crecimiento y
              dedicación.
            </p>
            <p>
              Nos enorgullece destacar que, desde el primer día, nuestra misión
              ha sido proporcionar servicios de calidad que superen las
              expectativas. Nuestros mecánicos, altamente capacitados y
              apasionados, comparten un compromiso constante con la maestría
              técnica y la atención al detalle. Esta dedicación nos ha permitido
              no solo sobrevivir, sino prosperar en un mundo automotriz en
              constante evolución.
            </p>
            <p>
              En cada vehículo que ingresa a nuestro taller, vemos una
              oportunidad para demostrar nuestra destreza y amor por la
              industria. Creemos en la transparencia y la honestidad,
              construyendo relaciones sólidas con nuestros clientes a lo largo
              de los años.
            </p>
            <div className="mt-8">
              <CompanyChrono />
            </div>
          </div>
        </section>
        <section className="py-1 sm:py-3 w-full">
          <div className="w-80% mx-[10%] flex flex-col gap-2">
            <h2 className="text-2xl font-semibold">Instalaciones</h2>
            <p>
              Contamos con instalaciones modernas y totalmente equipadas para
              realizar una amplia variedad de servicios de reparación y
              mantenimiento. Nuestro taller está diseñado para brindar
              eficiencia y comodidad a nuestros clientes.
            </p>
            <div className="w-full h-fit flex justify-center">
              {this.state.displayCarousel && (
                <HorizontalScrollContainer
                  navButtonsAlwaysVisible={true}
                  autoPlay={this.state.autoplayCarrousel}
                  interval="3000"
                  className="w-full h-[35vh] sm:h-[55vh] "
                >
                  {this.pictures}
                </HorizontalScrollContainer>
              )}
            </div>
          </div>
          <BasicModal
            isOpen={this.state.isPictureZoomed}
            showCloseButton={true}
            onClose={this.closeModal}
          >
            <div className="w-full flex justify-center">
              <img
                src={`/images/pages/about/${this.state.zoomedPicture}.png`}
                className="h-[80vh]"
                alt="Foto de las instalaciones de nuestro taller"
              />
            </div>
          </BasicModal>
        </section>
        <section className="py-1 sm:py-3 w-full">
          <div className="w-80% mx-[10%] flex flex-col gap-2">
            <h2 className="text-2xl font-semibold">Nuestras marcas</h2>
            <p>
              En Talleres Motec trabajamos con una amplia gama de marcas
              reconocidas y colaboramos con fabricantes líderes en la industria.
              Explore aquí las principales marcas con las que trabajamos:
            </p>
            <Brands />
          </div>
        </section>
        <section className="py-1 sm:py-3 w-full mb-12">
          <div className="w-80% mx-[10%] flex flex-col gap-2">
            <h2 className="text-2xl font-semibold">Nuestros Valores</h2>
            <div className="mt-2 w-full flex flex-row flex-wrap justify-evenly gap-10">
              {this.valueCardsInfo.map(({ title, description, icon, id }) => (
                <ValueCard
                  title={title}
                  description={description}
                  icon={icon}
                  key={id}
                />
              ))}
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default About;
