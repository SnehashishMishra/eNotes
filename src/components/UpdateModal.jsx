import React, { useContext, useState, useEffect, useRef } from "react";
import ModalContext from "../context/modal/modalContext";
import noteContext from "../context/notes/noteContext";

const UpdateModal = ({ showAlert }) => {
  const { isOpen, closeModal, noteToEdit } = useContext(ModalContext);
  const { editNote } = useContext(noteContext);

  const modalRef = useRef(null);

  const [note, setNote] = useState({
    etitle: "",
    edescription: "",
    etag: "",
  });

  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    if (noteToEdit) {
      setNote({
        etitle: noteToEdit.title,
        edescription: noteToEdit.description,
        etag: noteToEdit.tag,
      });

      // Animate modal on open
      setTimeout(() => setAnimate(true), 10);
    }
  }, [noteToEdit]);

  /** ✅ ESC key closes modal */
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") handleClose();
    };
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, []);

  const handleClose = () => {
    setAnimate(false); // play animation exit
    setTimeout(() => closeModal(), 200); // wait for animation to finish
  };

  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };

  const handleUpdate = async () => {
    await editNote(noteToEdit._id, note.etitle, note.edescription, note.etag);

    // showAlert caused early rerender & broke close timing
    setTimeout(() => showAlert("Updated the note", "success"), 10);

    handleClose(); // ✅ Now closes reliably
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black/50 flex justify-center items-center z-999"
      onClick={handleClose} // ✅ click outside closes modal
    >
      <div
        ref={modalRef}
        onClick={(e) => e.stopPropagation()} // ✅ clicking inside doesn't close
        className={`bg-white p-6 rounded-3xl shadow-xl w-[90vw] max-w-md transition-all duration-200
          ${
            animate ? "scale-100 opacity-100" : "scale-95 opacity-0"
          }  // ✅ animation
        `}
      >
        <h1 className="text-xl font-semibold text-gray-800 mb-4">Edit Note</h1>

        <form className="space-y-4">
          <input
            type="text"
            name="etitle"
            placeholder="Edit title"
            value={note.etitle}
            onChange={onChange}
            required
            className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-600 outline-none"
          />

          <input
            type="text"
            name="edescription"
            placeholder="Edit description"
            value={note.edescription}
            onChange={onChange}
            required
            className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-600 outline-none"
          />

          <input
            type="text"
            name="etag"
            placeholder="Tag"
            value={note.etag}
            onChange={onChange}
            className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-600 outline-none"
          />
        </form>

        <div className="flex justify-end gap-3 mt-6">
          <button
            className="px-4 py-2 rounded-lg bg-gray-300 hover:bg-gray-400 transition"
            onClick={handleClose}
          >
            Close
          </button>

          <button
            className="px-4 py-2 rounded-lg bg-gray-900 text-white hover:bg-gray-800 transition disabled:bg-gray-500"
            onClick={handleUpdate}
            disabled={note.etitle.length < 3 || note.edescription.length < 5}
          >
            Update Note
          </button>
        </div>
      </div>
    </div>
  );
};

export default UpdateModal;
