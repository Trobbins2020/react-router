import React, { Component } from "react";
import Note from "./Note";

class NotePageMain extends Component {
  render() {
    const { id, name, modified, content } = this.props.note;
    return (
      <section>
        <Note id={id} name={name} modified={modified} />
        <div>
          {content.split(/\n \r|\n/).map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>
      </section>
    );
  }
}

NotePageMain.defaultProps = {
  note: {
    content: "",
  },
};
export default NotePageMain;
