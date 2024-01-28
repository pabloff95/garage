import React from "react";
import NavigationButton from "../navigation-button";
import Logo from "../basic-elements/logo";
import FaIcon from "../basic-elements/fa-icon";

class Header extends React.Component {
  render() {
    return (
      <header className="layout-header">
        <div className="ml-5">
          <Logo />
        </div>
        <div className="flex flex-row gap-2">
          <NavigationButton text="Inicio" href="/" />
          <NavigationButton text="Sobre Motec" href="about" />
          <NavigationButton text="Servicios" href="services" />
          <NavigationButton text="Ofertas" href="sales" />
          <NavigationButton text="Contacto" href="contact" />
        </div>
        <div className="mr-5 flex flex-row gap-2 justify-center items-center text-xs font-semibold">
          <FaIcon icon="phone"></FaIcon>
          <span>{process.env.REACT_APP_COMPANY_TELEPHONE}</span>
        </div>
      </header>
    );
  }
}

export default Header;
