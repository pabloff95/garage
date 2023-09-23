import React from "react";
import FaIcon from "../../basic-elements/fa-icon";

class ReviewCard extends React.Component {
  constructor(props) {
    super(props);

    this.openReview = this.openReview.bind(this);
    this.getShortMessage = this.getShortMessage.bind(this);

    this.element = React.createRef();

    this.state = {
      isExpanded: false,
    };
  }

  rate = parseInt(this.props.rate);

  openReview = () => {
    window.open(this.props.url, "_blank");
  };

  getShortMessage = () => {
    const maxCharacters = 200;

    if (this.props.message.length <= maxCharacters) {
      return <span>{this.props.message}</span>;
    }

    // Get short message
    const messageWords = this.props.message
      .substring(0, maxCharacters)
      .split(" ");
    messageWords.pop(); // Remove last word to prevent having not complete words
    const shortMessage = messageWords.join(" ");

    // Get final text
    const messageToDisplay = this.state.isExpanded
      ? `${this.props.message}`
      : `${shortMessage}  ...`;

    const buttonText = this.state.isExpanded ? "menos" : "más";

    return (
      <span>
        {messageToDisplay}&nbsp;
        <span
          className="text-sky-500 hover:underline"
          onClick={this.toggleTextDisplay}
        >
          {buttonText}
        </span>
      </span>
    );
  };

  toggleTextDisplay = (event) => {
    event.stopPropagation(); // Prevent click on parent (which triggers openReview)

    // Update states
    this.setState(
      {
        isExpanded: !this.state.isExpanded,
      },
      () => {
        // Set new heigth AFTER isExpanded has been updated (to get the new element's height)
        const cardHeigth = this.state.isExpanded
          ? this.element.current.clientHeight
          : 0; // Set 0 as default card heigth (height auto will be used instead)

        this.props.onToggle(cardHeigth);
      }
    );
  };

  getDate = () => {
    const currentYear = new Date().getFullYear();
    const cardDate = parseInt(this.props.date);

    if (cardDate === currentYear) {
      return this.props.date;
    }

    return `Hace ${currentYear - cardDate} año${
      currentYear - cardDate === 1 ? "" : "s"
    }`;
  };

  render() {
    const stars = [...Array(this.rate)].map((_, index) => (
      <FaIcon
        icon="star"
        color="#fff700"
        key={`star-${index}`}
        className="w-6 h-6"
      />
    ));

    return (
      <div
        className="flex flex-col gap-3 w-10/12 min-w-[20rem] p-5 shadow-lg hover:shadow-xl cursor-pointer rounded shadow-neutral-400 hover:shadow-neutral-400 h-fit"
        onClick={this.openReview}
        ref={this.element}
      >
        <div className="flex flex-row justify-between">
          <div className="flex flex-row gap-2 w-full justify-start">
            {stars}
          </div>
          <img
            className="w-8 h-8"
            src="/images/pages/home/google-logo.webp"
            alt="Logo de Google"
          />
        </div>
        <div
          className={`text-gray-800 grow ${
            this.state.isExpanded ? "h-fit" : "h-36"
          }`}
        >
          {this.getShortMessage()}
        </div>
        <footer className="text-xs text-gray-500 w-full italic opacity-80 flex flex-row justify-between">
          <span>{this.props.author}</span>
          <span>{this.getDate()}</span>
        </footer>
      </div>
    );
  }
}

export default ReviewCard;
