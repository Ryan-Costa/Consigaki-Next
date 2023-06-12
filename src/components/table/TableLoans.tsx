"use client";

import { useState } from "react";
import { IconArrow, IconEdit } from "../../../public/icons";
import { ILoans } from "@/interfaces/IProps";

interface TableLoansProps {
  searchTerm: string;
  handleEdit: (item: ILoans) => void;
}

export function TableLoans({ searchTerm, handleEdit }: TableLoansProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const tableData = [
    {
      agreementId: "0001",
      userId: "David Pontes",
      cpf: "61828311383",
      registration: "25489-6",
      productId: "Gov SP",
      providerId: "CapitalConsig",
      amouunt: "R$ 5.000,00",
      installment: "R$ 450,00",
      fee: 68,
    },
    {
      agreementId: "0002",
      userId: "David Pontes",
      cpf: "61828311383",
      registration: "25489-6",
      productId: "Gov SP",
      providerId: "CapitalConsig",
      amouunt: "R$ 5.000,00",
      installment: "R$ 450,00",
      fee: 68,
    },
    {
      agreementId: "0003",
      userId: "David Pontes",
      cpf: "61828311383",
      registration: "25489-6",
      productId: "Gov SP",
      providerId: "CapitalConsig",
      amouunt: "R$ 5.000,00",
      installment: "R$ 450,00",
      fee: 68,
    },
    {
      agreementId: "0004",
      userId: "David Pontes",
      cpf: "61828311383",
      registration: "25489-6",
      productId: "Gov SP",
      providerId: "CapitalConsig",
      amouunt: "R$ 5.000,00",
      installment: "R$ 450,00",
      fee: 68,
    },
    {
      agreementId: "0005",
      userId: "David Pontes",
      cpf: "61828311383",
      registration: "25489-6",
      productId: "Gov SP",
      providerId: "CapitalConsig",
      amouunt: "R$ 5.000,00",
      installment: "R$ 450,00",
      fee: 68,
    },
    {
      agreementId: "0006",
      userId: "David Pontes",
      cpf: "61828311383",
      registration: "25489-6",
      productId: "Gov SP",
      providerId: "CapitalConsig",
      amouunt: "R$ 5.000,00",
      installment: "R$ 450,00",
      fee: 68,
    },
    {
      agreementId: "0007",
      userId: "David Pontes",
      cpf: "61828311383",
      registration: "25489-6",
      productId: "Gov SP",
      providerId: "CapitalConsig",
      amouunt: "R$ 5.000,00",
      installment: "R$ 450,00",
      fee: 68,
    },
    {
      agreementId: "0008",
      userId: "David Pontes",
      cpf: "61828311383",
      registration: "25489-6",
      productId: "Gov SP",
      providerId: "CapitalConsig",
      amouunt: "R$ 5.000,00",
      installment: "R$ 450,00",
      fee: 68,
    },
    {
      agreementId: "0009",
      userId: "David Pontes",
      cpf: "61828311383",
      registration: "25489-6",
      productId: "Gov SP",
      providerId: "CapitalConsig",
      amouunt: "R$ 5.000,00",
      installment: "R$ 450,00",
      fee: 68,
    },
    {
      agreementId: "0010",
      userId: "David Pontes",
      cpf: "61828311383",
      registration: "25489-6",
      productId: "Gov SP",
      providerId: "CapitalConsig",
      amouunt: "R$ 5.000,00",
      installment: "R$ 450,00",
      fee: 68,
    },
    {
      agreementId: "0011",
      userId: "David Pontes",
      cpf: "61828311383",
      registration: "25489-6",
      productId: "Gov SP",
      providerId: "CapitalConsig",
      amouunt: "R$ 5.000,00",
      installment: "R$ 450,00",
      fee: 68,
    },
    {
      agreementId: "0012",
      userId: "David Pontes",
      cpf: "61828311383",
      registration: "25489-6",
      productId: "Gov SP",
      providerId: "CapitalConsig",
      amouunt: "R$ 5.000,00",
      installment: "R$ 450,00",
      fee: 68,
    },
    {
      agreementId: "0013",
      userId: "David Pontes",
      cpf: "61828311383",
      registration: "25489-6",
      productId: "Gov SP",
      providerId: "CapitalConsig",
      amouunt: "R$ 5.000,00",
      installment: "R$ 450,00",
      fee: 68,
    },
    {
      agreementId: "0014",
      userId: "David Pontes",
      cpf: "61828311383",
      registration: "25489-6",
      productId: "Gov SP",
      providerId: "CapitalConsig",
      amouunt: "R$ 5.000,00",
      installment: "R$ 450,00",
      fee: 68,
    },
  ];

  const filteredData = tableData!.filter((item) =>
    item.userId.toLowerCase().includes(searchTerm.toLowerCase())
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
            <th className="p-3 text-left">Código</th>
            <th className="p-3 text-left">Cliente</th>
            <th className="p-3 text-left">CPF</th>
            <th className="p-3 text-left">Matrícula</th>
            <th className="p-3 text-left">Convênio</th>
            <th className="p-3 text-left">Consignatária</th>
            <th className="p-3 text-left">Valor liberado</th>
            <th className="p-3 text-left">Parcela</th>
            <th className="p-3 text-left">Prazo</th>
            <th className="p-3 text-left">Editar</th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map((item, index) => (
            <tr key={index} className="border-y">
              <td className="p-3 text-left">{item.agreementId}</td>
              <td className="p-3 text-left">{item.userId}</td>
              <td className="p-3 text-left">{item.cpf}</td>
              <td className="p-3 text-left">{item.registration}</td>
              <td className="p-3 text-left">{item.productId}</td>
              <td className="p-3 text-left">{item.providerId}</td>
              <td className="p-3 text-left">{item.amouunt}</td>
              <td className="p-3 text-left">{item.installment}</td>
              <td className="p-3 text-left">{item.fee}X</td>
              <td className="p-3 text-left">
                <a onClick={() => handleEdit(item)} className="cursor-pointer">
                  {IconEdit}
                </a>
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
    </div>
  );
}
