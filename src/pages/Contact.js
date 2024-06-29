import React from "react";
import GarageMap from "../components/garage-map";
import ContactCard from "../components/pages/contact/contact-card";
import ContactForm from "../components/pages/contact/contact-form";
import Title from "../components/basic-elements/title";

class Contact extends React.Component {
  render() {
    return (
      <div className="mt-[5vh]">
        <section className="py-3 sm:py-5 w-full">
          <Title text="Métodos de contacto"></Title>
        </section>
        <section className="py-1 sm:py-3 w-full">
          <div className="w-80% mx-[10%] flex flex-col gap-4 md:gap-0 md:flex-row items-center md:items-stretch md:justify-evenly flex-wrap">
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
              icon="fa-brands fa-facebook"
              message="Hablanos"
              url="https://www.facebook.com/MORERONAVE2"
              redirectTooltip="Abrir página de Facebook"
            />
          </div>
        </section>
        <section className="py-3 w-full">
          <Title text="Formulario"></Title>
          <p className="paragraph w-80% mx-[10%] mb-3">
            A través del siguiente formulario, también puedes ponerte en
            contacto con nosotros:
          </p>
          <ContactForm />
        </section>
        <section className="py-1 sm:py-3 w-full">
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
