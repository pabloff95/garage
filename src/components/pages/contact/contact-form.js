import React from "react";

export default class ContactForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      focusedElement: "",
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

  render() {
    return (
      <div className="w-80% mx-[10%] flex flex-col justify-center p-2">
        <form className="flex flex-col gap-0.5">
          <section className="flex flex-row gap-4 w-full">
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
                type="text"
                id="email"
                name="email"
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
                Mensaje
              </label>
            </div>
            <textarea
              id="message"
              placeholder={this.getPlaceHolder("message", "Mensaje")}
              className={`${this.getTextAreaHeight()} w-full bg-page-bg-color outline-none border-b-2 border-b-neutral-color-primary focus:border-b-primary-element p-1 rounded-t`}
              onFocus={() => this.onFocusElement("message")}
              onBlur={() => this.onBlur()}
              rows={this.state.focusedElement === "message" ? "" : 1}
            ></textarea>
          </section>
          <section className="mx-auto mt-2">
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
