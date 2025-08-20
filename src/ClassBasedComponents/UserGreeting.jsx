import React, { Component } from "react";

class UserGreeting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false,
    };
  }

  handleLogin = () => {
    this.setState((prevState) => ({
      isLoggedIn: !prevState.isLoggedIn,
    }));
  };

  render() {
    const { name } = this.props;

    return (
      <div>
        {this.state.isLoggedIn ? (
          <h2>Welcome {name}</h2>
        ) : (
          <h2>Welcome User</h2>
        )}
        <button onClick={this.handleLogin}>
          {this.state.isLoggedIn ? "Logout" : "Login"}
        </button>
      </div>
      // return (
      //   <div className="">
      //     <h1>Welcome User</h1>
      //   </div>
    );
  }
}

export default UserGreeting;
