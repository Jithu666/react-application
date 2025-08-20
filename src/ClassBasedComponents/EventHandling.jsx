import React, { Component } from "react";

class EventHandling extends Component {
  handleButtonClick = () => {
    console.log("Button Clicked");
  };

  render() {
    return (
      <div>
        <button onClick={this.handleButtonClick}>Click Me</button>
      </div>
    );
  }
}

export default EventHandling;
