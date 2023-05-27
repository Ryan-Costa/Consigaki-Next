import { useState } from "react";
import { IconArrow } from "../../../public/icons";

export function DropdownTable() {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => setIsOpen((prev) => !prev);
  return (
    <div className="flex w-60 items-center justify-center rounded-20 border border-black px-7">
      <button
        className="relative flex w-full items-center justify-between font-bold"
        onClick={handleOpen}
      >
        Ativo
        <span
          className={`transition-transform duration-300 ${
            isOpen ? "rotate-40 transform " : "rotate-180"
          }`}
        >
          {IconArrow}
        </span>
        {isOpen && (
          <div className="absolute -right-8 top-10 box-border flex w-60 list-none flex-col rounded-b-2xl bg-white text-left text-black shadow-lg">
            <li className="box-border cursor-pointer px-5 py-4 font-bold hover:border-l-2 hover:border-blue-700">
              <a href="/"></a>
              Opção 1
            </li>
            <li className="box-border cursor-pointer px-5 py-4 font-bold hover:border-l-2 hover:border-blue-700">
              <a href="/"></a>
              Opção 2
            </li>
            <li className="box-border cursor-pointer px-5 py-4 font-bold hover:border-l-2 hover:border-blue-700">
              Opção 3
            </li>
            <li className="h-4"></li>
          </div>
        )}
      </button>
    </div>
  );
}
