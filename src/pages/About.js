import React from "react";
import ValueCard from "../components/pages/about/value-card";
import HorizontalScrollContainer from "../components/horizontal-scroll-container";
import FaIcon from "../components/basic-elements/fa-icon";
import BasicModal from "../components/basic-elements/basic-modal";

class About extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isPictureZoomed: false,
      zoomedPicture: "",
      autoplayCarrousel: true,
    };
  }

  getPicture = (picture) => {
    return (
      <div className="relative" key={`picture_${picture}`}>
        <img src={`/images/pages/about/${picture}.png`} className="h-[45vh]" />
        <button
          className="absolute bottom-2 right-2 hover:text-primary-element"
          onClick={() => this.onZoomToggle(picture)}
        >
          <FaIcon icon="magnifying-glass-plus" />
        </button>
      </div>
    );
  };

  onZoomToggle = (picture) => {
    this.setState({
      isPictureZoomed: !this.state.isPictureZoomed,
      zoomedPicture: !this.state.isPictureZoomed ? picture : "",
      autoplayCarrousel: this.state.isPictureZoomed, // Stop autoplay while user has the odal opened
    });
  };

  closeModal = () => {
    this.setState({
      isPictureZoomed: false,
      zoomedPicture: "",
      autoplayCarrousel: true,
    });
  };

  render() {
    return (
      <div>
        <section className="my-5 py-3 w-full">
          <h1 className="w-80% mx-[10%] font-bold text-3xl my-3">
            Sobre nosotros
          </h1>
        </section>
        <section className="my-5 w-full py-3">
          <div className="w-80% mx-[10%] flex flex-col gap-2">
            <h2 className="text-2xl font-semibold">Nuestra Historia</h2>
            <p>
              Desde nuestra fundación en el año 2000, nuestro taller de
              reparación de automóviles ha ofrecido soluciones confiables para
              las necesidades de nuestros clientes. A lo largo de los años,
              hemos construido una sólida reputación basada en la excelencia y
              el compromiso. Desde nuestros humildes comienzos hasta
              convertirnos en el referente local que somos hoy, cada año ha sido
              un capítulo en nuestra historia de crecimiento y dedicación.
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
          </div>
        </section>
        <section className="my-5 w-full py-3">
          <div className="w-80% mx-[10%] flex flex-col gap-2">
            <h2 className="text-2xl font-semibold">Nuestras Instalaciones</h2>
            <p>
              Contamos con instalaciones modernas y totalmente equipadas para
              realizar una amplia variedad de servicios de reparación y
              mantenimiento. Nuestro taller está diseñado para brindar
              eficiencia y comodidad a nuestros clientes.
            </p>
            <div className="w-full h-[45vh]">
              <HorizontalScrollContainer
                itemsPerSlide={1}
                navButtonsAlwaysVisible={true}
                autoPlay={this.state.autoplayCarrousel}
                interval="3000"
              >
                {[
                  this.getPicture("picture_1"),
                  this.getPicture("picture_2"),
                  this.getPicture("picture_3"),
                  this.getPicture("picture_4"),
                ]}
              </HorizontalScrollContainer>
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
              />
            </div>
          </BasicModal>
        </section>
        <section className="my-5 w-full py-3">
          <div className="w-80% mx-[10%] flex flex-col gap-2">
            <h2 className="text-2xl font-semibold">Nuestros Valores</h2>
            <div className="mt-2 w-full flex flex-row justify-between">
              <ValueCard
                styles="w-[22%] h-[35vh]"
                title="Calidad y excelencia"
                description="Nos esforzamos por ofrecer servicios de reparación de la más alta calidad, utilizando tecnología avanzada y técnicas probadas."
                icon="ranking-star"
              />
              <ValueCard
                styles="w-[22%] h-[35vh]"
                title="Honestidad y transparencia"
                description="Creemos en la honestidad en cada interacción. No hay sorpresas desagradables; solo transparencia y confianza"
                icon="handshake"
              />
              <ValueCard
                styles="w-[22%] h-[35vh]"
                title="Trabajo en equipo"
                description="Nuestro equipo está formado por profesionales apasionados que trabajan juntos para garantizar el mejor servicio posible."
                icon="people-group"
              />
              <ValueCard
                styles="w-[22%] h-[35vh]"
                title="Atención personalizada"
                description="Valoramos a cada cliente y nos esforzamos por brindar una atención personalizada para satisfacer sus necesidades individuales."
                icon="id-badge"
              />
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default About;
