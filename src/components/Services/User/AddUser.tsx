import React, { useState, ChangeEvent } from 'react'
import { IconArrowBack, IconPartners } from '../../../../public/icons'
import { Inter } from 'next/font/google'
import ToggleSwitch from '../../ToggleSwitch'
import { Dropdown } from '../../Dropdown'
import { UserProps } from '@/interfaces/IProps'
import { ButtonSave } from '../../Common/ButtonSave'
import { Input } from '../../Common/Input'
const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '700'],
})

interface AddProps {
  item: UserProps
  onClose: () => void
}

export default function AddUser({ item, onClose }: AddProps) {
  const [savedItem, setSavedItem] = useState<UserProps>(item)

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
        <h1 className="text-2xl font-bold">Adicionar Usuário</h1>
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
          type="text"
          name="nome"
          placeholder="David Bessa Pontes"
          className="w-full"
          onChange={handleInputChange}
        />
        <Input
          label="E-mail"
          type="text"
          name="email"
          placeholder="OrpelNet@Gmail.acom"
          className="w-full"
          onChange={handleInputChange}
        />
      </div>
      <div className="mb-6 mt-6 flex gap-6">
        <Input
          label="CPF"
          type="text"
          name="cadastro"
          placeholder="000.000.000-00"
          className="w-full"
          onChange={handleInputChange}
        />
        <Input
          label="Celular"
          type="text"
          name="alterado"
          placeholder="(00) 0 0000-0000"
          className="w-full"
          onChange={handleInputChange}
        />
        <Input
          label="Data de nascimento"
          type="text"
          name="dataNascimento"
          placeholder="00/00/0000"
          className="w-full"
          onChange={handleInputChange}
        />
        <div className="flex w-full flex-col gap-2">
          <label htmlFor="" className="font-semibold">
            Perfil
          </label>
          <Dropdown
            defaultValue="Selecione"
            type="form"
            options={['Cliente', 'Suporte', 'Administrador']}
          />
        </div>
      </div>
      <div className="mb-6 mt-6 flex gap-6">
        <div className="flex w-full flex-col gap-2">
          <label htmlFor="" className="font-semibold">
            Acesso
          </label>
          <Dropdown
            defaultValue="Login liberado"
            type="form"
            options={['Login bloqueado', 'Login liberado']}
          />
        </div>
        <Input
          label="Cadastro"
          type="text"
          name="cadastro"
          placeholder="00/00/0000"
          className="w-full"
          onChange={handleInputChange}
        />
        <Input
          label="Alterado"
          type="text"
          name="alterado"
          placeholder="00/00/0000"
          className="w-full"
          onChange={handleInputChange}
        />
      </div>
      <ToggleSwitch />
      <ButtonSave handleSave={handleSave} />
    </div>
  )
}
