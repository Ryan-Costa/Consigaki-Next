import React, { useState, ChangeEvent } from 'react'
import { IconArrowBack, IconPartners } from '../../../public/icons'
import { Inter } from 'next/font/google'
import ToggleSwitch from '../ToggleSwitch'
import { TableEditAgreement } from '../table/TableEditAgreement'
import { ButtonSave } from '../common/ButtonSave'
import { AgreementsProps } from '@/interfaces/IProps'
import { Input } from '../common/Input'

// import { useForm } from "react-hook-form";
const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '700'],
})

interface EditProps {
  item: AgreementsProps
  onClose: () => void
}

export default function EditAgreement({ item, onClose }: EditProps) {
  const [editedItem, setEditedItem] = useState<AgreementsProps>(item)
  // const { control, handleSubmit } = useForm({
  //   defaultValues: {},
  // });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setEditedItem((prevItem) => ({
      ...prevItem,
      [name]: value,
    }))
  }

  const handleSave = () => {
    onClose()
    console.log('Item editado:', editedItem)
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
        <h1 className="text-2xl font-bold">Editar Convênio</h1>
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
          className="w-full"
          value={editedItem.name}
          onChange={handleInputChange}
        />
      </div>
      <div className="mb-6 mt-6 flex gap-6">
        <Input
          label="Cadastro"
          name="cadastro"
          type="text"
          value={editedItem.register}
          onChange={handleInputChange}
        />
        <Input label="Alterado" name="alterado" type="text" />
      </div>
      <ToggleSwitch />
      <ButtonSave handleSave={handleSave} />
      <h2 className="mt-6 flex items-center gap-2 text-2xl font-bold">
        Produtos {IconPartners}
      </h2>
      <TableEditAgreement />
    </div>
  )
}
