import React from "react";
import PageTitle from "../components/page-title";
import ServiceCard from "../components/service-card";

class Services extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <section>
          <PageTitle text="Servicios"></PageTitle>
        </section>
        <section className="my-4 w-full">
          <div className="w-80% mx-[10%] flex flex-col gap-6">
            <ServiceCard
              title="Mecánica"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
              isEven={false}
            />
            <ServiceCard
              title="Cambio de aceite"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
              isEven={true}
            />
            <ServiceCard
              title="Servicio de neumáticos"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
              isEven={false}
            />
            <ServiceCard
              title="Mantenimiento"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
              isEven={true}
            />
          </div>
        </section>
      </div>
    );
  }
}

export default Services;
