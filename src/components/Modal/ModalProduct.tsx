"use client";

import ReactModal from "react-modal";
import { IconPartners, IconUpload } from "../../../public/icons";
import { Roboto } from "@next/font/google";
import { Inter } from "@next/font/google";
import { Dropdown } from "../Dropdown";
import ImageUpload from "../ImageUpload";
import { useState } from "react";
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
});
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "700"],
});

interface ModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

const Modal = ({ isOpen, onRequestClose }: ModalProps) => {
  const handleFormSubmit = (event: React.FormEvent) => {
    event.preventDefault();
  };
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
          width: "800px",
          height: "650px",
          padding: "20px 50px 45px 50px",
          borderRadius: "20px",
          boxShadow: "4px 4px 4px 4px rgba(43, 49, 85, 0.6)",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          backgroundColor: "#EFF3F7",
        },
      }}
    >
      <div className={`${roboto.className} flex h-full w-full flex-col`}>
        <div className="mt-10 flex flex-col items-start gap-2 text-left">
          <h2 className="flex items-center gap-2 text-2xl font-bold">
            Adicionar Produto {IconPartners}
          </h2>

          <p className={`${inter.className}`}>Preencha todos os campos</p>
        </div>
        <div className="flex h-full flex-col items-start justify-start ">
          <h2 className="mb-4 mt-7 font-bold">Produtos</h2>
          <form onSubmit={handleFormSubmit} className="w-full">
            <Dropdown type="modal" />
            <h2 className="mt-5 text-2xl font-bold">
              Insira a imagem do seu produto
            </h2>
            <p className={`${inter.className}`}>Imagem menores que 300kb</p>

            <ImageUpload />
            <div className="flex w-full items-center justify-center">
              <button
                type="submit"
                className="mt-10 rounded-sm bg-goldenrod px-56 py-4 font-bold shadow-lg"
                onClick={onRequestClose}
              >
                Salvar
              </button>
            </div>
          </form>
        </div>
      </div>
    </ReactModal>
  );
};

export default Modal;
