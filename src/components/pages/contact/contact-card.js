import React from "react";
import FaIcon from "../../basic-elements/fa-icon";

class ContactCard extends React.Component {
  constructor(props) {
    super(props);
  }

  copyContact = () => {
    const textToCopy = this.props.contactDetails.replaceAll(" ", "");

    navigator.clipboard.writeText(textToCopy).catch((err) => {
      console.error("Unable to copy text: ", err);
    });
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
            >
              <FaIcon icon={"copy"} />
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
        >
          {contactCardContent}
        </a>
      );
    }

    if (this.props.isEmail) {
      return (
        <a
          href={`mailto:${this.props.contactDetails}`}
          className={`${containerClassList} ${containerHoverClassList}`}
        >
          {contactCardContent}
        </a>
      );
    }

    return <div className={containerClassList}>{contactCardContent}</div>;
  }
}

export default ContactCard;
