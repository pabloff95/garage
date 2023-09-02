import React from "react";
import FooterHeader from "./footer-header";

class Footer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <footer className="layout-footer">
        <section>
          <FooterHeader text="Horario" icon="clock" />
          <p>Mañanas (Lunes - Jueves): 8:00 - 13:00</p>
          <p>Tarder (Lunes - Jueves): 15:00 - 18:00</p>
          <p>Viernes: 8:00 - 14:00</p>
        </section>
        <section>
          <FooterHeader text="Ubicación" icon="location-dot" />
          <p>Parque empresarial de Morero P.2-11, Nave 2</p>
          <p>39611 Guarnizo</p>
          <p>Cantrabria</p>
        </section>
        <section>
          <FooterHeader text="Contacto" icon="phone" />
          <p>942566299</p>
          <p>info@motec.es</p>
        </section>
      </footer>
    );
  }
}

export default Footer;
