import React, { Component } from "react";

class Todo extends Component {
  constructor(props) {
    super(props);
    this.focus = this.focus.bind(this);
  }

  focus() {
    this.textInput.focus();
    console.log(this.textInput);
  }

  render() {
    console.log(this.refs);
    const { note, completed, editing, onCheckChange, onDestroy } = this.props;
    return (
      <div>
        <div className="view">
          <input
            className="toggle"
            onChange={onCheckChange}
            type="checkbox"
            checked={completed}
          />
          {!editing && <label onClick={this.clickFocus}>{note}</label>}
          <button onClick={onDestroy} className="destroy" />
        </div>
        {editing && <input className={editing ? "editing" : "edit"} value={note} />}
      </div>
    );
  }
}

export default Todo;
