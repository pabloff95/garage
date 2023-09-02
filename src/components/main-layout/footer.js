import React from "react";
import FooterHeader from "./footer-header";
import FaIcon from "../basic-elements/fa-icon";

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
          <p>
            Parque empresarial de Morero P.2-11, Nave 2
            <a
              className="ml-2"
              target="_blank"
              href="https://www.google.com/maps/place/Castrol+Service+motec+s.l.+Motor+y+Tecnologia+del+Automovil/@43.396785,-3.8393119,17z/data=!3m1!4b1!4m6!3m5!1s0xd4936420c1708fb:0xbc37d36d1444f5f6!8m2!3d43.396785!4d-3.836737!16s%2Fg%2F11btm3j378?entry=ttu"
            >
              <FaIcon icon="up-right-from-square"></FaIcon>
            </a>
          </p>
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
