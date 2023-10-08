import React from "react";
import FaIcon from "./basic-elements/fa-icon";

class ContactCard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="flex flex-col gap-5 items-center">
        <div className="bg-gray-300 h-44 rounded-full p-8">
          <FaIcon icon={this.props.icon} className="h-full" />
        </div>
        {this.props.url ? (
          <a
            href={this.props.url}
            target="_blank"
            className="text-link-color font-bold text-xl"
          >
            {this.props.contactDetails}
          </a>
        ) : (
          <p className="font-bold text-xl">{this.props.contactDetails}</p>
        )}
      </div>
    );
  }
}

export default ContactCard;
