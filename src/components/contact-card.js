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
        <p className="font-bold text-xl">{this.props.contactDetails}</p>
      </div>
    );
  }
}

export default ContactCard;
