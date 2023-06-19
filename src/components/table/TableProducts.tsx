'use client'

import React, { useState } from 'react'
import { IconArrow, IconEdit } from '../../../public/icons'
import { IProducts } from '@/interfaces/IProps'

interface ProductsProps {
  searchTerm: string
  handleEdit: (item: IProducts) => void
  data: IProducts[]
}

export default function TableProducts({
  searchTerm,
  handleEdit,
  data,
}: ProductsProps) {
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 10

  const filteredData = data!.filter((item) =>
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
              <td className="p-4 text-left">{item.id}</td>
              <td className="p-4 text-left">{item.name}</td>
              <td className="p-4 text-left">{item.type}</td>
              <td className="p-4 text-left">
                {new Date(item.createdAt).toLocaleDateString()}
              </td>
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
    </div>
  )
}
