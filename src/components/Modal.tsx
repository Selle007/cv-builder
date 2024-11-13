import React, { ReactNode } from "react";
import { createPortal } from "react-dom";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return createPortal(
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center  backdrop-blur-md transition-opacity duration-500 ease-out opacity-0 animate-fade-in">
      <div className="bg-white p-6 rounded-lg shadow-lg relative w-fit md:w-11/12 transition-transform duration-500 ease-out transform scale-95 animate-modal-zoom-in">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-4xl text-gray-500 hover:text-gray-700"
        >
          &times;
        </button>
        <div>{children}</div>
      </div>
    </div>,
    document.body
  );
};

export default Modal;
