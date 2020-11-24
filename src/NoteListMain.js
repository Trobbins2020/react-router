import React, { Component } from "react";
import { Link } from "react-router-dom";
import Note from "./Note";

class NoteListMain extends Component {
  render() {
    return (
      <div>
        <ul>
          {this.props.notes.map((note) => (
            <li key={note.id}>
              <Note id={note.id} name={note.name} modified={note.modified} />
              <br />
            </li>
          ))}
        </ul>
        <Link to={`/add-note`} className="linkto">
          Add Note
        </Link>
      </div>
    );
  }
}

NoteListMain.defaultProps = {
  notes: [],
};

export default NoteListMain;
