import React from "react";
import Carousel from "react-material-ui-carousel";
import { Grid } from "@mui/material";
import { Tooltip } from "react-tooltip";

class HorizontalScrollContainer extends React.Component {
  constructor(props) {
    super(props);

    this.getItems = this.getItems.bind(this);

    this.state = {
      carrouselItems: [],
    };
  }

  max = parseInt(this.props.itemsPerSlide);

  getItems = () => {
    // Prepare carrousel (array of arrays)
    let newCarrousel = [];

    [...this.props.children].forEach((item) => {
      newCarrousel.push(item);

      if (newCarrousel.length === this.max) {
        this.state.carrouselItems.push(newCarrousel);
        newCarrousel = [];
      }
    });

    // Add last items
    if (newCarrousel.length > 0) {
      this.state.carrouselItems.push(newCarrousel);
    }

    return (
      <Carousel
        animation="fade"
        autoPlay={false}
        interval="5000"
        indicatorContainerProps={{ style: { display: "none" } }} // Hide navigation legend
        className="!overflow-visible h-auto pt-2 pb-10"
        onChange={this.props.onSlideChange}
      >
        {this.state.carrouselItems.map((slide, slideIndex) => (
          <Grid
            container
            spacing={this.props.spacing ?? 0}
            className="w-full flex flex-row justify-center"
            key={slideIndex}
          >
            {slide.map((item, index) => (
              <Grid
                item
                xs={12 / this.max}
                key={index}
                className="flex justify-center"
                data-tooltip-id={`scroll-item-card-tooltip-${slideIndex}`}
                data-tooltip-content={this.props.tooltipMessage}
              >
                {item}
                <Tooltip id={`scroll-item-card-tooltip-${slideIndex}`} />
              </Grid>
            ))}
          </Grid>
        ))}
      </Carousel>
    );
  };

  render() {
    return <div className={this.props.className}>{this.getItems()}</div>;
  }
}

export default HorizontalScrollContainer;
