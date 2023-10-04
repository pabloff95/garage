import React from "react";

class PageTitle extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <h1 className="text-2xl font-bold">{this.props.text}</h1>;
  }
}

export default PageTitle;
