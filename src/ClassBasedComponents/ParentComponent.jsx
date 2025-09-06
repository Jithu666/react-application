import React, { Component } from "react";
import ChildComponent from "./ChildComponent";

class ParentComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      parentName: "ParentComponent",
    };
    this.greetParent = this.greetParent.bind(this);
  }

  greetParent = (ChildComponent) => {
    console.log(`Hello ${this.state.parentName} from  ${ChildComponent}`);
  };

  render() {
    return (
      <div>
        <ChildComponent greetHandler={this.greetParent} />
      </div>
    );
  }
}

export default ParentComponent;
