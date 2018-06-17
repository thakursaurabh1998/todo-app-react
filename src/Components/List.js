import React, { Component } from "react";
import Todo from "./Todo";

class List extends Component {
  onChangeEdit = (abc, note) => {
    this.props.edit(abc, note);
  }
  
  render() {
    const { changeEdit, onToggleAll, onCheckChange, notes, onDestroy, toggle } = this.props;
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
          {notes.map((note,index) => {
            return (
                <Todo
                  key={index}
                  note={note.note}
                  completed={note.completed}
                  editing={note.editing}
                  display={note.display}
                  onChangeEdit={(abc)=>{
                    this.onChangeEdit(abc,note);
                  }}
                  changeEdit={() => changeEdit(note)}
                  onCheckChange={() => onCheckChange(note)}
                  onDestroy={() => onDestroy(note)}
                />
            );
          })}
        </ul>
      </section>
    );
  }
}

export default List;
