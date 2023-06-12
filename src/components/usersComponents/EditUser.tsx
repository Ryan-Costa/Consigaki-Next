import React, { useState, ChangeEvent } from 'react'
import { IconArrowBack, IconPartners } from '../../../public/icons'
import { Inter } from 'next/font/google'
import { Dropdown } from '../Dropdown'
import { UserProps } from '@/interfaces/IProps'
import { TableEditUsers } from '../table/TableEditUsers'
import { ButtonSave } from '../common/ButtonSave'
import { TableUserRequests } from './TableUserRequests'
import Calls from './Calls'
import BankData from './BankData'
const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '700'],
})

interface EditProps {
  item: UserProps
  onClose: () => void
}

export default function EditUser({ item, onClose }: EditProps) {
  const [editedItem, setEditedItem] = useState<UserProps>(item)
  const [activeSection, setActiveSection] = useState<string>('agreements')
  const [activeButton, setActiveButton] = useState('agreements')
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
  }

  const handleAgreementsSection = () => {
    setActiveSection('agreements')
  }

  const handleRequestsSection = () => {
    setActiveSection('requests')
  }

  const handleCallsSection = () => {
    setActiveSection('calls')
  }

  const handleBankDataSection = () => {
    setActiveSection('bankData')
  }

  const handleButtonClick = (section: any) => {
    setActiveButton(section)
  }

  const sectionContent =
    activeSection === 'agreements' ? (
      <>
        <div className="mt-4">
          <TableEditUsers />
        </div>
      </>
    ) : activeSection === 'requests' ? (
      <>
        <div className="custom-scrollbar mt-4 h-[255px] w-full overflow-auto">
          <TableUserRequests />
        </div>
      </>
    ) : activeSection === 'calls' ? (
      <>
        <div className="custom-scrollbar mt-4 h-[255px] w-full overflow-auto pr-[6px]">
          <Calls />
        </div>
      </>
    ) : activeSection === 'bankData' ? (
      <>
        <div className="custom-scrollbar mt-4 h-[255px] w-full overflow-auto">
          <BankData />
        </div>
      </>
    ) : null

  return (
    <div>
      <button className="" onClick={handleGoBack}>
        {IconArrowBack}
      </button>

      <div className="mt-12 flex gap-2">
        <h1 className="text-2xl font-bold">Editar Usuário</h1>
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
            Nome
          </label>
          <input
            name="nome"
            type="text"
            placeholder="David Bessa Pontes"
            className="w-full rounded-lg border border-gray-400 px-6 py-2 outline-none"
            value={editedItem.name}
            onChange={handleInputChange}
          />
        </div>
        <div className="flex w-full flex-col gap-2">
          <label htmlFor="" className="font-semibold">
            E-mail
          </label>
          <input
            name="nome"
            type="text"
            placeholder="OrpelNet@Gmail.acom"
            className="w-full rounded-lg border border-gray-400 px-6 py-2 outline-none"
            value={editedItem.mail}
            onChange={handleInputChange}
          />
        </div>
      </div>
      <div className="mb-6 mt-6 flex gap-6">
        <div className="flex w-full flex-col gap-2">
          <label htmlFor="" className="font-semibold">
            CPF
          </label>
          <input
            name="CPF"
            type="text"
            placeholder="000.000.000-00"
            className="w-full rounded-lg border border-gray-400 px-6 py-2 outline-none"
            value={editedItem.cpf}
            onChange={handleInputChange}
          />
        </div>
        <div className="flex w-full flex-col gap-2">
          <label htmlFor="" className="font-semibold">
            Celular
          </label>
          <input
            name="celular"
            type="text"
            placeholder="(00) 0 0000-0000"
            className="w-full rounded-lg border border-gray-400 px-6 py-2 outline-none"
            value={editedItem.cellPhoner}
            onChange={handleInputChange}
          />
        </div>
        <div className="flex w-full flex-col gap-2">
          <label htmlFor="" className="font-semibold">
            Data de nascimento
          </label>
          <input
            name="dataNascimento"
            type="text"
            placeholder="00/00/0000"
            className="w-full rounded-lg border border-gray-400 px-6 py-2 outline-none"
            value={editedItem.dateBirth}
            onChange={handleInputChange}
          />
        </div>
        <div className="flex w-full flex-col gap-2">
          <label htmlFor="" className="font-semibold">
            Perfil
          </label>
          <Dropdown
            defaultValue="Suporte"
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
        <div className="flex w-full flex-col gap-2">
          <label htmlFor="" className="font-semibold">
            Cadastro
          </label>
          <input
            name="cadastro"
            type="text"
            placeholder="00/00/0000"
            className="w-full rounded-lg border border-gray-400 px-6 py-2 outline-none"
            value={editedItem.register}
            onChange={handleInputChange}
          />
        </div>
        <div className="flex w-full flex-col gap-2">
          <label htmlFor="" className="font-semibold">
            Alterado
          </label>
          <input
            name="alterado"
            type="text"
            placeholder="00/00/0000"
            readOnly
            disabled
            className="w-full rounded-lg border border-gray-400 px-6 py-2 outline-none"
            value={editedItem.register}
          />
        </div>
      </div>
      <div className="flex w-full justify-center gap-11">
        <button
          className={`btn text-xl font-bold ${
            activeButton === 'agreements' ? 'active' : ''
          }`}
          onClick={() => {
            handleButtonClick('agreements')
            handleAgreementsSection()
          }}
          style={{
            position: 'relative',
            borderBottom:
              activeButton === 'agreements' ? '3px solid black' : 'none',
          }}
        >
          CONVÊNIOS
        </button>
        <button
          className={`btn z-0 text-xl font-bold ${
            activeButton === 'requests' ? 'active' : ''
          }`}
          onClick={() => {
            handleButtonClick('requests')
            handleRequestsSection()
          }}
          style={{
            position: 'relative',
            borderBottom:
              activeButton === 'requests' ? '3px solid black' : 'none',
          }}
        >
          SOLICITAÇÕES
        </button>
        <button
          className={`btn text-xl font-bold ${
            activeButton === 'calls' ? 'active' : ''
          }`}
          onClick={() => {
            handleButtonClick('calls')
            handleCallsSection()
          }}
          style={{
            position: 'relative',
            borderBottom: activeButton === 'calls' ? '3px solid black' : 'none',
          }}
        >
          ATENDIMENTOS
        </button>
        <button
          className={`btn text-xl font-bold ${
            activeButton === 'bankData' ? 'active' : ''
          }`}
          onClick={() => {
            handleButtonClick('bankData')
            handleBankDataSection()
          }}
          style={{
            position: 'relative',
            borderBottom:
              activeButton === 'bankData' ? '3px solid black' : 'none',
          }}
        >
          DADOS BANCÁRIOS
        </button>
      </div>
      {sectionContent}
      <ButtonSave handleSave={handleSave} />
    </div>
  )
}
