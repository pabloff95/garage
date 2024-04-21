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

  max = parseInt(this.props.itemsPerSlide ?? 1);

  componentWillMount = () => {
    const { children, renderAsGrid } = this.props;

    if (!renderAsGrid) {
      this.setState({
        carrouselItems: [...children],
      });
      return;
    }

    // Prepare carrousel items (set as array of arrays, for elements using grid in order to display X items per slide)
    let newCarrousel = [];

    [...children].forEach((item) => {
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
  };

  getItems = () => {
    const {
      onSlideChange,
      spacing,
      tooltipMessage,
      hidePagination,
      navButtonsAlwaysVisible,
      autoPlay,
      interval,
      renderAsGrid,
    } = this.props;

    return (
      <Carousel
        animation="fade"
        fullHeightHover={false}
        autoPlay={autoPlay}
        interval={interval}
        navButtonsAlwaysVisible={navButtonsAlwaysVisible}
        indicatorContainerProps={{
          style: { display: hidePagination ? "none" : "" }, // Hide navigation pagination element
        }}
        className="!overflow-visible h-auto pt-2 pb-10"
        onChange={onSlideChange}
        navButtonsProps={{
          style: {
            backgroundColor: "var(--neutral-color-primary)",
          },
          className: "hover:carousel-nav-button",
        }}
        indicatorIconButtonProps={{
          style: {
            color: "var(--neutral-color-primary)",
          },
        }}
        activeIndicatorIconButtonProps={{
          style: {
            color: "var(--primary-element)",
          },
        }}
      >
        {renderAsGrid
          ? this.state.carrouselItems.map((slide, slideIndex) => (
              <Grid
                container
                spacing={spacing ?? 0}
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
                    data-tooltip-content={tooltipMessage}
                  >
                    {item}
                    <Tooltip id={`scroll-item-card-tooltip-${slideIndex}`} />
                  </Grid>
                ))}
              </Grid>
            ))
          : this.state.carrouselItems}
      </Carousel>
    );
  };

  render() {
    return (
      <div className={this.props.className} id="horizontal-scroll-container">
        {this.getItems()}
      </div>
    );
  }
}

export default HorizontalScrollContainer;
