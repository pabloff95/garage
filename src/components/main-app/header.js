import React from "react";
import NavigationButton from "../navigation-button";

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <header className="w-full flex flex-row gap-2">
        <NavigationButton text="Inicio" />
        <NavigationButton text="Sobre Motec" />
        <NavigationButton text="Servicios" />
        <NavigationButton text="Contacto" />
      </header>
    );
  }
}

export default Header;
