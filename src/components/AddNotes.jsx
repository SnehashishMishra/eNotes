import React, { useContext, useState } from "react";
import noteContext from "../context/notes/noteContext";

const AddNote = ({ showAlert }) => {
  const { addNote } = useContext(noteContext);

  const [note, setNote] = useState({ title: "", description: "", tag: "" });

  const handleClick = (e) => {
    e.preventDefault();
    addNote(note.title, note.description, note.tag);
    setNote({ title: "", description: "", tag: "" });
    showAlert("Added a new note", "success");
  };

  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div className="container mx-auto my-6 border border-gray-700 rounded-xl p-8 max-w-2xl bg-white shadow">
        <h2 className="text-gray-900 font-semibold text-2xl">Add a note</h2>

        <form className="mt-4">
          {/* TITLE */}
          <div className="mb-4">
            <label
              htmlFor="title"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Title
            </label>
            <div className="flex items-center">
              <input
                type="text"
                name="title"
                id="title"
                placeholder="Title of the note"
                value={note.title}
                onChange={onChange}
                required
                className="flex-1 border border-gray-300 focus:border-blue-600 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              />

              {/* Hidden AI button kept as you had */}
              <button className="hidden AiButton spin ml-2">
                <img className="w-6 h-6" src="Logo/AiLogo.png" alt="NotI" />
              </button>
            </div>
          </div>

          {/* DESCRIPTION */}
          <div className="mb-4">
            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Description
            </label>
            <input
              type="text"
              name="description"
              id="description"
              placeholder="Description of the note"
              value={note.description}
              onChange={onChange}
              required
              className="w-full border border-gray-300 rounded-lg p-2 focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />

            <p
              id="desciptionHelpBlock"
              className="hidden text-sm text-gray-500 mt-1"
            >
              Your description must be 8 characters long, contain letters and
              numbers… (just kidding 😉)
            </p>
          </div>

          {/* TAG */}
          <div className="mb-6">
            <label
              htmlFor="tag"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Tag
            </label>
            <input
              type="text"
              name="tag"
              id="tag"
              placeholder="Tag of the note"
              value={note.tag}
              onChange={onChange}
              className="w-full border border-gray-300 rounded-lg p-2 focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />
          </div>

          {/* BUTTON */}
          <button
            type="submit"
            onClick={handleClick}
            disabled={note.title.length < 3 || note.description.length < 5}
            className="px-5 py-2 rounded-lg bg-gray-900 text-white text-sm hover:bg-gray-800 transition disabled:bg-gray-500 disabled:cursor-not-allowed"
          >
            Add Note
          </button>
        </form>
      </div>
    </>
  );
};

export default AddNote;
