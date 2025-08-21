import React, { Component } from "react";
import LifeCycleB from "./LifeCycleB";

class LifeCycleA extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Jithu",
    };
    console.log("LifeCycle A Constructor");
  }

  stateChange = () => {
    this.setState({
      name: "Jithu",
    });
  };

  // Component Mounting Lifecycle
  static getDerivedStateFromProps(props, state) {
    console.log("Life Cycle A getDerivedStateFromProps");
    return null;
  }

  componentDidMount() {
    console.log("LifeCycle A Component did Mount");
  }

  // Component Updating LifeCycle
  shouldComponentUpdate() {
    console.log("LifeCycleA shouldComponentUpdate");
    return true;
  }

  getSnapshotBeforeUpdate() {
    console.log("LifeCycleA getSnapshotBeforeUpdate");
    return null;
  }

  componentDidUpdate() {
    console.log("LifeCycle A componentDidUpdate");
  }

  render() {
    console.log("LifeCycle A Render");
    return (
      <div className="">
        LifeCycleA
        {/* <h1>Life cycle</h1> */}
        <button onClick={this.stateChange}>Change State</button>
        <LifeCycleB />
      </div>
    );
  }
}

export default LifeCycleA;
