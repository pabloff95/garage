import React from "react";

class Footer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <footer className="layout-footer">
        <section>
          <p className="footer-title">Horario</p>
          <p>Mañanas (Lunes - Jueves): 8:00 - 13:00</p>
          <p>Tarder (Lunes - Jueves): 15:00 - 18:00</p>
          <p>Viernes: 8:00 - 14:00</p>
        </section>
        <section>
          <p className="footer-title">Ubicación</p>
          <p>Parque empresarial de Morero P.2-11, Nave 2</p>
          <p>39611 Guarnizo</p>
          <p>Cantrabria</p>
        </section>
        <section>
          <p className="footer-title">Contacto</p>
          <p>942566299</p>
          <p>info@motec.es</p>
        </section>
      </footer>
    );
  }
}

export default Footer;
