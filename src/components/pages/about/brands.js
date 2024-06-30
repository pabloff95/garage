import React from "react";

class Brands extends React.Component {
  getImageNames = () => {
    // This function retrieves the image names from the image files (ex.: ./brand.png => brand)
    const images = require.context("/public/images/brands");

    return images
      .keys()
      .map(
        (imageName) => imageName.substring(2, imageName.length).split(".")[0]
      );
  };

  getBrandImgObject = (brandName) => {
    const formattedName = brandName
      .split("_")
      .map(
        (nameFragment) =>
          nameFragment[0].toUpperCase() +
          nameFragment.substring(1, nameFragment.length)
      )
      .join(" ");

    return {
      path: `garage/images/brands/${brandName}.png`,
      alt: `Logo de ${formattedName}`,
    };
  };

  getPictures = () => {
    const brandNames = this.getImageNames();

    return brandNames.map((brand, index) => {
      const { path, alt } = this.getBrandImgObject(brand);

      return (
        <img
          className="animate-on-scroll min-h-[2.5rem] max-h-[8vh] w-auto picture-shadow-light"
          src={path}
          alt={alt}
          key={`brand-${index}`}
        />
      );
    });
  };

  render() {
    return (
      <div className="my-6 w-full flex flex-row flex-wrap gap-10 justify-evenly">
        {this.getPictures()}
      </div>
    );
  }
}

export default Brands;
