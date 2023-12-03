import React from "react";
import { Tooltip } from "react-tooltip";
import {
  showSuccessNotification,
  showLoadingNotification,
} from "../../notification";
import emailjs from "@emailjs/browser";

export default class ContactForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      focusedElement: "",
      isSubmitButtonDisabled: false,
    };
  }

  onFocusElement = (element) => {
    this.setState({
      focusedElement: element,
    });
  };

  onBlur = () => {
    this.setState({
      focusedElement: "",
    });
  };

  getPlaceHolder = (element, placeholder) => {
    return element === this.state.focusedElement ? "" : placeholder;
  };

  getLabelDisplayClass = (element) => {
    return element === this.state.focusedElement ? "" : "hidden";
  };

  getTextAreaHeight = () => {
    return this.state.focusedElement === "message" ? "h-56" : "min-h-fit";
  };

  onSendEmail = (event) => {
    event.preventDefault();
    this.setState({
      isSubmitButtonDisabled: true,
    });

    // Send email
    emailjs.sendForm(
      process.env.REACT_APP_EMAIL_SERVICE_ID,
      process.env.REACT_APP_EMAIL_TEMPLATE_ID,
      event.target,
      process.env.REACT_APP_EMAIL_PUBLIC_KEY
    );

    // On send form mock loading time to send the email, in order to display correct messages and to prevent massive number of messages from being sent through it
    const fakeLoadingTime = 1500;

    showLoadingNotification(
      "Tu correo electrónico está siendo enviado",
      fakeLoadingTime
    );

    setTimeout(() => {
      showSuccessNotification(
        "El correo electrónico fue enviado correctamente"
      );
      this.setState({
        isSubmitButtonDisabled: false,
      });
    }, fakeLoadingTime);
  };

  render() {
    return (
      <div className="w-80% mx-[10%] flex flex-col justify-center p-2">
        <form
          className="flex flex-col gap-0.5"
          onSubmit={(e) => this.onSendEmail(e)}
        >
          <section className="flex flex-row gap-4 w-full">
            <div className="w-1/2">
              <div className="h-6">
                <label
                  htmlFor="name"
                  className={`font-semibold text-xs ${this.getLabelDisplayClass(
                    "name"
                  )}`}
                >
                  Nombre *
                </label>
              </div>
              <input
                type="text"
                id="name"
                name="name"
                placeholder={this.getPlaceHolder("name", "Nombre *")}
                className="w-full bg-page-bg-color outline-none border-b-2 border-b-neutral-color-primary focus:border-b-primary-element p-1 rounded-t"
                onFocus={() => this.onFocusElement("name")}
                onBlur={() => this.onBlur()}
                required
              ></input>
            </div>
            <div className="w-1/2">
              <div className="h-6">
                <label
                  htmlFor="email"
                  className={`font-semibold text-xs ${this.getLabelDisplayClass(
                    "email"
                  )}`}
                >
                  Correo electrónico *
                </label>
              </div>
              <input
                type="email"
                id="email"
                name="email_from"
                placeholder={this.getPlaceHolder(
                  "email",
                  "Correo electrónico *"
                )}
                className="w-full bg-page-bg-color outline-none border-b-2 border-b-neutral-color-primary focus:border-b-primary-element p-1 rounded-t"
                onFocus={() => this.onFocusElement("email")}
                onBlur={() => this.onBlur()}
                required
              ></input>
            </div>
          </section>
          <section className="flex flex-col gap-2">
            <div className="h-4">
              <label
                htmlFor="reason"
                className={`font-semibold text-xs ${this.getLabelDisplayClass(
                  "reason"
                )}`}
              >
                Asunto
              </label>
            </div>
            <input
              type="text"
              id="reason"
              name="reason"
              placeholder={this.getPlaceHolder("reason", "Asunto")}
              onFocus={() => this.onFocusElement("reason")}
              onBlur={() => this.onBlur()}
              className="w-full bg-page-bg-color outline-none border-b-2 border-b-neutral-color-primary focus:border-b-primary-element p-1 rounded-t"
            ></input>
          </section>
          <section className="flex flex-col gap-2">
            <div className="h-4">
              <label
                htmlFor="message"
                className={`font-semibold text-xs ${this.getLabelDisplayClass(
                  "message"
                )}`}
              >
                Mensaje *
              </label>
            </div>
            <textarea
              id="message"
              name="message_text"
              placeholder={this.getPlaceHolder("message", "Mensaje *")}
              className={`${this.getTextAreaHeight()} w-full bg-page-bg-color outline-none border-b-2 border-b-neutral-color-primary focus:border-b-primary-element p-1 rounded-t`}
              onFocus={() => this.onFocusElement("message")}
              onBlur={() => this.onBlur()}
              rows={this.state.focusedElement === "message" ? "" : 1}
              required
            ></textarea>
          </section>
          <section className="mx-auto mt-2">
            <input
              type="submit"
              value="ENVIAR"
              className={`${
                this.state.isSubmitButtonDisabled
                  ? "cursor-not-allowed"
                  : "hover:border-primary-element hover:text-primary-element hover:scale-95 hover:text-shadow-tertiary-element hover:cursor-pointer"
              } border-neutral-color-primary transition-all duration-200 w-fit py-3 px-12 rounded font-bold tracking-wider`}
              data-tooltip-id="submit-form-tooltip"
              data-tooltip-content="Enviar correo electrónico"
              disabled={this.state.isSubmitButtonDisabled}
            />
            <Tooltip id="submit-form-tooltip" />
          </section>
        </form>
      </div>
    );
  }
}
