import React, { useState, ChangeEvent } from 'react'
import { IconArrowBack, IconPartners } from '../../../public/icons'
import { Inter } from 'next/font/google'
import ToggleSwitch from '../ToggleSwitch'
import { ButtonSave } from '../Common/ButtonSave'
import { Input } from '../Common/Input'
import { IProviders } from '@/interfaces/IProps'
// import { useForm } from "react-hook-form";
const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '700'],
})

interface EditProvidersProps {
  item: IProviders
  onClose: () => void
}

export default function EditProvider({ item, onClose }: EditProvidersProps) {
  const [editedItem, setEditedItem] = useState<IProviders>(item)
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
    // window.location.reload();
    onClose()
    console.log('voltei')
  }

  return (
    <div>
      <button className="" onClick={handleGoBack}>
        {IconArrowBack}
      </button>
      <div className="mt-12 flex gap-2">
        <h1 className="text-2xl font-bold">Editar Consignatária</h1>
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
          name="razaoSicial"
          type="text"
          className="w-full"
          value={editedItem.name}
          onChange={handleInputChange}
        />
        <Input
          label="CNPJ"
          name="cnpj"
          type="text"
          className="w-full"
          // value={editedItem.}
          onChange={handleInputChange}
        />
      </div>
      <div className="mb-6 mt-6 flex gap-6">
        <Input
          label="Cadastro"
          name="cadastro"
          type="text"
          value={new Date(editedItem.createdAt).toLocaleDateString()}
          onChange={handleInputChange}
        />
        <Input
          label="Alterado"
          name="alterado"
          type="text"
          value={
            editedItem.updatedAt !== null
              ? new Date(editedItem.updatedAt).toLocaleDateString()
              : ''
          }
          onChange={handleInputChange}
        />
      </div>
      <ToggleSwitch />
      <ButtonSave handleSave={handleSave} />
    </div>
  )
}
