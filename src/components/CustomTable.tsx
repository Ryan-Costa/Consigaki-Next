"use client";

import Link from "next/link";
import { useState } from "react";
import { IconArrow, IconEdit } from "../../public/icons";
import EditScreen from "./EditScreen";
import Modal from "./Modal";

interface CustomModalProps {
  searchTerm: string;
  handleEdit: (item: ItemProps) => void;
}

interface ItemProps {
  codigo: string;
  razaoSocial: string;
  cnpj: string;
  cadastro: string;
}

export default function CustomTable({
  searchTerm,
  handleEdit,
}: CustomModalProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const tableData = [
    {
      codigo: "0001",
      razaoSocial: "Ryan",
      cnpj: "11.000.000/0001-00",
      cadastro: "01/01/2023",
    },
    {
      codigo: "0002",
      razaoSocial: "Lucas",
      cnpj: "11.000.000/0001-00",
      cadastro: "02/01/2023",
    },
    {
      codigo: "0003",
      razaoSocial: "Junior",
      cnpj: "11.000.000/0001-00",
      cadastro: "02/01/2023",
    },
    {
      codigo: "0004",
      razaoSocial: "Rafael",
      cnpj: "11.000.000/0001-00",
      cadastro: "02/01/2023",
    },
    {
      codigo: "0005",
      razaoSocial: "Empresa E",
      cnpj: "11.000.000/0001-00",
      cadastro: "02/01/2023",
    },
    {
      codigo: "0006",
      razaoSocial: "Empresa F",
      cnpj: "11.000.000/0001-00",
      cadastro: "02/01/2023",
    },
    {
      codigo: "0007",
      razaoSocial: "Empresa G",
      cnpj: "11.000.000/0001-00",
      cadastro: "02/01/2023",
    },
    {
      codigo: "0008",
      razaoSocial: "Empresa H",
      cnpj: "11.000.000/0001-00",
      cadastro: "02/01/2023",
    },
    {
      codigo: "0009",
      razaoSocial: "Empresa I",
      cnpj: "11.000.000/0001-00",
      cadastro: "02/01/2023",
    },
    {
      codigo: "0010",
      razaoSocial: "Empresa J",
      cnpj: "11.000.000/0001-00",
      cadastro: "02/01/2023",
    },
  ];

  const filteredData = tableData.filter((item) =>
    item.razaoSocial.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <table className="mt-8 w-full text-left">
        <thead>
          <tr>
            <th className="p-4 text-left">Código</th>
            <th className="p-4 text-left">Razão Social</th>
            <th className="p-4 text-left">CNPJ</th>
            <th className="p-4 text-left">Cadastro</th>
            <th className="p-4 text-left">Editar</th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map((item, index) => (
            <tr key={index} className="border-y">
              <td className="p-4 text-left">{item.codigo}</td>
              <td className="p-4 text-left">{item.razaoSocial}</td>
              <td className="p-4 text-left">{item.cnpj}</td>
              <td className="p-4 text-left">{item.cadastro}</td>
              <td className="p-4 text-left">
                <a onClick={() => handleEdit(item)}>{IconEdit}</a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="mt-8 flex gap-2">
        <button
          className="flex h-8 w-8 -rotate-90 cursor-pointer items-center justify-center rounded-sm bg-goldenrod"
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          {IconArrow}
        </button>
        {Array(Math.ceil(filteredData.length / itemsPerPage))
          .fill(0)
          .map((_, index) => (
            <div
              key={index}
              className={`flex h-8 w-8 cursor-pointer items-center justify-center rounded-sm border border-black ${
                index + 1 === currentPage ? "bg-deg1 text-white" : ""
              }`}
              onClick={() => handlePageChange(index + 1)}
            >
              {index + 1}
            </div>
          ))}
        <button
          className="flex h-8 w-8 rotate-90 items-center justify-center rounded-sm bg-goldenrod"
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={
            currentPage === Math.ceil(filteredData.length / itemsPerPage)
          }
        >
          {IconArrow}
        </button>
      </div>
      <Modal isOpen={isModalOpen} onRequestClose={handleCloseModal} />
    </div>
  );
}
