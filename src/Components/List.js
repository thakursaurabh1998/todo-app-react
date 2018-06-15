import React, { Component } from "react";
import Todo from "./Todo";

class List extends Component {
  render() {
    const { onToggleAll, onCheckChange, notes, onDestroy, toggle } = this.props;
    return (
      <section className="main">
        {notes.length !== 0 && (
          <input
            onChange={onToggleAll}
            value={toggle}
            id="toggle-all"
            className="toggle-all"
            type="checkbox"
          />
        )}
        {notes.length !== 0 && (
          <label htmlFor="toggle-all">Mark all as complete</label>
        )}
        <ul className="todo-list">
          {/* <!-- These are here just to show the structure of the list items -->
					<!-- List items should get the className `editing` when editing and `completed` when marked as completed --> */}
          {notes.map(note => {
            return (
              <li key={note.note} className={note.completed ? "completed" : ""}>
                <Todo
                  note={note.note}
                  completed={note.completed}
                  editing={note.editing}
                  display={note.display}
                  onCheckChange={() => onCheckChange(note)}
                  onDestroy={() => onDestroy(note)}
                />
              </li>
            );
          })}
        </ul>
      </section>
    );
  }
}

export default List;
