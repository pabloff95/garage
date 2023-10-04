import React from "react";
import PageTitle from "../components/page-title";

class About extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <section>
          <PageTitle text="Sobre nosotros"></PageTitle>
        </section>
      </div>
    );
  }
}

export default About;
