import React, { Component } from "react";
import { Link } from 'react-router-dom';

class Footer extends Component {
  render() {
    const { length, onClearCompleted } = this.props;
    return (
      <footer className="footer">
        {/* <!-- This should be `0 items left` by default --> */}
        <span className="todo-count">
          <strong>{length}</strong> item left
        </span>
        {/* <!-- Remove this if you don't implement routing --> */}
        <ul className="filters">
          <li>
            <Link className={window.location.pathname==="/"?"selected":""} to="/">
              All
            </Link>
          </li>
          <li>
            <Link className={window.location.pathname==="/active"?"selected":""} to="/active">Active</Link>
          </li>
          <li>
            <Link className={window.location.pathname==="/completed"?"selected":""} to="/completed">Completed</Link>
          </li>
        </ul>
        {/* <!-- Hidden if no completed items are left ↓ --> */}
        <button onClick={onClearCompleted} className="clear-completed">Clear completed</button>
      </footer>
    );
  }
}

export default Footer;
