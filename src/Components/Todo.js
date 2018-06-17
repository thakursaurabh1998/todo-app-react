import React, { Component } from "react";

class Todo extends Component {
  state = {
    temp: ""
  };

  componentDidMount() {
    this.setState({ temp: this.props.note });
  }

  changeTemp = e => {
    this.setState({ temp: e.target.value });
  };

  onChangeEdit = () => {
    this.props.onChangeEdit(this.state.temp);
    this.props.changeEdit();
  }

  render() {
    const {
      note,
      completed,
      changeEdit,
      editing,
      onCheckChange,
      onDestroy
    } = this.props;
    return (
      <li
        key={note}
        className={
          completed
            ? editing
              ? "completed, editing"
              : "completed"
            : editing
              ? "editing"
              : ""
        }
      >
        <div className="view">
          <input
            className="toggle"
            onChange={onCheckChange}
            type="checkbox"
            checked={completed}
          />
          <label onDoubleClick={changeEdit}>{note}</label>
          <button onClick={onDestroy} className="destroy" />
        </div>
        <input
          onBlur={this.onChangeEdit}
          onChange={this.changeTemp}
          className="edit"
          value={this.state.temp}
        />
      </li>
    );
  }
}

export default Todo;
