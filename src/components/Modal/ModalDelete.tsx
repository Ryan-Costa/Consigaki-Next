"use client";

import { IconArrowRight } from "../../../public/icons";
import { Karla } from "next/font/google";

const karla = Karla({
  subsets: ["latin"],
  weight: ["400", "700"],
});

interface ModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  handleDelete: () => void;
}

export function ModalDelete({
  isOpen,
  onRequestClose,
  handleDelete,
}: ModalProps) {
  return (
    <div
      className={`${
        !isOpen && "hidden"
      } fixed left-0 top-0 flex min-h-screen w-full items-center justify-center bg-black bg-opacity-50`}
    >
      <div className="h-[250px] w-[560px] rounded-3xl bg-white px-[105px] py-[40px] pt-[20px] shadow-lg">
        <div
          className={`${karla.className} relative flex h-full w-full flex-col items-center`}
        >
          <div className="px-[22.5px]">
            <h1 className="text-3xl">Você tem certeza que deseja excluir?</h1>
          </div>
          <div className="mb-5 mt-5 flex h-[60px] w-[350px] items-center rounded-2xl bg-dark-blue">
            <button
              className="flex h-full w-[294px] items-center rounded-2xl pl-[23px] text-xl  font-bold   text-white"
              onClick={onRequestClose}
            >
              NÃO
            </button>
            <p className="flex h-full w-[56px] rotate-90 items-center justify-center">
              {IconArrowRight}
            </p>
          </div>
          <div>
            <button
              className="text-sm font-bold text-dark-blue"
              onClick={() => {
                handleDelete();
                onRequestClose();
              }}
            >
              Sim, excluir
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
