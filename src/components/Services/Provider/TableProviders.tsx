'use client'

import { postRevalidatePageItems } from '@/functions/postRevalidatePageItems'
import { IDataProviders, IProviders } from '@/interfaces/Provider'
import Link from 'next/link'
import { useEffect, useState, useTransition } from 'react'
import { IconArrow, IconPartners } from '../../../../public/icons'
import { SearchInput } from '../../SearchInput'
import { ButtonAdd } from '../../compCommon/ButtonAdd'
import TBodyProviders from './TBodyProviders'
interface ProviderProps {
  providerData: IDataProviders
}

export default function TableProviders({ providerData }: ProviderProps) {
  const [, startTransition] = useTransition()
  const [totalPages, setTotalPages] = useState(providerData.data.totalPages)
  const [providers, setProviders] = useState<IProviders[]>(
    providerData.data.providers,
  )
  const [currentPage, setCurrentPage] = useState(providerData.data.currentPage)
  const [searchTerm, setSearchTerm] = useState('')
  const itemsPerPage = 10

  useEffect(() => {
    const body = {
      keyword: searchTerm,
      page: currentPage,
      size: itemsPerPage,
    }
    const urlProvidersGetAll = '/providers/get-all'
    startTransition(() =>
      postRevalidatePageItems<IDataProviders>(urlProvidersGetAll, body).then(
        (response) => {
          if (response) {
            setProviders(response.data.providers)
            setTotalPages(response.data.totalPages)
          }
        },
      ),
    )
  }, [currentPage, searchTerm])

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
          Consignatárias {IconPartners}
        </h2>
        <div className="flex items-center justify-center">
          <SearchInput onSearch={handleSearch} />
        </div>
      </div>
      <Link href={'/providers/new'}>
        <ButtonAdd name="Consignatária" />
      </Link>

      <div>
        <table className="mt-8 w-full text-left">
          <thead>
            <tr>
              <th className="p-4 text-left">Código</th>
              <th className="p-4 text-left">Razão Social</th>
              <th className="p-4 text-left">Cadastro</th>
              <th className="p-4 text-left">Editar</th>
            </tr>
          </thead>
          <TBodyProviders data={providers} />
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
      </div>
    </>
  )
}
