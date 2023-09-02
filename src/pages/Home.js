import React from "react";
import PageTitle from "../components/page-title";
import ServiceIcon from "../components/pages/home/service-icon";
import ReviewCard from "../components/pages/home/review-card";

class Home extends React.Component {
  constructor(props) {
    super(props);
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
        <section className="my-5">
          <div className="w-full flex flex-row gap-4 justify-center my-3">
            <ReviewCard
              rate="5"
              message="Muy buenos profesionales, especialmente en opel (marca de mi coche). Muy buen servicio y buenos precios. Es mi taller de confianza"
              url="https://goo.gl/maps/EKMcSFQwzThHKwmm9"
            />
            <ReviewCard
              rate="5"
              message="Servicio excelente, trabajadores excepcionales y muy buen trato y servicio. Volveré sin duda."
              url="https://goo.gl/maps/NJ9MBxBrmBYPU6kd7"
            />
            <ReviewCard
              rate="5"
              message="Son súper atentos puntuales y todo lo que hacen lo hacen de 10 👌 muy recomendable! Yo llevo dos años llevando el coche y no he estado nunca tan contento en ningún taller, todo perfecto 👌…"
              url="https://goo.gl/maps/o7Nk2Jbx7n2TaL9bA"
            />
          </div>
        </section>
      </div>
    );
  }
}

export default Home;
