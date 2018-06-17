import React, { Component } from "react";
import "./App.css";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import List from "./Components/List";
import { Route } from "react-router-dom";

class App extends Component {
  state = {
    notes: [],
    toggle: true
  };

  componentDidMount() {
    if (localStorage && localStorage.getItem("notes"))
      this.setState({ notes: JSON.parse(localStorage.getItem("notes")) });
  }

  componentDidUpdate() {
    localStorage.setItem("notes", JSON.stringify(this.state.notes));
  }

  checkChange = event => {
    this.setState(prevState => {
      let notes = prevState.notes;
      let index = notes.indexOf(event);
      notes[index].completed = !notes[index].completed;
      return { notes };
    });
  };

  destroy = event => {
    this.setState(prevState => {
      let notes = prevState.notes;
      notes.splice(notes.indexOf(event), 1);
      return { notes };
    });
  };

  create = note => {
    this.setState(prevState => {
      let notes = prevState.notes;
      notes = [
        {
          note,
          completed: false,
          editing: false,
          display: true
        },
        ...notes
      ];
      return { notes };
    });
  };

  clearCompleted = () => {
    this.setState(prevState => {
      let notes = prevState.notes;
      notes = notes.filter(note => note.completed === false);
      return { notes };
    });
    this.setState({ toggle: true });
  };

  completeAll = () => {
    this.setState(prevState => {
      let notes = prevState.notes;
      notes = notes.map(note => {
        note.completed = this.state.toggle;
        return note;
      });
      return { notes };
    });
  };

  toggleAll = () => {
    this.setState(prevState => {
      return { toggle: !prevState.toggle };
    });
    this.completeAll();
  };

  changeEdit = old => {
    this.setState(prevState => {
      let notes = prevState.notes;
      notes[notes.indexOf(old)].editing = !notes[notes.indexOf(old)].editing;
      return { notes };
    });
  };

  edit = (abc, note) => {
    this.setState(prevState => {
      let notes = prevState.notes;
      notes[notes.indexOf(note)].note = abc;
      return { notes };
    });
  }

  render() {
    return (
      <div>
        <section className="todoapp">
          <Header onCreate={this.create} />
          {/* <!-- This section should be hidden by default and shown when there are todos --> */}
          <Route
            exact
            path="/"
            render={() => (
              <List
                notes={this.state.notes}
                onDestroy={this.destroy}
                onCheckChange={this.checkChange}
                onToggleAll={this.toggleAll}
                toggle={this.state.toggle}
                edit={this.edit}
                changeEdit={this.changeEdit}
              />
            )}
          />
          <Route
            exact
            path="/active"
            render={() => (
              <List
                notes={this.state.notes.filter(
                  note => note.completed === false
                )}
                onDestroy={this.destroy}
                onCheckChange={this.checkChange}
                onToggleAll={this.toggleAll}
                toggle={this.state.toggle}
                changeEdit={this.changeEdit}
                edit={this.edit}
              />
            )}
          />
          <Route
            exact
            path="/completed"
            render={() => (
              <List
                notes={this.state.notes.filter(note => note.completed === true)}
                onDestroy={this.destroy}
                onCheckChange={this.checkChange}
                onToggleAll={this.toggleAll}
                toggle={this.state.toggle}
                edit={this.edit}
                changeEdit={this.changeEdit}
              />
            )}
          />

          {/* <!-- This footer should hidden by default and shown when there are todos --> */}
          {this.state.notes.length !== 0 && (
            <Footer
              length={this.state.notes.reduce((count, note) => {
                if (!note.completed) return count + 1;
                else return count;
              }, 0)}
              onClearCompleted={this.clearCompleted}
            />
          )}
        </section>

        <footer className="info">
          <p>Double-click to edit a todo</p>
          <p>
            Created by{" "}
            <a href="https://github.com/thakursaurabh1998" target="blank">
              Saurabh Thakur
            </a>
          </p>
          <p>
            Part of{" "}
            <a href="http://todomvc.com" target="blank">
              TodoMVC
            </a>
          </p>
        </footer>
      </div>
    );
  }
}

export default App;
