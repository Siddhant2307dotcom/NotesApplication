import React from "react";
import Notes from "./Notes";
import AddNote from "./AddNote";
const NotesList = ({ notes, handleAddNote, handleDeleteNote }) => {
  return (
    <div className="notes-list">
      {notes.map((notes) => (
        <Notes
          id={notes.id}
          text={notes.text}
          date={notes.date}
          handleDeleteNote={handleDeleteNote}
        />
      ))}
      <AddNote handleAddNote={handleAddNote} />
      {/* <Notes />
      <Notes />
      <Notes />
      <Notes /> */}
    </div>
  );
};

export default NotesList;
