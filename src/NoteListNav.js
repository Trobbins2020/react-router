import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";

class NoteListNav extends Component {
  render() {
    const { folders, notes } = this.props;
    return (
      <div>
        <ul>
          {folders.map((folder) => (
            <NavLink to={`/folder/${folder.id}`} key={folder.id}>
              <li className="linkto">
                <strong>
                  {notes.filter((note) => note.folderId === folder.id).length}
                </strong>{" "}
                {folder.name}
              </li>
            </NavLink>
          ))}
        </ul>
        <br />
        <Link to={`/add-folder`} className="linkto">
          Add Folder
        </Link>
      </div>
    );
  }
}

NoteListNav.defaultProps = {
  folders: [],
};
export default NoteListNav;
