import React, { useState, ChangeEvent } from 'react'
import { IconArrowBack, IconPartners } from '../../../public/icons'
import { Inter } from 'next/font/google'
import ToggleSwitch from '../ToggleSwitch'
import { ButtonSave } from '../common/ButtonSave'
const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '700'],
})

interface Item {
  razaoSocial: string
  cnpj: string
}

interface AddProps {
  item: Item
  onClose: () => void
}

export default function AddProvider({ item, onClose }: AddProps) {
  const [savedItem, setSavedItem] = useState<Item>(item)

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setSavedItem((prevItem) => ({
      ...prevItem,
      [name]: value,
    }))
  }

  const handleSave = () => {
    onClose()
    console.log('Item editado:', savedItem)
  }

  const handleGoBack = () => {
    onClose()
    console.log('voltei')
  }

  return (
    <div>
      <button className="" onClick={handleGoBack}>
        {IconArrowBack}
      </button>

      <div className="mt-12 flex gap-2">
        <h1 className="text-2xl font-bold">Adicionar Consignatária</h1>
        {IconPartners}
      </div>
      <p
        className={`${inter.className} text-base tracking-tight text-text-regular`}
      >
        Prencha todos os campos
      </p>
      <div className="mt-6 flex gap-6">
        <div className="flex w-full flex-col gap-2">
          <label htmlFor="" className="font-semibold">
            Razão Social
          </label>
          <input
            name="razaoSocial"
            type="text"
            placeholder="---------- -------- -------"
            className="w-full rounded-lg border border-gray-400 px-6 py-2 outline-none"
            // value={setSavedItem.razaoSocial}
            onChange={handleInputChange}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="" className="font-semibold">
            CNPJ
          </label>
          <input
            name="cnpj"
            type="text"
            placeholder="00000000000-000-000"
            className="w-60 rounded-lg border border-gray-400 px-6 py-2 outline-none"
            // value={setSavedItem.cnpj}
            onChange={handleInputChange}
          />
        </div>
      </div>
      <div className="mb-6 mt-6 flex gap-6">
        <div className="flex flex-col gap-2">
          <label htmlFor="" className="font-semibold">
            Cadastro
          </label>
          <input
            name="cadastro"
            type="text"
            placeholder="00/00/0000"
            className="w-full rounded-lg border border-gray-400 px-6 py-2 outline-none"
            // value={setSavedItem.cadastro}
            onChange={handleInputChange}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="" className="font-semibold">
            Alterado
          </label>
          <input
            name="alterado"
            type="text"
            placeholder="00/00/0000"
            className="w-full rounded-lg border border-gray-400 px-6 py-2 outline-none"
          />
        </div>
      </div>
      <ToggleSwitch />
      <ButtonSave handleSave={handleSave} />
    </div>
  )
}
