import React from "react";

class PageTitle extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <h1 className={`${this.props.className} text-3xl font-bold uppercase`}>
        {this.props.text}
      </h1>
    );
  }
}

export default PageTitle;
