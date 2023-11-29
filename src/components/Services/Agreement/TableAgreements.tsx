'use client'

import { postRevalidatePageItems } from '@/functions/postRevalidatePageItems'
import { IAgreements, IDataAgreements } from '@/interfaces/Agreement'
import Link from 'next/link'
import { useEffect, useState, useTransition } from 'react'
import { IconArrow, IconPartners } from '../../../../public/icons'
import { SearchInput } from '../../SearchInput'
import { ButtonAdd } from '../../compCommon/ButtonAdd'
import TBodyAgreements from './TBodyAgreements'
interface AgreementsProps {
  agreementData: IDataAgreements
}

export default function TableAgreements({ agreementData }: AgreementsProps) {
  const [, startTransition] = useTransition()
  const [totalPages, setTotalPages] = useState(agreementData.data.totalPages)
  const [agreements, setAgreements] = useState<IAgreements[]>(
    agreementData.data.agreements,
  )
  const [currentPage, setCurrentPage] = useState(agreementData.data.currentPage)
  const [searchTerm, setSearchTerm] = useState('')
  const itemsPerPage = 10

  useEffect(() => {
    const body = {
      keyword: searchTerm,
      page: currentPage,
      size: itemsPerPage,
    }
    const urlAgreementsGetAll = '/agreements/get-all'
    startTransition(() =>
      postRevalidatePageItems<IDataAgreements>(urlAgreementsGetAll, body).then(
        (response) => {
          if (response) {
            setAgreements(response.data.agreements)
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
          Convênios {IconPartners}
        </h2>
        <div className="flex items-center justify-center">
          <SearchInput onSearch={handleSearch} />
        </div>
      </div>
      <Link href={'/agreements/new'}>
        <ButtonAdd name="Convênio" />
      </Link>

      <div>
        <table className="mt-8 w-full text-left">
          <thead>
            <tr>
              <th className="p-4 text-left">Código</th>
              <th className="p-4 text-left">Nome Convênios</th>
              <th className="p-4 text-left">Cadastro</th>
              <th className="p-4 text-left">Editar</th>
            </tr>
          </thead>
          <TBodyAgreements data={agreements} />
        </table>
        <div className="mt-8 flex gap-2">
          <button
            className="flex h-8 w-8 -rotate-90 cursor-pointer items-center justify-center rounded-sm bg-goldenrod"
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            {IconArrow}
          </button>
          {Array(Math.ceil(totalPages))
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
