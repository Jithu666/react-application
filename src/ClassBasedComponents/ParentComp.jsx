import React, { Component } from "react";
import RegularComp from "./RegularComp";
import PureComp from "./PureComp";

class ParentComp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Jithu",
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        name: "Jithendra",
      });
    }, 2000);
  }

  render() {
    console.log("Parent Component Render");
    return (
      <div>
        Parent Component
        <RegularComp name={this.state.name} />
        <PureComp name={this.state.name} />
      </div>
    );
  }
}

export default ParentComp;
