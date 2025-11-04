import React, { useContext, useEffect } from "react";
import noteContext from "../context/notes/noteContext";
import NoteItem from "./NoteItem";
import AddNote from "./AddNotes";
import modalContext from "../context/modal/modalContext";

const Notes = ({ showAlert }) => {
  const { notes, getNotes } = useContext(noteContext);
  const { openModal } = useContext(modalContext);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      getNotes();
    } else {
      window.location.replace("/");
    }
  }, []);

  return (
    <>
      <AddNote showAlert={showAlert} />

      <h2 className="mx-2 font-semibold text-xl mt-6">Your notes</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 my-4 p-2">
        {notes.length === 0 && (
          <p className="text-gray-500 col-span-full text-center">
            No notes to display
          </p>
        )}

        {notes.map((note) => (
          <NoteItem
            key={note._id}
            note={note}
            updateNote={openModal} // <--- now modal from context
            showAlert={showAlert}
          />
        ))}
      </div>
    </>
  );
};

export default Notes;
