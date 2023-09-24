import React from "react";

class PageSubtitle extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <h2 className="text-xl font-bold">{this.props.text}</h2>;
  }
}

export default PageSubtitle;
