import React from "react";
import FooterHeader from "./footer-header";
import FaIcon from "../basic-elements/fa-icon";
import CopyButton from "../copy-button";

class Footer extends React.Component {
  constructor(props) {
    super(props);

    this.email = process.env.REACT_APP_COMPANY_EMAIL;
    this.telephone = process.env.REACT_APP_COMPANY_TELEPHONE;
  }

  render() {
    return (
      <footer className="layout-footer">
        <section className="flex flex-col gap-1">
          <FooterHeader text="Horario" icon="clock" />
          <div>
            <p>Mañanas (Lunes - Jueves): 8:00 - 13:00</p>
            <p>Tarder (Lunes - Jueves): 15:00 - 18:00</p>
            <p>Viernes: 8:00 - 14:00</p>
          </div>
        </section>
        <section className="flex flex-col gap-1">
          <FooterHeader text="Ubicación" icon="location-dot" />
          <div>
            <p>
              Parque empresarial de Morero P.2-11, Nave 2
              <a
                className="ml-2"
                target="_blank"
                rel="noreferrer"
                href="https://www.google.com/maps/place/Castrol+Service+motec+s.l.+Motor+y+Tecnologia+del+Automovil/@43.396785,-3.8393119,17z/data=!3m1!4b1!4m6!3m5!1s0xd4936420c1708fb:0xbc37d36d1444f5f6!8m2!3d43.396785!4d-3.836737!16s%2Fg%2F11btm3j378?entry=ttu"
              >
                <FaIcon icon="up-right-from-square"></FaIcon>
              </a>
            </p>
            <p>39611 Guarnizo</p>
            <p>Cantrabria</p>
          </div>
        </section>
        <section className="flex flex-col gap-1">
          <FooterHeader text="Contacto" icon="phone" />
          <div>
            <div className="flex flex-row gap-1 items-center">
              <span>{this.telephone}</span>
              <CopyButton
                valueToCopy={this.telephone}
                tooltipMessage="Copiar teléfono"
                notificationMessage={`Teléfono "${this.telephone}" copiado en el portapapeles`}
                replaceEmptySpaces={true}
              />
            </div>
            <div className="flex flex-row gap-1 items-center">
              <span>{this.email}</span>
              <CopyButton
                valueToCopy={this.email}
                tooltipMessage="Copiar correo electrónico"
                notificationMessage={`Correo electrónico "${this.email}" copiado en el portapapeles`}
                replaceEmptySpaces={true}
              />
            </div>
          </div>
        </section>
      </footer>
    );
  }
}

export default Footer;
