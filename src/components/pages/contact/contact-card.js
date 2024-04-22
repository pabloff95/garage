import React from "react";
import FaIcon from "../../basic-elements/fa-icon";
import { Tooltip } from "react-tooltip";
import CopyButton from "../../copy-button";

class ContactCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isCopyButtonHovered: false,
    };
  }

  getCopyNotificationMessage = () => {
    const textToCopy = this.props.contactDetails.replaceAll(" ", "");

    const capitalizedName =
      this.props.contactInformation[0].toUpperCase() +
      this.props.contactInformation.slice(1);

    return `${capitalizedName} "${textToCopy}" copiado en el portapapeles`;
  };

  render() {
    // Define container tailwind classes
    const containerClassList =
      "min-w-[200px] w-1/4 flex flex-col gap-2 items-center border shadow-neutral-color-gray p-4 rounded-lg";
    const containerHoverClassList =
      "hover:shadow-element-gained-focus hover:border-element-gained-focus hover:cursor-pointer";

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
            <CopyButton
              valueToCopy={this.props.contactDetails}
              replaceEmptySpaces={true}
              notificationMessage={this.getCopyNotificationMessage()}
              tooltipMessage={`Copiar ${this.props.contactInformation}`}
              onMouseEnter={() =>
                this.setState({
                  isCopyButtonHovered: true,
                })
              }
              onMouseLeave={() => {
                this.setState({
                  isCopyButtonHovered: false,
                });
              }}
            />
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
