import React from "react";
import NavigationButton from "../navigation-button";

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <header className="layout-header">
        <NavigationButton text="Inicio" href="/" />
        <NavigationButton text="Sobre Motec" href="about" />
        <NavigationButton text="Servicios" href="services" />
        <NavigationButton text="Contacto" href="contact" />
      </header>
    );
  }
}

export default Header;
