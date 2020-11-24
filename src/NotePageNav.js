import React, { Component } from "react";

class NotePageNav extends Component {
  render() {
    const { history, folder } = this.props;
    return (
      <div id="notenav">
        <button role="link" onClick={() => history.goBack()}>
          Go Back
        </button>
        {folder && <h3>{folder.name}</h3>}
      </div>
    );
  }
}

export default NotePageNav;
