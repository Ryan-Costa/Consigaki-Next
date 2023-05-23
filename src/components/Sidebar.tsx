"use client";

import Link from "next/link";
import { useState } from "react";
import {
  IconArrow,
  IconCalender,
  IconHome,
  IconInsumo,
  IconStore,
  IconStoreAlt,
  IconWallet,
} from "../../public/icons";

const Sidebar = () => {
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);

  const toggleDropdown1 = () => {
    setIsOpen1(!isOpen1);
  };

  const toggleDropdown2 = () => {
    setIsOpen2(!isOpen2);
  };

  return (
    <div className="sidebar mt-6 w-60 bg-aside">
      <ul className="menu">
        <li>
          <div className="dropdown">
            <button
              className="dropdown-toggle flex w-full items-center justify-between bg-aside px-4 py-2 text-left font-semibold uppercase text-dark-blue"
              onClick={toggleDropdown1}
            >
              Serviços
              <span
                className={`transition-transform duration-300 ${
                  !isOpen1 ? "rotate-180 transform" : ""
                }`}
              >
                {IconArrow}
              </span>
            </button>
            {isOpen1 && (
              <ul className="dropdown-menu bg-aside p-2">
                <li>
                  <Link
                    href="/home"
                    className="flex items-center gap-2 px-2 py-1 text-xl font-normal text-word-app hover:bg-gray-100"
                  >
                    {IconHome} Dashboard
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="flex items-center gap-2  px-2 py-1 text-xl font-normal text-word-app hover:bg-gray-100"
                  >
                    {IconStore} Esteira
                  </Link>
                </li>
                <li>
                  <Link
                    href="/providers"
                    className="flex items-center gap-2  px-2 py-1 text-xl font-normal text-word-app hover:bg-gray-100"
                  >
                    {IconCalender} Consignatárias
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="flex items-center gap-2  px-2 py-1 text-xl font-normal text-word-app hover:bg-gray-100"
                  >
                    {IconStoreAlt} Convênios
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="flex items-center gap-2  px-2 py-1 text-xl font-normal text-word-app hover:bg-gray-100"
                  >
                    {IconWallet} Usuários
                  </Link>
                </li>
              </ul>
            )}
          </div>
        </li>
        <li>
          <div className="dropdown">
            <button
              className="dropdown-toggle flex w-full items-center justify-between bg-aside px-4 py-2 text-left font-semibold uppercase text-dark-blue"
              onClick={toggleDropdown2}
            >
              Relatórios
              <span
                className={`transition-transform duration-300 ${
                  !isOpen2 ? "rotate-180 transform" : ""
                }`}
              >
                {IconArrow}
              </span>
            </button>
            {isOpen2 && (
              <ul className="dropdown-menu bg-aside p-2">
                <li>
                  <Link
                    href="#"
                    className="flex items-center gap-2  px-2 py-1 text-xl font-normal text-word-app hover:bg-gray-100"
                  >
                    {IconInsumo} Relatório-01
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="flex items-center gap-2 px-2 py-1 text-xl font-normal text-word-app hover:bg-gray-100"
                  >
                    {IconInsumo} Relatório-02
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="flex items-center gap-2  px-2 py-1 text-xl font-normal text-word-app hover:bg-gray-100"
                  >
                    {IconInsumo} Relatório-03
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="flex items-center gap-2  px-2 py-1 text-xl font-normal text-word-app hover:bg-gray-100"
                  >
                    {IconInsumo} Relatório-04
                  </Link>
                </li>
              </ul>
            )}
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
