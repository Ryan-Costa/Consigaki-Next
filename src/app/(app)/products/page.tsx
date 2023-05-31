'use client'

import TableProducts from '@/components/table/TableProducts'
import AddProduct from '@/components/productsComponents/AddProduct'
import EditProduct from '@/components/productsComponents/EditProduct'

import SearchInput from '@/components/SearchInput'
import { useState } from 'react'
import { IconPartners } from '../../../../public/icons'

import { Roboto } from '@next/font/google'
import { Dropdown } from '@/components/Dropdown'
const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700'],
})

interface ItemProps {
  codigo: string
  razaoSocial: string
  cnpj: string
  cadastro: string
}

export default function Providers() {
  const [searchTerm, setSearchTerm] = useState('')
  const [isEditing, setIsEditing] = useState(false)
  const [selectedItem, setSelectedItem] = useState<ItemProps | null>(null)
  const [heAddProduct, setHeAddProduct] = useState(false)

  const handleSearch = (value: string) => {
    setSearchTerm(value)
  }

  const handleEdit = (item: ItemProps) => {
    setSelectedItem(item)
    setIsEditing(true)
  }

  const handleCloseEditScreen = () => {
    setIsEditing(false)
  }

  const handleAddition = () => {
    setHeAddProduct(true)
  }

  const handleCloseAdditionScreen = () => {
    setHeAddProduct(false)
  }

  return (
    <>
      <div
        className={`${
          roboto.className
        } h-full w-full rounded-md bg-white px-6 ${
          heAddProduct ? 'py-9' : 'py-14'
        }`}
      >
        {heAddProduct ? (
          <AddProduct
            item={selectedItem!}
            onClose={handleCloseAdditionScreen}
          />
        ) : (
          <>
            {isEditing ? (
              <EditProduct
                item={selectedItem!}
                onClose={handleCloseEditScreen}
              />
            ) : (
              <>
                <div className="flex w-full justify-between">
                  <h2 className="flex items-center gap-2 text-2xl font-bold">
                    Produtos {IconPartners}
                  </h2>
                  <div className="flex gap-5 ">
                    <Dropdown type="table" />
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
                    + Adicionar Produto
                  </button>
                </div>
                <TableProducts
                  searchTerm={searchTerm}
                  handleEdit={handleEdit}
                  type={'providers'}
                />
              </>
            )}
          </>
        )}
      </div>
    </>
  )
}
