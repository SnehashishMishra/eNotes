import React, { useState } from "react";
import modalContext from "./modalContext";

const ModalState = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [noteToEdit, setNoteToEdit] = useState(null);

  const openModal = (note) => {
    setNoteToEdit(note);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setNoteToEdit(null);
  };

  return (
    <modalContext.Provider
      value={{ isOpen, openModal, closeModal, noteToEdit }}
    >
      {children}
    </modalContext.Provider>
  );
};

export default ModalState;
