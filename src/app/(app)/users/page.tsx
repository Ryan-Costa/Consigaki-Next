'use client'

import TableUsers from '@/components/table/TableUsers'
import EditUser from '@/components/usersComponents/EditUser'
import AddUser from '@/components/usersComponents/AddUser'

import SearchInput from '@/components/SearchInput'
import { useState } from 'react'
import { IconPartners } from '../../../../public/icons'
import { Dropdown } from '@/components/Dropdown'
import { UserProps } from '@/interfaces/IProps'

import { Roboto } from 'next/font/google'
import { ButtonAdd } from '@/components/common/ButtonAdd'
const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700'],
})

export default function Users() {
  const [searchTerm, setSearchTerm] = useState('')
  const [isEditing, setIsEditing] = useState(false)
  const [selectedItem, setSelectedItem] = useState<UserProps | null>(null)
  const [heAddUser, setHeAddUser] = useState(false)

  const handleSearch = (value: string) => {
    setSearchTerm(value)
  }

  const handleEdit = (item: UserProps) => {
    setSelectedItem(item)
    setIsEditing(true)
  }

  const handleCloseEditScreen = () => {
    setIsEditing(false)
  }

  const handleAddition = () => {
    setHeAddUser(true)
  }

  const handleCloseAdditionScreen = () => {
    setHeAddUser(false)
  }

  return (
    <>
      <div
        className={`${
          roboto.className
        } h-full w-full rounded-md bg-white px-6 ${
          heAddUser ? 'py-9' : 'py-14'
        }`}
      >
        {heAddUser ? (
          <AddUser item={selectedItem!} onClose={handleCloseAdditionScreen} />
        ) : (
          <>
            {isEditing ? (
              <EditUser item={selectedItem!} onClose={handleCloseEditScreen} />
            ) : (
              <>
                <div className="flex w-full justify-between">
                  <h2 className="flex items-center gap-2 text-2xl font-bold">
                    Usuários {IconPartners}
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
                <ButtonAdd name="Usuário" handleAddition={handleAddition} />
                <TableUsers
                  searchTerm={searchTerm}
                  handleEdit={handleEdit}
                  type={'users'}
                />
              </>
            )}
          </>
        )}
      </div>
    </>
  )
}
