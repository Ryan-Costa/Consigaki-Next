'use client'

import { UserProps } from '@/interfaces/IProps'
import { useState } from 'react'
import { IconArrow, IconEdit } from '../../../public/icons'
import Modal from '../modal/ModalBanner'
interface CustomModalProps {
  searchTerm: string
  handleEdit: (item: UserProps) => void
  type: 'agreements' | 'users'
}

export default function TableAgreementsUsers({
  searchTerm,
  handleEdit,
  type,
}: CustomModalProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 5

  // const handleOpenModal = () => {
  //   setIsModalOpen(true)
  // }

  const handleCloseModal = () => {
    setIsModalOpen(false)
  }

  const usersData = [
    {
      codigo: '0001',
      nome: 'Ryan',
      cpf: '999.999.999-99',
      email: 'ryan@gmail.com',
      celular: '859999-9999',
      dataNascimento: '10/10/2000',
      cadastro: '01/01/2023',
    },
    {
      codigo: '0002',
      nome: 'Themis',
      cpf: '999.999.999-99',
      email: 'ryan@gmail.com',
      celular: '859999-9999',
      dataNascimento: '10/10/2000',
      cadastro: '02/01/2023',
    },
    {
      codigo: '0003',
      nome: 'Jamile',
      cpf: '999.999.999-99',
      email: 'ryan@gmail.com',
      celular: '859999-9999',
      dataNascimento: '10/10/2000',
      cadastro: '02/01/2023',
    },
    {
      codigo: '0004',
      nome: 'Ivana',
      cpf: '999.999.999-99',
      email: 'ryan@gmail.com',
      celular: '859999-9999',
      dataNascimento: '10/10/2000',
      cadastro: '02/01/2023',
    },
    {
      codigo: '0005',
      nome: 'Karine',
      cpf: '999.999.999-99',
      email: 'ryan@gmail.com',
      celular: '859999-9999',
      dataNascimento: '10/10/2000',
      cadastro: '02/01/2023',
    },
    {
      codigo: '0006',
      nome: 'Adriel',
      cpf: '999.999.999-99',
      email: 'ryan@gmail.com',
      celular: '859999-9999',
      dataNascimento: '10/10/2000',
      cadastro: '02/01/2023',
    },
    {
      codigo: '0007',
      nome: 'Mateus',
      cpf: '999.999.999-99',
      email: 'ryan@gmail.com',
      celular: '859999-9999',
      dataNascimento: '10/10/2000',
      cadastro: '02/01/2023',
    },
    {
      codigo: '0008',
      nome: 'Sergio',
      cpf: '999.999.999-99',
      email: 'ryan@gmail.com',
      celular: '859999-9999',
      dataNascimento: '10/10/2000',
      cadastro: '02/01/2023',
    },
    {
      codigo: '0009',
      nome: 'Yasmin',
      cpf: '999.999.999-99',
      email: 'ryan@gmail.com',
      celular: '859999-9999',
      dataNascimento: '10/10/2000',
      cadastro: '02/01/2023',
    },
    {
      codigo: '0010',
      nome: 'Heberth',
      cpf: '999.999.999-99',
      email: 'ryan@gmail.com',
      celular: '859999-9999',
      dataNascimento: '10/10/2000',
      cadastro: '02/01/2023',
    },
  ]

  const filteredData = usersData!.filter((item) =>
    item.nome.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage

  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem)

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber)
  }

  return (
    <div>
      {type === 'agreements' ? (
        <table className="mt-8 w-full text-left">
          <thead>
            <tr>
              <th className="p-4 text-left">Código</th>
              <th className="p-4 text-left">Nome Convênios</th>
              <th className="p-4 text-left">Cadastro</th>
              <th className="p-4 text-left">Editar</th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map((item, index) => (
              <tr key={index} className="border-y">
                <td className="p-4 text-left">{item.codigo}</td>
                <td className="p-4 text-left">{item.nome}</td>
                <td className="p-4 text-left">{item.cadastro}</td>
                <td className="p-4 text-left">
                  <a
                    onClick={() => handleEdit(item)}
                    className="cursor-pointer"
                  >
                    {IconEdit}
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : type === 'users' ? (
        <table className="mt-8 w-full text-left">
          <thead>
            <tr>
              <th className="p-4 text-left">Código</th>
              <th className="p-4 text-left">Nome Convênios</th>
              <th className="p-4 text-left">Cadastro</th>
              <th className="p-4 text-left">Editar</th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map((item, index) => (
              <tr key={index} className="border-y">
                <td className="p-4 text-left">{item.codigo}</td>
                <td className="p-4 text-left">{item.nome}</td>
                <td className="p-4 text-left">{item.cadastro}</td>
                <td className="p-4 text-left">
                  <a
                    onClick={() => handleEdit(item)}
                    className="cursor-pointer"
                  >
                    {IconEdit}
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>Tabela desconhecida</p>
      )}
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
                index + 1 === currentPage ? 'bg-deg1 text-white' : ''
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
  )
}
