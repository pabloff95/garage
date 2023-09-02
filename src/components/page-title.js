import React from "react";

class PageTitle extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="w-full p-3">
        <p className="ml-5 text-2xl font-bold">{this.props.text}</p>
      </div>
    );
  }
}

export default PageTitle;
