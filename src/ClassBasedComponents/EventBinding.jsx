import React, { Component } from "react";

class EventBinding extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "Hello there",
    };
    // this.handleContentUpdate = this.handleContentUpdate.bind(this);
  }

  // Arrow function
  handleContentUpdate = () => {
    this.setState({
      message: "Good Bye User through Arrow Function",
    });
  }; // => Here the application works, because, this keywords takes the value from its global scope

  // handleContentUpdate() {
  //   this.setState({
  //     message: "Good Bye User",
  //   });
  //   console.log(this);
  // }

  render() {
    return (
      <div className="">
        <div className="content">{this.state.message}</div>
        {/* Different Approaches to Bind this keyword */}
        {/* <button onClick={this.handleContentUpdate}>Click Me</button>{" "} */}
        {/* => this breaks // => Here the application breaks, because, this keywords takes the value from its lexical scope, where this does not exist so the application breaks.*/}
        {/* 1. .bind(this) */}
        {/* <button onClick={this.handleContentUpdate.bind(this)}>Click Me</button> */}
        {/* 2. Arrow function call */}
        {/* <button onClick={() => this.handleContentUpdate()}>Click Me</button> */}
        {/* 3. Binding the this keyword in the constructor  instead of the render method*/}
        {/* <button onClick={this.handleContentUpdate}>Click Me</button> */}
        {/* 4. create the function as arrow function  */}
        <button onClick={this.handleContentUpdate}>Click Me</button>
      </div>
    );
  }
}

export default EventBinding;
