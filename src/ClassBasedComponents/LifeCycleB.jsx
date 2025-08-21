import React, { Component } from "react";

class LifeCycleB extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Jithu",
    };
    console.log("LifeCycleB Constructor");
  }

  // Component Mounting LifeCycle
  static getDerivedStateFromProps(props, state) {
    console.log("LifeCycle B getDerivedStateFromProps");
    return null;
  }

  componentDidMount() {
    console.log("LifeCycleB Component Did Mount");
  }

  // Component Updating LifeCycle

  shouldComponentUpdate() {
    console.log("LifeCycleB shouldComponentUpdate");
    return true;
  }

  getSnapshotBeforeUpdate() {
    console.log("LifeCycleB getSnapshotBeforeUpdate");
    return null;
  }

  componentDidUpdate() {
    console.log("LifeCycle B Component Did Update");
  }

  render() {
    console.log("LifeCycleB Render");
    return <div>Life Cycle B</div>;
  }
}

export default LifeCycleB;
