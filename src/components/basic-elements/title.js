import React from "react";

class Title extends React.Component {
  render() {
    return (
      <div className="w-full my-2 flex justify-center">
        <h2 className="section-title">{this.props.text}</h2>
      </div>
    );
  }
}

export default Title;
