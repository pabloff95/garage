import React from "react";
import { Tooltip } from "react-tooltip";
import {
  showSuccessNotification,
  showLoadingNotificationForPromise,
} from "../../notification";
import { showErrorNotification } from "../../notification";

export default class ContactForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      focusedElement: "",
      isSubmitButtonDisabled: false,
      isContactMissing: false,
    };
  }

  labelClasses =
    "font-semibold text-xs transition-all ease-in-out duration-300";

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
    return element === this.state.focusedElement ? "" : "text-transparent";
  };

  getTextAreaHeight = () => {
    const textAreaElement = document.querySelector("#message");
    if (
      textAreaElement?.value.length > 0 ||
      this.state.focusedElement === "message"
    ) {
      return "h-56";
    }

    return "min-h-fit";
  };

  getTextAreaRows = () => {
    const textAreaElement = document.querySelector("#message");

    if (
      textAreaElement?.value.length > 0 ||
      this.state.focusedElement === "message"
    ) {
      return "";
    }

    return 1;
  };

  sendEmail = async (emailData) => {
    const options = {
      method: "POST",
      mode: "cors",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(emailData),
    };

    const response = await fetch("http://localhost:5000/contact_email", options)
      .then((response) => response.json())
      .then((data) => data);

    if (!response || !response.success) {
      const errorMessage = `El correo no pudo ser enviado. ${
        response.message ? "Motivo: " + response.message : ""
      } `;
      showErrorNotification(errorMessage, 5000);
      return false;
    }

    return response;
  };

  onSendEmail = async (event) => {
    event.preventDefault();

    // Check that one of the two contact fields (telephone / email) are filled
    const telephoneField = document.querySelector("#telephone");
    const emailField = document.querySelector("#email");

    if (telephoneField.value.length === 0 && emailField.value.length === 0) {
      this.setState({
        isContactMissing: true,
      });
      showErrorNotification(
        "Introduzca su teléfono y/o su correo electrónico",
        5000
      );
      return;
    }

    this.setState({
      isContactMissing: false,
      isSubmitButtonDisabled: true,
    });

    const data = {
      telephone: telephoneField?.value ?? "",
      email: emailField?.value ?? "",
      message: document.querySelector("#message")?.value ?? "",
      subject: document.querySelector("#reason")?.value ?? "",
      name: document.querySelector("#name")?.value ?? "",
    };

    const emailPromise = this.sendEmail(data);

    showLoadingNotificationForPromise(
      "Tu correo electrónico está siendo enviado",
      emailPromise
    );

    const response = await emailPromise;

    if (response) {
      showSuccessNotification(
        "El correo electrónico fue enviado correctamente"
      );
    }

    // Temporally disable button, to prevent resending the same email again
    setTimeout(
      () =>
        this.setState({
          isSubmitButtonDisabled: false,
        }),
      2000
    );
  };

  render() {
    return (
      <div
        className={`w-80% mx-[10%] flex flex-col justify-center py-8 px-6 rounded-lg mt-6 ${
          this.state.focusedElement !== ""
            ? "shadow-element-gained-focus"
            : "shadow-neutral-color-gray"
        }`}
      >
        <form
          className="flex flex-col gap-0.5"
          onSubmit={(e) => this.onSendEmail(e)}
        >
          <section className="flex flex-row gap-4 w-full">
            <div className="w-1/2">
              <div className="h-6">
                <label
                  htmlFor="name"
                  className={`${this.getLabelDisplayClass("name")} ${
                    this.labelClasses
                  }`}
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
            <div></div>
            <div className="w-1/2"></div>
          </section>
          <section className="flex flex-row gap-4 w-full">
            <div className="w-1/2">
              <div className="h-6">
                <label
                  htmlFor="telephone"
                  className={`${this.getLabelDisplayClass("telephone")} ${
                    this.labelClasses
                  }`}
                >
                  Teléfono
                </label>
              </div>
              <input
                type="tel"
                id="telephone"
                name="telephone"
                placeholder={this.getPlaceHolder("telephone", "Teléfono")}
                className={`w-full bg-page-bg-color outline-none border-b-2 border-b-neutral-color-primary focus:border-b-primary-element p-1 rounded-t ${
                  this.state.isContactMissing ? "!border-red-500" : ""
                } `}
                onFocus={() => this.onFocusElement("telephone")}
                onBlur={() => this.onBlur()}
                pattern="[0-9]{9}"
                maxLength={9}
              ></input>
            </div>
            <div className="h-14 flex items-end">
              <p className="h-fit">O</p>
            </div>
            <div className="w-1/2">
              <div className="h-6">
                <label
                  htmlFor="email"
                  className={`${this.getLabelDisplayClass("email")} ${
                    this.labelClasses
                  }`}
                >
                  Correo electrónico
                </label>
              </div>
              <input
                type="email"
                id="email"
                name="email_from"
                placeholder={this.getPlaceHolder("email", "Correo electrónico")}
                className={`w-full bg-page-bg-color outline-none border-b-2 border-b-neutral-color-primary focus:border-b-primary-element p-1 rounded-t ${
                  this.state.isContactMissing ? "!border-red-500" : ""
                }`}
                onFocus={() => this.onFocusElement("email")}
                onBlur={() => this.onBlur()}
              ></input>
            </div>
          </section>
          {this.state.isContactMissing && (
            <div>
              <p className="text-red-500">
                Introduzca al menos una forma de contacto
              </p>
            </div>
          )}
          <section className="flex flex-col gap-2">
            <div className="h-4">
              <label
                htmlFor="reason"
                className={`${this.getLabelDisplayClass("reason")} ${
                  this.labelClasses
                }`}
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
                className={`${this.getLabelDisplayClass("message")} ${
                  this.labelClasses
                }`}
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
              rows={this.getTextAreaRows()}
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
                  : "hover:border-element-gained-focus hover:text-element-gained-focus hover:scale-95 hover:text-shadow-secondary-element hover:cursor-pointer"
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
