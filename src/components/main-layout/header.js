import React from "react";
import NavigationButton from "../navigation-button";
import FaIcon from "../basic-elements/fa-icon";
import displaySalesSection from "../../utilis/display-sales-section";
import { Link } from "react-router-dom";

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      imgSrc:
        window.innerWidth < 700
          ? "/images/other/logo_small.png"
          : "/images/other/logo.png",
    };

    this.handleResize = this.handleResize.bind(this);
  }

  componentDidMount() {
    window.addEventListener("resize", this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize);
  }

  handleResize() {
    this.setState({
      imgSrc:
        window.innerWidth < 700
          ? "/images/other/logo_small.png"
          : "/images/other/logo.png",
    });
  }

  render() {
    const hasCompanyValidOffers = displaySalesSection();

    return (
      <header className="layout-header">
        <div className="hidden min-[370px]:flex justify-center items-center cursor-pointer p-0.5">
          <Link
            to="/"
            className="h-5/6 md:h-full w-auto flex justify-center self-center"
          >
            <img src={this.state.imgSrc} alt="Logo tallers motec" />
          </Link>
        </div>
        <div className="header-buttons flex flex-row items-center">
          <NavigationButton text="Inicio" href="/" />
          <NavigationButton text="Sobre Motec" href="about" />
          <NavigationButton text="Servicios" href="services" />
          {hasCompanyValidOffers && (
            <NavigationButton text="Ofertas" href="sales" />
          )}
          <NavigationButton text="Contacto" href="contact" />
        </div>
        <div className="hidden mr-5 sm:flex flex-row gap-2 justify-center items-center font-semibold text-xs lg:text-base">
          <FaIcon icon="phone"></FaIcon>
          <span className="w-max">
            {process.env.REACT_APP_COMPANY_TELEPHONE}
          </span>
        </div>
      </header>
    );
  }
}

export default Header;
