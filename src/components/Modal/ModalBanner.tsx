"use client";

import Image from "next/image";
import ReactModal from "react-modal";
import { IconPartners } from "../../../public/icons";
import ToggleSwitch from "../ToggleSwitch";
import { Roboto } from "@next/font/google";
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
});

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
        <div className="mt-10 flex items-center gap-2">
          <h2 className="text-2xl font-bold">Detalhes da imagem </h2>
          {IconPartners}
          <span
            onClick={onRequestClose}
            className="absolute right-10 top-4 float-right cursor-pointer text-3xl font-bold text-red-600"
          >
            &times;
          </span>
        </div>
        <div className="flex h-full flex-col items-center justify-center ">
          <div className="flex items-center justify-center ">
            <Image
              src="/images/Imagem-modal.png"
              alt="Imagem Modal"
              width={660}
              height={310}
            />
          </div>
        </div>
        <div className="flex w-full items-end justify-end  pr-8">
          <ToggleSwitch />
        </div>
      </div>
    </ReactModal>
  );
};

export default Modal;
