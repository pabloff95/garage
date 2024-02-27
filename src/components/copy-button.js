import React from "react";
import { showSuccessNotification } from "./notification";
import FaIcon from "./basic-elements/fa-icon";
import { Tooltip } from "react-tooltip";

class CopyButton extends React.Component {
  constructor(props) {
    super(props);
  }

  copyToClipboard = () => {
    const textToCopy = this.props.replaceEmptySpaces
      ? this.props.valueToCopy.replaceAll(" ", "")
      : this.props.valueToCopy;

    navigator.clipboard.writeText(textToCopy).catch((err) => {
      console.error("Unable to copy text: ", err);
    });

    const notificationMessage = this.props.notificationMessage
      ? this.props.notificationMessage
      : `"${this.props.valueToCopy}" copiado en el portapapeles`;

    showSuccessNotification(notificationMessage);
  };

  render() {
    const uniqueId = Date.now();

    return (
      <div
        className="hover:text-element-gained-focus hover:cursor-pointer"
        onClick={(e) => {
          e.preventDefault(); // Prevent triggering other elements placed behind
          this.copyToClipboard();
        }}
        onMouseEnter={() => {
          if (this.props?.onMouseEnter) {
            this.props.onMouseEnter();
          }
        }}
        onMouseLeave={() => {
          if (this.props?.onMouseLeave) {
            this.props.onMouseLeave();
          }
        }}
        data-tooltip-id={`copy-button-tooltip-${uniqueId}`}
        data-tooltip-content={this.props.tooltipMessage}
      >
        <FaIcon icon={"copy"} />
        <Tooltip id={`copy-button-tooltip-${uniqueId}`} />
      </div>
    );
  }
}

export default CopyButton;
