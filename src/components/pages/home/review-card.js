import React from "react";
import FaIcon from "../../basic-elements/fa-icon";

class ReviewCard extends React.Component {
  constructor(props) {
    super(props);

    this.openReview = this.openReview.bind(this);
    this.getShortMessage = this.getShortMessage.bind(this);

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

    this.setState({
      isExpanded: !this.state.isExpanded,
    });
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
        className={`flex flex-col gap-3 w-10/12 p-5 shadow-lg hover:shadow-xl cursor-pointer rounded shadow-neutral-400 hover:shadow-neutral-400
        ${this.state.isExpanded ? "h-fit" : "h-56"} `}
        onClick={this.openReview}
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
        <div className="text-gray-800 grow">{this.getShortMessage()}</div>
        <footer className="text-xs text-gray-500 text-right italic opacity-80">
          {this.props.author}
        </footer>
      </div>
    );
  }
}

export default ReviewCard;
