import React, { Component } from "react";

class Header extends Component {
  checkEnter = e => {
    const value = e.target.value;
    if (e.key === "Enter" && value!==""){
      e.target.value = "";
      return this.props.onCreate(value);
    }
  };

  render() {
    return (
      <header className="header">
        <h1>todos</h1>
        <input
          className="new-todo"
          placeholder="What needs to be done?"
          onKeyPress={this.checkEnter}
          autoFocus
        />
      </header>
    );
  }
}

export default Header;
