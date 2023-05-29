import { useState } from "react";
import { IconArrow } from "../../public/icons";

type DropdownProps = {
  type: "modal" | "table";
};

export const Dropdown: React.FC<DropdownProps> = ({ type }) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => setIsOpen((prev) => !prev);
  return (
    <div
      className={`flex ${
        type === "modal" ? "h-12" : "h-42"
      }  w-60 items-center justify-center ${
        type === "modal" ? "rounded-xl" : "rounded-20"
      } border border-black px-7`}
    >
      <button
        className="relative flex w-full items-center justify-between font-bold"
        onClick={handleOpen}
      >
        {type === "modal" ? "Selecione" : "Ativo"}
        <span
          className={`transition-transform duration-300 ${
            isOpen ? "rotate-40 transform " : "rotate-180"
          }`}
        >
          {IconArrow}
        </span>
        {isOpen && (
          <div className="absolute -right-8 top-9 box-border flex w-60 list-none flex-col rounded-b-2xl bg-white text-left text-black shadow-lg">
            <li className="box-border cursor-pointer px-5 py-4 font-bold hover:border-l-2 hover:border-blue-700">
              {type === "modal" ? "Cartão" : "Opção 1"}
            </li>
            <li className="box-border cursor-pointer px-5 py-4 font-bold hover:border-l-2 hover:border-blue-700">
              {type === "modal" ? "Empréstimo" : "Opção 2"}
            </li>
            <li className="box-border cursor-pointer px-5 py-4 font-bold hover:border-l-2 hover:border-blue-700">
              {type === "modal" ? "Previdência" : "Opção 3"}
            </li>
            <li className="box-border cursor-pointer px-5 py-4 font-bold hover:border-l-2 hover:border-blue-700">
              {type === "modal" ? "Seguro" : "Opção 4"}
            </li>
            <li className="h-4"></li>
          </div>
        )}
      </button>
    </div>
  );
};
