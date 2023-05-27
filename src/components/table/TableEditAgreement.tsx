"use client";
import { useState } from "react";
import { IconClose } from "../../../public/icons";
import Modal from "../Modal";

export function TableEditAgreement() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [agreementsData, setAgreementsData] = useState([
    {
      nome: "Empréstimo",
      banner: "http://aws.s3.imagem.com/teste",
      ativo: "Sim",
    },
    {
      nome: "Empréstimo",
      banner: "http://aws.s3.imagem.com/teste",
      ativo: "Não",
    },
  ]);

  const handleDelete = (index: any) => {
    const updateData = [...agreementsData];
    updateData.splice(index, 1);
    setAgreementsData(updateData);
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <table className="mt-4 w-full text-left">
        <thead>
          <tr>
            <th className="p-4 text-left">Nome Produto</th>
            <th className="p-4 text-left">Banner</th>
            <th className="p-4 text-left">Ativo</th>
            <th className="p-4 text-left">Excluir</th>
          </tr>
        </thead>
        <tbody>
          {agreementsData.map((item, index) => (
            <tr className="border-y">
              <td className="w-1/6 p-4 text-left">{item.nome}</td>
              <td className="w-3/6 p-4 text-left">
                <button
                  onClick={handleOpenModal}
                  className="font-semibold underline"
                >
                  {item.banner}
                </button>
              </td>
              <td className="w-1/6 p-4 text-left">{item.ativo}</td>
              <td className="flex w-2/5 justify-center p-4 text-left">
                <a
                  onClick={() => handleDelete(index)}
                  className="cursor-pointer"
                >
                  {IconClose}
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* <div className="w-full bg-gray-400">
        <button
          className="mt-9 w-40 rounded-md bg-bs-teal-2 px-6 py-3 text-white outline-none"
          onClick={handleOpenModal}
        >
          + Adicionar Produto
        </button>
      </div>
      <Modal isOpen={isModalOpen} onRequestClose={handleCloseModal} /> */}
      <Modal isOpen={isModalOpen} onRequestClose={handleCloseModal} />
    </>
  );
}
