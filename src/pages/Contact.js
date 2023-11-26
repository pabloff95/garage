import React from "react";
import GarageMap from "../components/garage-map";
import ContactCard from "../components/pages/contact/contact-card";
import ContactForm from "../components/pages/contact/contact-form";

class Contact extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <section className="my-5 p-3 w-full">
          <h1 className="w-80% mx-[10%] font-bold text-3xl my-3">
            Ponte en contacto con nosotros
          </h1>
        </section>
        <section className="my-5 p-3 w-full">
          <div className="w-80% mx-[10%] flex flex-row justify-evenly">
            <ContactCard
              icon="phone"
              message="Llamanos"
              contactDetails="942 566 299"
              displayCopyButton={true}
            />
            <ContactCard
              icon="envelope"
              message="Escribenos"
              contactDetails="info@motec.es"
              isEmail={true}
              displayCopyButton={true}
            />
            <ContactCard
              icon="fa-brands fa-facebook"
              message="Hablanos"
              url="https://www.facebook.com/MORERONAVE2"
            />
          </div>
        </section>
        <section className="my-5 p-3">
          <h1 className="w-80% mx-[10%] font-bold text-3xl my-3">
            Formulario de contacto
          </h1>
          <p className="w-80% mx-[10%] text-lg mb-3">
            A través del siguiente formulario, también puedes ponerte en
            contacto con nosotros:
          </p>
          <ContactForm />
        </section>
        <section className="my-5 p-3">
          <h1 className="w-80% mx-[10%] font-bold text-3xl my-3">
            ¡Ven a conocernos!
          </h1>
          <p className="w-80% mx-[10%] text-lg my-3">
            Nos ubicamos en el parque empresarial de Morero, parcela 2-11 nave
            nº2, Guarnizo el Astillero (Santander):
          </p>
          <div className="w-full text-center mt-10">
            <GarageMap
              mapClasses="w-2/3 h-[40rem] m-auto"
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
