import React, { Component } from "react";

class Button extends Component {
  state = {
    name: "",
    link: "",
  };
  render() {
    //jsx expression compiled by Bable
    return (
      <React.Fragment>
        <button>{this.state.name}</button>
      </React.Fragment>
    );
  }
}

export default Button;
