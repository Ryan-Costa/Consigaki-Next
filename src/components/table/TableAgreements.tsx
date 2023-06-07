'use client'

import { AgreementsProps } from '@/interfaces/IProps'
import { useState } from 'react'
import { IconArrow, IconEdit } from '../../../public/icons'
import Modal from '../modal/ModalBanner'
interface CustomModalProps {
  searchTerm: string
  handleEdit: (item: AgreementsProps) => void
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

  const agreementsData = [
    {
      code: '0001',
      name: 'Raquel',
      register: '01/01/2023',
    },
    {
      code: '0002',
      name: 'Lucas',
      register: '02/01/2023',
    },
    {
      code: '0003',
      name: 'Junior',
      register: '02/01/2023',
    },
    {
      code: '0004',
      name: 'Rafael',
      register: '02/01/2023',
    },
    {
      code: '0005',
      name: 'Jeferson',
      register: '02/01/2023',
    },
    {
      code: '0006',
      name: 'Thiago',
      register: '02/01/2023',
    },
    {
      code: '0007',
      name: 'Breno',
      register: '02/01/2023',
    },
    {
      code: '0008',
      name: 'Gabriel',
      register: '02/01/2023',
    },
    {
      code: '0009',
      name: 'Fred',
      register: '02/01/2023',
    },
    {
      code: '0010',
      name: 'Fábio',
      register: '02/01/2023',
    },
  ]

  const filteredData = agreementsData!.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase()),
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
                <td className="p-4 text-left">{item.code}</td>
                <td className="p-4 text-left">{item.name}</td>
                <td className="p-4 text-left">{item.register}</td>
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
                <td className="p-4 text-left">{item.code}</td>
                <td className="p-4 text-left">{item.name}</td>
                <td className="p-4 text-left">{item.register}</td>
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
