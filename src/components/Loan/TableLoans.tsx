'use client'

import { IDataLoans, ILoans } from '@/interfaces/IProps'
import { getLoans } from '@/services/getLoans'
import { useEffect, useState } from 'react'
import { IconArrow, IconPartners } from '../../../public/icons'
import { Dropdown } from '../Dropdown'
import { SearchInput } from '../SearchInput'
import TBodyLoans from './TBodyLoans'

interface LoansProps {
  loanData: IDataLoans
}

export function TableLoans({ loanData }: LoansProps) {
  const totalPages = loanData.data.totalPages
  const [currentItems, setCurrentItems] = useState<ILoans[]>([])
  const [loans, setLoans] = useState<ILoans[]>(loanData.data.loans)
  const [currentPage, setCurrentPage] = useState(loanData.data.currentPage)
  const [searchTerm, setSearchTerm] = useState('')
  const itemsPerPage = 10

  useEffect(() => {
    const fetchData = async () => {
      const loansNextPage = await getLoans(currentPage)
      setLoans(loansNextPage.data.loans)
    }
    fetchData()
  }, [currentPage])

  useEffect(() => {
    const filteredData = loans?.filter((item) =>
      item.user.name.toLowerCase().includes(searchTerm.toLowerCase()),
    )

    const indexOfLastItem = Math.min(
      currentPage * itemsPerPage,
      filteredData.length,
    )

    const indexOfFirstItem = Math.max(indexOfLastItem - itemsPerPage, 0)

    setCurrentItems(filteredData.slice(indexOfFirstItem, indexOfLastItem))
  }, [searchTerm, loans, currentPage])

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber)
  }

  const handleSearch = (value: string) => setSearchTerm(value)

  return (
    <div>
      <div className="flex w-full justify-between">
        <h2 className="flex items-center gap-2 text-2xl font-bold">
          Esteira {IconPartners}
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
      <table className="mt-28 w-full text-left">
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
        <TBodyLoans data={currentItems} />
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
  )
}
