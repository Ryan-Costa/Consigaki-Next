'use client'

import TableAgreements from '@/components/Agreement/TableAgreements'
import EditAgreement from '@/components/Agreement/EditAgreement'
import AddAgreement from '@/components/Agreement/AddAgreement'

import { SearchInput } from '@/components/SearchInput'
import { useEffect, useState } from 'react'
import { IconPartners } from '../../../../public/icons'

import { IAgreements, IDataAgreements } from '@/interfaces/IProps'

import { Roboto } from 'next/font/google'
import { Dropdown } from '@/components/Dropdown'
import api from '@/services/server/api'
import { Metadata } from 'next'
const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700'],
})

export const metadata: Metadata = {
  title: 'Convênios',
}

export default function Agreements() {
  const [searchTerm, setSearchTerm] = useState('')
  const [isEditing, setIsEditing] = useState(false)
  const [selectedItem, setSelectedItem] = useState<IAgreements | null>(null)
  const [heAddAgreement, setHeAddAgreement] = useState(false)
  const [agreements, setAgreements] = useState<IAgreements[]>([])

  // type BodyProps = {
  //   name: string
  //   page: number
  //   size: number
  // }
  // const body: BodyProps = {
  //   name: '',
  //   page: 1,
  //   size: 10,
  // }

  useEffect(() => {
    ;(async () => {
      try {
        const response = await api.get<IDataAgreements>('/agreements')
        setAgreements(response.data.data.agreements)
        console.log(response.data.data.agreements)
      } catch (error) {
        console.log(error)
      }
    })()
  }, [])

  const handleSearch = (value: string) => {
    setSearchTerm(value)
  }

  const handleEdit = (item: IAgreements) => {
    setSelectedItem(item)
    setIsEditing(true)
  }

  const handleCloseEditScreen = () => {
    setIsEditing(false)
  }

  const handleAddition = () => {
    setHeAddAgreement(true)
  }

  const handleCloseAdditionScreen = () => {
    setHeAddAgreement(false)
  }

  return (
    <>
      <div
        className={`${roboto.className} h-full w-full rounded-md bg-white px-6 
        ${heAddAgreement || isEditing ? 'py-9' : 'py-14'}`}
      >
        {heAddAgreement ? (
          <AddAgreement
            item={selectedItem!}
            onClose={handleCloseAdditionScreen}
          />
        ) : (
          <>
            {isEditing ? (
              <EditAgreement
                item={selectedItem!}
                onClose={handleCloseEditScreen}
              />
            ) : (
              <>
                <div className="flex w-full justify-between">
                  <h2 className="flex items-center gap-2 text-2xl font-bold">
                    Convênios {IconPartners}
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
                <div className="mt-8">
                  <button
                    onClick={handleAddition}
                    className="rounded-md bg-bs-teal-2 px-6 py-3 text-white outline-none"
                  >
                    + Adicionar Convênio
                  </button>
                </div>
                <TableAgreements
                  searchTerm={searchTerm}
                  handleEdit={handleEdit}
                  data={agreements}
                />
              </>
            )}
          </>
        )}
      </div>
    </>
  )
}
