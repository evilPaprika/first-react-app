import React, { Component } from "react";

class Ask extends Component {
  render() {
    return (
      <div>
        <h1 style={{ padding: 40, fontSize: 50 }}>Узнай кто ты!</h1>
        <button onClick={this.props.action} className="btn btn-primary">
          Узнать
        </button>
      </div>
    );
  }
}

export default Ask;
