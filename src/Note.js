import React, { Component } from "react";
import { Link } from "react-router-dom";
import { format } from "date-fns";

class Note extends Component {
  render() {
    const { id, name, modified } = this.props;
    return (
      <div className="Box">
        <h2>
          <Link to={`/note/${id}`}>{name}</Link>
        </h2>

        <div className="boxDetails">
          {/* Date Modified on <span>{format(modified, "Do MMM YYYY")}</span> */}
          <span> Date Modified on {modified}</span>
          <button type="button">Delete Note</button>
        </div>
      </div>
    );
  }
}

export default Note;
