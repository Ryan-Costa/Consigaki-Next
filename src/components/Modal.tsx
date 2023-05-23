"use client";

import ReactModal from "react-modal";

interface ModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

const Modal = ({ isOpen, onRequestClose }: ModalProps) => {
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={{
        overlay: {
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        },
        content: {
          height: "200px",
          width: "400px",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        },
      }}
    >
      {/* Conteúdo do modal */}
      <h2>Conteúdo do Modal</h2>
    </ReactModal>
  );
};

export default Modal;
