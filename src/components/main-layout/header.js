import React from "react";
import NavigationButton from "../navigation-button";
import FaIcon from "../basic-elements/fa-icon";
import displaySalesSection from "../../utilis/display-sales-section";
import { Link } from "react-router-dom";

class Header extends React.Component {
  render() {
    const hasCompanyValidOffers = displaySalesSection();

    return (
      <header className="layout-header">
        <div className="flex justify-center items-center cursor-pointer">
          <Link to="/" className="logo-container">
            <img src="/images/other/logo.png" alt="Logo tallers motec" />
          </Link>
        </div>
        <div className="flex flex-row gap-2">
          <NavigationButton text="Inicio" href="/" />
          <NavigationButton text="Sobre Motec" href="about" />
          <NavigationButton text="Servicios" href="services" />
          {hasCompanyValidOffers && (
            <NavigationButton text="Ofertas" href="sales" />
          )}
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
