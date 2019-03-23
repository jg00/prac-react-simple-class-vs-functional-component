import React, { Component } from "react";
import "./App.css";

import UserOutput from "./User/UserOutput";
import UserInput from "./User/UserInput";

import "./User/UserOutput.css";

class App extends Component {
  state = {
    username: "Data"
  };

  updateUsernameHandler = event => {
    this.setState({
      username: event.target.value
    });
  };

  render() {
    return (
      <div className="App">
        <UserOutput username="Henri" />
        <UserOutput username={this.state.username} />
        <UserInput
          username={this.state.username}
          updateUsername={this.updateUsernameHandler}
        />
      </div>
    );
  }
}

export default App;
