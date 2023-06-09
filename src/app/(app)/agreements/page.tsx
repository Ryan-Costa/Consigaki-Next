'use client'

import TableAgreements from '@/components/table/TableAgreements'
import EditAgreement from '@/components/agreementsComponents/EditAgreement'
import AddAgreement from '@/components/agreementsComponents/AddAgreement'

import SearchInput from '@/components/SearchInput'
import { useState } from 'react'
import { IconPartners } from '../../../../public/icons'

import { AgreementsProps } from '@/interfaces/IProps'

import { Roboto } from 'next/font/google'
import { Dropdown } from '@/components/Dropdown'
const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700'],
})

export default function Agreements() {
  const [searchTerm, setSearchTerm] = useState('')
  const [isEditing, setIsEditing] = useState(false)
  const [selectedItem, setSelectedItem] = useState<AgreementsProps | null>(null)
  const [heAddAgreement, setHeAddAgreement] = useState(false)

  const handleSearch = (value: string) => {
    setSearchTerm(value)
  }

  const handleEdit = (item: AgreementsProps) => {
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

  console.log(heAddAgreement)

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
                  type={'agreements'}
                />
              </>
            )}
          </>
        )}
      </div>
    </>
  )
}
