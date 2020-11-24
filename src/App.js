import "./App.css";
import { Route, Link } from "react-router-dom";
import React, { Component } from "react";
import dummyStore from "./dummy-store";
import NoteListNav from "./NoteListNav";
import NotePageNav from "./NotePageNav";
import NotePageMain from "./NotePageMain";
import NoteListMain from "./NoteListMain";
import { findNote, findFolder } from "./helper";
class App extends Component {
  state = {
    notes: [],
    folders: [],
  };
  componentDidMount() {
    this.setState(dummyStore);
  }

  render() {
    return (
      <div>
        <header>
          <h1>
            <Link to="/">Noteful</Link>
          </h1>
          <hr />
        </header>
        <section id="main">
          <nav className="mx-3">
            {["/", "/folder/:id"].map((path) => (
              <Route
                exact
                key={path}
                path={path}
                render={(routeProps) => (
                  <NoteListNav
                    folders={this.state.folders}
                    notes={this.state.notes}
                    {...routeProps}
                  />
                )}
              />
            ))}
            <Route
              path="/note/:id"
              render={(routeProps) => {
                const { id } = routeProps.match.params;
                const note = findNote(this.state.notes, id) || {};
                const folder = findFolder(this.state.folders, note.folderId);
                return <NotePageNav folder={folder} {...routeProps} />;
              }}
            />
            <Route path="/add-folder" component={NotePageNav} />
            <Route path="/add-note" component={NotePageNav} />
          </nav>
          <main className="mx-3">
            {["/", "/folder/:id"].map((path) => (
              <Route
                exact
                key={path}
                path={path}
                render={(routeProps) => {
                  const { id } = routeProps.match.params;
                  const notesBasedFolderId = id
                    ? this.state.notes.filter((note) => note.folderId === id)
                    : this.state.notes;
                  return (
                    <NoteListMain {...routeProps} notes={notesBasedFolderId} />
                  );
                }}
              />
            ))}
            <Route
              path="/note/:id"
              render={(routeProps) => {
                const { id } = routeProps.match.params;
                const note = findNote(this.state.notes, id);
                return <NotePageMain {...routeProps} note={note} />;
              }}
            />
          </main>
        </section>
      </div>
    );
  }
}

export default App;
