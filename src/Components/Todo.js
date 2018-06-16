import React, { Component } from "react";

class Todo extends Component {
  render() {
    const { note, completed, onCheckChange, onDestroy } = this.props;
    return (
      <li key={note} className={completed ? "completed" : ""}>
        <div className="view">
          <input
            className="toggle"
            onChange={onCheckChange}
            type="checkbox"
            checked={completed}
          />
          <label onClick={this.focus}>{note}</label>
          <button onClick={onDestroy} className="destroy" />
        </div>
        <input className="edit" value={note} />
      </li>
    );
  }
}

export default Todo;
