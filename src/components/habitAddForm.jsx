import React, { Component } from "react";

class habitAddForm extends Component {
  state = {
    count: 0,
  };
  render() {
    return (
      <>
        <span>{this.state.count}</span>
        <button
          onClick={() => {
            this.setState({ count: this.state.count + 1 });
          }}
        >
          click!
        </button>
      </>
    );
  }
}

export default habitAddForm;
