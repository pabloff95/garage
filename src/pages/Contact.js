import React from "react";
import GarageMap from "../components/garage-map";
import ContactCard from "../components/pages/contact/contact-card";
import ContactForm from "../components/pages/contact/contact-form";
import Title from "../components/basic-elements/title";

class Contact extends React.Component {
  componentDidMount = () => {
    document.querySelector("#root").scrollTo(0, 0); // Scroll to top of the page on load
  };

  getConcactCardsFlexBox() {
    const parentContainerWidth = Math.ceil(window.innerWidth * 0.8); // 80% because the parent container uses w-[80%]

    return Math.ceil(parentContainerWidth / 3 > 250)
      ? "flex-row justify-evenly gap-6 sm:gap-24"
      : "flex-col items-center align-center gap-12";
  }

  render() {
    return (
      <div className="mt-[5vh]">
        <section className="py-1 sm:py-3 w-full min-h-[70vh] flex flex-col justify-center">
          <Title text="Métodos de contacto"></Title>
          <div
            className={`w-[80%] mx-[10%] flex ${this.getConcactCardsFlexBox()} py-12`}
          >
            <ContactCard
              icon="phone"
              message="Llamanos"
              contactDetails={process.env.REACT_APP_COMPANY_TELEPHONE}
              contactInformation="teléfono"
              displayCopyButton={true}
            />
            <ContactCard
              icon="envelope"
              message="Escribenos"
              contactDetails={process.env.REACT_APP_COMPANY_EMAIL}
              contactInformation="correo electrónico"
              isEmail={true}
              displayCopyButton={true}
              redirectTooltip="Abrir correo electrónico"
            />
            <ContactCard
              icon="fa-brands fa-facebook-f"
              message="Hablanos"
              url="https://www.facebook.com/MORERONAVE2"
              redirectTooltip="Abrir página de Facebook"
            />
          </div>
        </section>
        <section className="py-12 sm:py-24 min-h-[90vh] flex flex-col w-full bg-alternate">
          <Title text="Formulario de contacto"></Title>
          <p className="paragraph w-80% mx-[10%] mb-3">
            A través del siguiente formulario, también puedes ponerte en
            contacto con nosotros:
          </p>
          <ContactForm />
        </section>
        <section className="py-1 sm:py-3 min-h-[90vh] w-full">
          <Title text="¡Ven a conocernos!"></Title>
          <p className="paragraph w-80% mx-[10%] my-3">
            Nos ubicamos en el parque empresarial de Morero, parcela 2-11 nave
            nº2, Guarnizo el Astillero (Santander):
          </p>
          <div className="px-4 sm:px-0 w-full text-center mt-10">
            <GarageMap
              mapClasses="w-full sm:w-[80%] h-[40rem] m-auto"
              zoom="13"
              showLink={true}
            />
          </div>
        </section>
      </div>
    );
  }
}

export default Contact;
