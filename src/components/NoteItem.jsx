import React, { useContext } from "react";
import { Trash2, SquarePen } from "lucide-react";
import noteContext from "../context/notes/noteContext";

const NoteItem = ({ note, updateNote, showAlert }) => {
  const { title, description } = note;
  const { deleteNote } = useContext(noteContext);

  return (
    <div className="w-3xs md:w-2xs md:m-2 bg-white border border-gray-700 rounded-xl shadow p-4">
      <h5 className="font-semibold text-lg text-gray-900">{title}</h5>
      <p className="text-gray-700 mt-2">{description}</p>

      {/* Action Icons */}
      <div className="flex justify-end gap-3 mt-4">
        <button
          className="p-1 hover:bg-gray-100 rounded-lg transition"
          onClick={() => {
            deleteNote(note._id);
            showAlert("Deleted the note", "warning");
          }}
        >
          <Trash2 size={20} className="text-gray-900" />
        </button>

        <button
          className="p-1 hover:bg-gray-100 rounded-lg transition"
          onClick={() => (updateNote(note), console.log(updateNote))}
        >
          <SquarePen size={20} className="text-gray-900" />
        </button>
      </div>
    </div>
  );
};

export default NoteItem;
