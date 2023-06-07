import React, { useState, ChangeEvent } from 'react'
import { IconArrowBack, IconPartners } from '../../../public/icons'
import { Inter } from '@next/font/google'
import ToggleSwitch from '../ToggleSwitch'
import { AgreementsProps } from '@/interfaces/IProps'
import { Input } from '../common/Input'
import { ButtonSave } from '../common/ButtonSave'

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '700'],
})

interface AddProps {
  item: AgreementsProps
  onClose: () => void
}

export default function AddAgreement({ item, onClose }: AddProps) {
  const [savedItem, setSavedItem] = useState<AgreementsProps>(item)

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

      <div className="mt-8 flex gap-2">
        <h1 className="text-2xl font-bold">Adicionar Convênio</h1>
        {IconPartners}
      </div>
      <p
        className={`${inter.className} text-base tracking-tight text-text-regular`}
      >
        Prencha todos os campos
      </p>
      <div className="mt-6 flex gap-6">
        <Input
          label="Nome"
          name="nome"
          type="text"
          placeholder="---------- -------- -------"
          className="w-full"
          onChange={handleInputChange}
        />
      </div>
      <div className="mb-6 mt-6 flex gap-6">
        <Input
          label="Cadastro"
          name="cadastro"
          type="text"
          placeholder="00/00/0000"
          onChange={handleInputChange}
        />
        <Input
          label="Alterado"
          name="alterado"
          type="text"
          placeholder="00/00/0000"
        />
      </div>
      <ToggleSwitch />
      <ButtonSave handleSave={handleSave} />
    </div>
  )
}
