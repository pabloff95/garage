import React from "react";
import FaIcon from "./basic-elements/fa-icon";

class ContactCard extends React.Component {
  constructor(props) {
    super(props);
  }

  copyContact = () => {
    navigator.clipboard.writeText(this.props.contactDetails).catch((err) => {
      console.error("Unable to copy text: ", err);
    });
  };

  render() {
    // Define container tailwind classes
    const containerClassList =
      "flex flex-col gap-2 items-center border shadow-neutral-color-gray p-4 rounded-lg min-w-[15vw] hover:cursor-pointer hover:shadow-primary-element hover:border-primary-element";

    // Define card content elements
    const contactCardContent = (
      <>
        <div className="p-4 h-24">
          <FaIcon icon={this.props.icon} className="h-full" />
        </div>
        <p className="text-md font-semibold text-link-color tracking-wider">
          {this.props.message.toUpperCase()}
        </p>
        {this.props.contactDetails && (
          <p className="text-2xl">{this.props.contactDetails}</p>
        )}
      </>
    );

    if (this.props.url) {
      return (
        <a href={this.props.url} target="_blank" className={containerClassList}>
          {contactCardContent}
        </a>
      );
    }

    if (this.props.isEmail) {
      return (
        <a
          href={`mailto:${this.props.contactDetails}`}
          className={containerClassList}
        >
          {contactCardContent}
        </a>
      );
    }

    return (
      <div className={containerClassList} onClick={() => this.copyContact()}>
        {contactCardContent}
      </div>
    );
  }
}

export default ContactCard;
