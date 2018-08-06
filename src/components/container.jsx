import React, { Component } from "react";
import Ask from "./ask";
import Result from "./result";

class Container extends Component {
  constructor(props) {
    super(props);

    // Bind the this context to the handler function
    this.handler = this.handler.bind(this);

    // Set some state
    this.state = {
      asked: false
    };
  }

  // This method will be sent to the child component
  handler() {
    console.log(this.state.asked);
    this.setState({
      asked: !this.state.asked
    });
  }

  centerScreenStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    minHeight: "70vh"
  };

  render() {
    return (
      <div style={this.centerScreenStyle}>
        {this.state.asked ? (
          <Result action={this.handler} />
        ) : (
          <Ask action={this.handler} />
        )}
      </div>
    );
  }
}

export default Container;
