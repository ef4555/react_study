import React, { Component } from "react";

export default class MyComponent02 extends Component {
  render() {
    const { name, children } = this.props;
    return (
      <div>
        MyComponent02
        {name}
        {children}
      </div>
    );
  }
}
