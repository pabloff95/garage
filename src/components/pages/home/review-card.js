import React from "react";
import FaIcon from "../../basic-elements/fa-icon";

class ReviewCard extends React.Component {
  constructor(props) {
    super(props);

    this.openReview = this.openReview.bind(this);
  }

  rate = parseInt(this.props.rate);

  openReview = () => {
    window.open(this.props.url, "_blank");
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
        className="flex flex-col gap-3 w-1/5 h-56 p-5 shadow-lg hover:shadow-xl cursor-pointer rounded shadow-neutral-400 hover:shadow-neutral-400"
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
        <div className="text-gray-800">{this.props.message}</div>
      </div>
    );
  }
}

export default ReviewCard;
