import React from "react";
import PageTitle from "../components/page-title";
import ServiceIcon from "../components/pages/home/service-icon";

class Home extends React.Component {
  render() {
    return (
      <div>
        <section>
          <PageTitle text="Motec SL: motor y tecnología"></PageTitle>
        </section>
        <section>
          <div className="flex flex-row justify-center gap-10">
            <ServiceIcon icon="car" iconText="Mecánica" />
            <ServiceIcon icon="screwdriver-wrench" iconText="Mantenimiento" />
            <ServiceIcon icon="arrow-trend-up" iconText="Puesta a punto" />
            <ServiceIcon icon="plus" iconText="Y mas!" />
          </div>
        </section>
      </div>
    );
  }
}

export default Home;
