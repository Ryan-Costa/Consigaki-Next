import React, { useState, ChangeEvent } from 'react'
import { IconArrowBack, IconPartners } from '../../../public/icons'
import { Inter } from 'next/font/google'
import ToggleSwitch from '../ToggleSwitch'
import { IProducts } from '@/interfaces/IProps'
import { ButtonSave } from '../Common/ButtonSave'
import { Input } from '../Common/Input'

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '700'],
})

interface AddProductsProps {
  onClose: () => void
}

export default function AddProduct({ onClose }: AddProductsProps) {

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    // setSavedItem((prevItem) => ({
    //   ...prevItem,
    //   [name]: value,
    // }))
  }

  const handleSave = () => {
    onClose()
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
        <h1 className="text-2xl font-bold">Adicionar Produto</h1>
        {IconPartners}
      </div>
      <p
        className={`${inter.className} text-base tracking-tight text-text-regular`}
      >
        Prencha todos os campos
      </p>
      <div className="mt-6 flex gap-6">
        <Input
          label="Razão Social"
          type="text"
          name="razaoSocial"
          placeholder="---------- -------- -------"
          className="w-full"
          onChange={handleInputChange}
        />
      </div>
      <div className="mb-6 mt-6 flex gap-6">
        <Input
          label="Cadastro"
          type="text"
          name="cadastro"
          placeholder="00/00/0000"
          onChange={handleInputChange}
        />
        <Input
          label="Alterado"
          type="text"
          name="alterado"
          placeholder="00/00/0000"
          onChange={handleInputChange}
        />
      </div>
      <ToggleSwitch />
      <ButtonSave handleSave={handleSave} />
    </div>
  )
}
