'use client'

import { useState } from 'react'
import { IconArrow, IconEdit } from '../../../public/icons'
import Modal from '../modal/ModalBanner'
import { IProducts } from '@/interfaces/IProps'

interface CustomModalProps {
  searchTerm: string
  handleEdit: (item: IProducts) => void
  type: 'providers'
}

export default function TableProviders({
  searchTerm,
  handleEdit,
  type,
}: CustomModalProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 5

  // const handleOpenModal = () => {
  //   setIsModalOpen(true);
  // };

  const handleCloseModal = () => {
    setIsModalOpen(false)
  }

  const tableData = [
    {
      code: '0001',
      companyName: 'Marcos',
      cnpj: '11.000.000/0001-00',
      register: '01/01/2023',
    },
    {
      code: '0002',
      companyName: 'João',
      cnpj: '11.000.000/0001-00',
      register: '02/01/2023',
    },
    {
      code: '0003',
      companyName: 'Marcelo',
      cnpj: '11.000.000/0001-00',
      register: '02/01/2023',
    },
    {
      code: '0004',
      companyName: 'Rodrigo',
      cnpj: '11.000.000/0001-00',
      register: '02/01/2023',
    },
    {
      code: '0005',
      companyName: 'Antonio',
      cnpj: '11.000.000/0001-00',
      register: '02/01/2023',
    },
    {
      code: '0006',
      companyName: 'Alice',
      cnpj: '11.000.000/0001-00',
      register: '02/01/2023',
    },
    {
      code: '0007',
      companyName: 'Fernanda',
      cnpj: '11.000.000/0001-00',
      register: '02/01/2023',
    },
    {
      code: '0008',
      companyName: 'Angelo',
      cnpj: '11.000.000/0001-00',
      register: '02/01/2023',
    },
    {
      code: '0009',
      companyName: 'Maria',
      cnpj: '11.000.000/0001-00',
      register: '02/01/2023',
    },
    {
      code: '0010',
      companyName: 'José',
      cnpj: '11.000.000/0001-00',
      register: '02/01/2023',
    },
    {
      code: '0011',
      companyName: 'Junior',
      cnpj: '11.000.000/0001-00',
      register: '02/01/2023',
    },
    {
      code: '0012',
      companyName: 'Marcos',
      cnpj: '11.000.000/0001-00',
      register: '02/01/2023',
    },
    {
      code: '0013',
      companyName: 'Rodrigo',
      cnpj: '11.000.000/0001-00',
      register: '02/01/2023',
    },
    {
      code: '0014',
      companyName: 'Alberto',
      cnpj: '11.000.000/0001-00',
      register: '02/01/2023',
    },
  ]

  const filteredData = tableData!.filter((item) =>
    item.companyName.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage

  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem)

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber)
  }

  return (
    <div>
      <table className="mt-8 w-full text-left">
        <thead>
          <tr>
            <th className="p-4 text-left">Código</th>
            <th className="p-4 text-left">Razão Social</th>
            <th className="p-4 text-left">CNPJ</th>
            <th className="p-4 text-left">register</th>
            <th className="p-4 text-left">Editar</th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map((item, index) => (
            <tr key={index} className="border-y">
              <td className="p-4 text-left">{item.code}</td>
              <td className="p-4 text-left">{item.companyName}</td>
              <td className="p-4 text-left">{item.cnpj}</td>
              <td className="p-4 text-left">{item.register}</td>
              <td className="p-4 text-left">
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
