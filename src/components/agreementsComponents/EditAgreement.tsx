import React, { useState, ChangeEvent } from 'react'
import { IconArrowBack, IconPartners } from '../../../public/icons'
import { Inter } from 'next/font/google'
import ToggleSwitch from '../ToggleSwitch'

import { ButtonSave } from '../Common/ButtonSave'
import { IAgreements } from '@/interfaces/IProps'
import { Input } from '../Common/Input'
import { TableEditParamAgreement } from '../Table/Agreements/TableEditParamAgreement'
import { TableEditProductAgreement } from '../Table/Agreements/TableEditProductAgreement'

// import { useForm } from "react-hook-form";
const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '700'],
})

interface EditProps {
  item: IAgreements
  onClose: () => void
}

export default function EditAgreement({ item, onClose }: EditProps) {
  const [editedItem, setEditedItem] = useState<IAgreements>(item)
  const [activeSection, setActiveSection] = useState<string>('product')
  const [activeButton, setActiveButton] = useState('product')

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

  const handleAgreementsSection = () => {
    setActiveSection('product')
  }

  const handleRequestsSection = () => {
    setActiveSection('param')
  }

  const handleButtonClick = (section: any) => {
    setActiveButton(section)
  }

  const sectionContent =
    activeSection === 'product' ? (
      <>
        <div className="mt-4">
          <TableEditProductAgreement />
        </div>
      </>
    ) : activeSection === 'param' ? (
      <>
        <div className="mt-4">
          <TableEditParamAgreement />
        </div>
      </>
    ) : null

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
          value={
            editedItem.createdAt !== null
              ? new Date(editedItem.createdAt).toLocaleDateString()
              : ''
          }
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

      <div className="mt-8 flex w-full justify-center gap-11">
        <button
          className={`btn text-xl font-bold ${
            activeButton === 'product' ? 'active' : ''
          }`}
          onClick={() => {
            handleButtonClick('product')
            handleAgreementsSection()
          }}
          style={{
            position: 'relative',
            borderBottom:
              activeButton === 'product' ? '3px solid black' : 'none',
          }}
        >
          PRODUTOS
        </button>
        <button
          className={`btn z-0 text-xl font-bold ${
            activeButton === 'param' ? 'active' : ''
          }`}
          onClick={() => {
            handleButtonClick('param')
            handleRequestsSection()
          }}
          style={{
            position: 'relative',
            borderBottom: activeButton === 'param' ? '3px solid black' : 'none',
          }}
        >
          PARÂMETROS
        </button>
      </div>
      {sectionContent}
    </div>
  )
}
