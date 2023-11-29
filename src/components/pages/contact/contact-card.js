import React from "react";
import FaIcon from "../../basic-elements/fa-icon";
import { Tooltip } from "react-tooltip";
import toast, { Toaster } from "react-hot-toast";

class ContactCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isCopyButtonHovered: false,
    };
  }

  triggerCopiedValueNotification = (copiedValue) => {
    const capitalizedName =
      this.props.contactInformation[0].toUpperCase() +
      this.props.contactInformation.slice(1);

    toast.success(
      `${capitalizedName} "${copiedValue}" copiado en el portapapeles`
    );
  };

  copyContact = () => {
    const textToCopy = this.props.contactDetails.replaceAll(" ", "");

    navigator.clipboard.writeText(textToCopy).catch((err) => {
      console.error("Unable to copy text: ", err);
    });

    this.triggerCopiedValueNotification(textToCopy);
  };

  render() {
    // Define container tailwind classes
    const containerClassList =
      "flex flex-col gap-2 items-center border shadow-neutral-color-gray p-4 rounded-lg min-w-[15vw]";
    const containerHoverClassList =
      "hover:shadow-primary-element hover:border-primary-element hover:cursor-pointer";

    // Define card content elements
    const contactCardContent = (
      <>
        <div className="p-4 h-[5.5rem]">
          <FaIcon icon={this.props.icon} className="h-full" />
        </div>
        <p className="text-md font-semibold text-link-color tracking-wider">
          {this.props.message.toUpperCase()}
        </p>
        <span className="text-xl flex flex-row gap-2">
          {this.props.contactDetails && (
            <span>{this.props.contactDetails}</span>
          )}
          {this.props.displayCopyButton && (
            <div
              className="hover:text-primary-element hover:cursor-pointer"
              onClick={(e) => {
                e.preventDefault(); // Prevent opening a tag link
                this.copyContact();
              }}
              onMouseEnter={() => {
                this.setState({
                  isCopyButtonHovered: true,
                });
              }}
              onMouseLeave={() => {
                this.setState({
                  isCopyButtonHovered: false,
                });
              }}
              data-tooltip-id={`copy-button-tooltip-${this.props.icon}`}
              data-tooltip-content={`Copiar ${this.props.contactInformation}`}
            >
              <FaIcon icon={"copy"} />
              <Tooltip id={`copy-button-tooltip-${this.props.icon}`} />
              <Toaster
                position="bottom-center"
                toastOptions={{
                  style: {
                    border: "1px solid var(--neutral-color-primary)",
                    padding: "1rem",
                    color: "var(--neutral-color-primary)",
                    maxWidth: "fit-content",
                  },
                  duration: 1500,
                }}
              />
            </div>
          )}
        </span>
      </>
    );

    if (this.props.url) {
      return (
        <a
          href={this.props.url}
          target="_blank"
          rel="noreferrer"
          className={`${containerClassList} ${containerHoverClassList}`}
          data-tooltip-id={`on-click-link-tooltip-${this.props.icon}`}
          data-tooltip-content={this.props.redirectTooltip}
        >
          {contactCardContent}
          {!this.state.isCopyButtonHovered && (
            <Tooltip id={`on-click-link-tooltip-${this.props.icon}`} />
          )}
        </a>
      );
    }

    if (this.props.isEmail) {
      return (
        <a
          href={`mailto:${this.props.contactDetails}`}
          className={`${containerClassList} ${containerHoverClassList}`}
          data-tooltip-id={`on-click-link-tooltip-${this.props.icon}`}
          data-tooltip-content={this.props.redirectTooltip}
        >
          {contactCardContent}
          {!this.state.isCopyButtonHovered && (
            <Tooltip id={`on-click-link-tooltip-${this.props.icon}`} />
          )}
        </a>
      );
    }

    return <div className={containerClassList}>{contactCardContent}</div>;
  }
}

export default ContactCard;
