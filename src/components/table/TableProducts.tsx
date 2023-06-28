'use client'

import React, { useState } from 'react'
import { IconArrow, IconEdit, IconPartners } from '../../../public/icons'
import { IProducts } from '@/interfaces/IProps'
import { ButtonAdd } from '../Common/ButtonAdd'
import { SearchInput } from '../SearchInput'
import { Dropdown } from '../Dropdown'
import Link from 'next/link'

interface ProductsProps {
  data: IProducts[]
}

export default function TableProducts({ data }: ProductsProps) {
  const [currentPage, setCurrentPage] = useState(1)
  const [searchTerm, setSearchTerm] = useState('')
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

  const handleSearch = (value: string) => {
    setSearchTerm(value)
  }

  return (
    <>
      <div className="flex w-full justify-between">
        <h2 className="flex items-center gap-2 text-2xl font-bold">
          Produtos {IconPartners}
        </h2>
        <div className="flex gap-5 ">
          <Dropdown
            defaultValue="Ativo"
            type="table"
            options={['Opção 1', 'Opção 2', 'Opção 3', 'Opção 4']}
          />
          <div className="flex items-center justify-center">
            <SearchInput onSearch={handleSearch} />
          </div>
        </div>
      </div>
      <Link href={`/products/new`}>
        <ButtonAdd name="Produto" />
      </Link>
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
                <Link href={`/products/${item.id}`} className="cursor-pointer">
                  {IconEdit}
                </Link>
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
    </>
  )
}
