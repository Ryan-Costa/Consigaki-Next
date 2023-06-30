'use client'

import React, { useEffect, useState } from 'react'
import { IconArrow, IconEdit, IconPartners } from '../../../public/icons'
import { IDataProducts, IProducts } from '@/interfaces/IProps'
import { ButtonAdd } from '../Common/ButtonAdd'
import { SearchInput } from '../SearchInput'
import { Dropdown } from '../Dropdown'
import Link from 'next/link'
import { getProducts } from '@/functions/get-products'

interface ProductsProps {
  productData: IDataProducts
}

export default function TableProducts({ productData }: ProductsProps) {
  const totalPages = productData.data.totalPages
  const [currentItems, setCurrentItems] = useState<IProducts[]>([])
  const [products, setProducts] = useState<IProducts[]>(
    productData.data.products,
  )
  const [currentPage, setCurrentPage] = useState(productData.data.currentPage)
  const [searchTerm, setSearchTerm] = useState('')
  const itemsPerPage = 10

  useEffect(() => {
    const fetchData = async () => {
      const productsNextPage = await getProducts(currentPage)
      setProducts(productsNextPage.data.products)
    }
    fetchData()
  }, [currentPage])

  useEffect(() => {
    const filteredData = products.filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase()),
    )

    const indexOfLastItem = Math.min(
      currentPage * itemsPerPage,
      filteredData.length,
    )

    const indexOfFirstItem = Math.max(indexOfLastItem - itemsPerPage, 0)

    console.log('filteredData ==>', filteredData)
    console.log('indexOfLastItem ==>', indexOfLastItem)
    console.log('indexOfFirstItem ==>', indexOfFirstItem)

    setCurrentItems(filteredData.slice(indexOfFirstItem, indexOfLastItem))
  }, [searchTerm, products, currentPage])

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber)
  }

  const handleSearch = (value: string) => {
    setSearchTerm(value)
  }

  const productTypeToString = (type: number) => {
    const productTypeTransformed: Record<number, string> = {
      0: 'Cartão',
      1: 'Empréstimo',
      2: 'Previdência',
      3: 'Seguro',
      99: 'Diversos',
    }

    if (Object.prototype.hasOwnProperty.call(productTypeTransformed, type)) {
      return productTypeTransformed[type]
    }

    return productTypeTransformed[type]
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
            <th className="p-4 text-left">Tipo</th>
            <th className="p-4 text-left">Cadastro</th>
            <th className="p-4 text-left">Editar</th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map((item) => (
            <tr key={item.id} className="border-y">
              <td className="p-4 pl-8 text-left">{item.id}</td>
              <td className="p-4 text-left">{item.name}</td>
              <td className="p-4 text-left">
                {item.type !== undefined && productTypeToString(item.type)}
              </td>
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
        {Array(totalPages)
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
          disabled={currentPage === totalPages}
        >
          {IconArrow}
        </button>
      </div>
    </>
  )
}
