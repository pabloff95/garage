import React from "react";

export default class ContactForm extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="w-80% mx-[10%] border-neutral-color-primary flex flex-col justify-center rounded p-2">
        <form className="flex flex-col gap-2">
          <section className="flex flex-row gap-2">
            <label for="submit-button">Correo electrónico *</label>
            <input
              type="text"
              id="email"
              name="email"
              placeholder="Ej.: alberto@gmail.com"
              required
            ></input>
          </section>
          <section className="flex flex-row gap-2">
            <label for="submit-button">Nombre</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Ej.: Alberto García"
              required
            ></input>
          </section>
          <section className="flex flex-row gap-2">
            <label for="submit-button">Motivo</label>
            <input
              type="text"
              id="reason"
              name="reason"
              placeholder="Ej.: Problemas con la dirección"
            ></input>
          </section>
          <section className="flex flex-col gap-2">
            <label for="submit-button">Mensaje</label>
            <textarea placeholder="Escribe tu mensaje aqui..."></textarea>
          </section>
          <section className="m-auto">
            <input
              type="submit"
              value="Enviar"
              className="border-neutral-color-primary hover:border-primary-element hover:text-primary-element hover:scale-95 hover:text-shadow-tertiary-element transition-all duration-200 w-fit py-3 px-12 rounded font-bold tracking-wider hover:cursor-pointer"
            />
          </section>
        </form>
      </div>
    );
  }
}
