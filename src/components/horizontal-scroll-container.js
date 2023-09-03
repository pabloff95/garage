import React from "react";
import Carousel from "react-material-ui-carousel";
import { Grid } from "@mui/material";

class HorizontalScrollContainer extends React.Component {
  constructor(props) {
    super(props);

    this.getItems = this.getItems.bind(this);
  }

  max = parseInt(this.props.itemsPerSlide);

  getItems = () => {
    // Prepare carrousel (array of arrays)
    const allCarrouselItems = [];
    let newCarrousel = [];

    [...this.props.children].forEach((item) => {
      newCarrousel.push(item);

      if (newCarrousel.length === this.max) {
        allCarrouselItems.push(newCarrousel);
        newCarrousel = [];
      }
    });

    // Add last items
    if (newCarrousel.length > 0) {
      allCarrouselItems.push(newCarrousel);
    }

    return (
      <Carousel
        animation="slide"
        autoPlay={false}
        indicatorContainerProps={{ style: { display: "none" } }} // Hide navigation legend
        className="pt-2 pb-10"
      >
        {allCarrouselItems.map((slide) => (
          <Grid
            container
            spacing={this.props.spacing ?? 0}
            className="w-full flex flex-row justify-center"
          >
            {slide.map((item, index) => (
              <Grid
                item
                xs={12 / this.max}
                key={index}
                className="flex justify-center"
              >
                {item}
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
