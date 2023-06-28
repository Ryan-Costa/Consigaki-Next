'use client'

import React, { useEffect, useState } from 'react'
import { IconArrow, IconEdit, IconPartners } from '../../../public/icons'
import { IDataProducts, IProducts } from '@/interfaces/IProps'
import { ButtonAdd } from '../Common/ButtonAdd'
import { SearchInput } from '../SearchInput'
import { Dropdown } from '../Dropdown'
import Link from 'next/link'
import { getProducts } from '@/app/(app)/products/page'
// import api from '@/services/server/api'

interface ProductsProps {
  productData: IDataProducts
}

export default function TableProducts({ productData }: ProductsProps) {
  const totalPages = productData.data.totalPages
  const [currentItems, setCurrentItems] = useState<IProducts[]>([]);
  const [products, setProducts] = useState<IProducts[]>(productData.data.products)
  const [currentPage, setCurrentPage] = useState(productData.data.currentPage)
  const [searchTerm, setSearchTerm] = useState('')
  const itemsPerPage = 10;

  useEffect(() => {
    const fetchData = async () => {
      const productsNextPage = await getProducts(currentPage);
      setProducts(productsNextPage.data.products);
    }
    fetchData();
  }, [currentPage]);

  useEffect(() => {
    //Filtra os produtos de acordo com o termo de pesquisa
    const filteredData = products.filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase()),
    );
    // Calcula o índice do último item que será exibido na página atual
    const indexOfLastItem = Math.min(currentPage * itemsPerPage, filteredData.length);

    // Calcula o índice do primeiro item que será exibido na página atual
    // Se o indexOfLastItem for menor que o total de itemsPerPage (por exemplo, na última página),
    // ele irá ajustar o indexOfFirstItem para o início dos últimos itemsPerPage itens
    const indexOfFirstItem = Math.min(indexOfLastItem - itemsPerPage, filteredData.length);

    // Faz um slice (extrai uma seção do array) com base nos índices do primeiro e último item
    // E define os items atuais com o resultado
    setCurrentItems(filteredData.slice(indexOfFirstItem, indexOfLastItem));
  }, [searchTerm, products, currentPage]);

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
          {currentItems.map((item) => (
            <tr key={item.id} className="border-y">
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
