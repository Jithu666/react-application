import React, { Component } from "react";

class ClassCounter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  handleIncreaseCounter = () => {
    this.setState(
      {
        count: this.state.count + 1,
      },
      () => {
        console.log("Count Value: ", this.state.count);
      }
    );

    // this.setState(
    //   (prevState) => ({
    //     count: prevState.count + 1,
    //   }),
    //   console.log("Count :", this.state.count)
    // );
  };

  handleReset = () => {
    this.setState(
      {
        count: 0,
      },
      () => {
        console.log("Count Value: ", this.state.count);
      }
    );
  };

  handleMultipleIncrease = () => {
    this.handleIncreaseCounter();
    this.handleIncreaseCounter();
    this.handleIncreaseCounter();
    this.handleIncreaseCounter();
    this.handleIncreaseCounter();
    this.handleIncreaseCounter();
  };

  render() {
    return (
      <div className="counterContainer">
        <p>count - {this.state.count}</p>
        <button onClick={() => this.handleIncreaseCounter()}>
          Increase Counter
        </button>

        <button onClick={() => this.handleMultipleIncrease()}>
          Increase X
        </button>

        <button onClick={() => this.handleReset()}>Reset Counter</button>
      </div>
    );
  }
}

export default ClassCounter;
