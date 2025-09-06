// Class based Greet Component

import React, { Component } from "react";

class GreetClass extends Component {
  constructor() {
    super();
    this.state = {
      message: "Hello Visitor",
    };
  }

  handleNameChange = () => {
    this.setState({
      message: "Thank you Visitor",
    });
  };

  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>;
        <button onClick={() => this.handleNameChange()}>Click Me</button>
      </div>
    );
  }
}

export default GreetClass;
