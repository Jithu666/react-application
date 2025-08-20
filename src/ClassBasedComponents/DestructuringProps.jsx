// Destructuring Props in Class Based Components

import React, { Component } from "react";

class DestructuringProps extends Component {
  render() {
    const { name, char } = this.props;
    return (
      <h1>
        Name: {name}, HeroName: {char}
      </h1>
    );
  }
}

DestructuringProps.defaultProps = {
  name: "Gal Gadot",
  char: "Wonder Woman",
};

export default DestructuringProps;
