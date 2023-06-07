import React, { useState, ChangeEvent } from 'react'
import { IconArrowBack, IconPartners } from '../../../public/icons'
import { ILoans } from '@/interfaces/IProps'

import { Dropdown } from '../Dropdown'
// import { useForm } from "react-hook-form";

import { Inter, Roboto } from '@next/font/google'

import DocumentDownload from '../DocumentDownload'
import { ButtonSave } from '../common/ButtonSave'
import { Input } from '../common/Input'
const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '700'],
})

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700'],
})

interface EditLoansProps {
  item: ILoans
  onClose: () => void
}

export default function EditLoans({ item, onClose }: EditLoansProps) {
  const [editedItem, setEditedItem] = useState<ILoans>(item)
  // const { control, handleSubmit } = useForm({
  //   defaultValues: {},
  // });

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
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
    <div className={inter.className}>
      <button className="" onClick={handleGoBack}>
        {IconArrowBack}
      </button>
      <div className="mt-12 flex gap-2">
        <h1 className={`${roboto.className} font-bold first-line:text-2xl`}>
          Detalhes da Esteira
        </h1>
        {IconPartners}
      </div>

      <div className="mt-5 flex items-center gap-2">
        <p className="text-base font-bold">Usuário</p>
        <div className="h-[1px] w-full bg-line-gray" />
      </div>

      <div className="mt-5 flex gap-6">
        <Input
          label="Nome"
          name="name"
          type="text"
          className="w-full"
          value={editedItem.userId}
          onChange={handleInputChange}
        />
        <Input
          label="E-mail"
          name="mail"
          type="text"
          className="w-full"
          value={editedItem.userId}
          onChange={handleInputChange}
        />
      </div>
      <div className="mb-6 mt-6 flex gap-6">
        <Input
          label="CPF"
          name="cpf"
          type="text"
          className="w-full"
          value={editedItem.cpf}
          onChange={handleInputChange}
        />
        <Input
          label="Celular"
          name="celular"
          type="text"
          placeholder="(00) 0 0000-0000"
          className="w-full"
          onChange={handleInputChange}
        />
        <Input
          label="Data de nascimento"
          name="dataNascimento"
          type="text"
          placeholder="00/00/0000"
          className="w-full"
          onChange={handleInputChange}
        />

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
        <Input
          label="Cadastro"
          name="cadastro"
          type="text"
          placeholder="00/00/0000"
          className="w-full"
          onChange={handleInputChange}
        />
        <Input
          label="Alterado"
          name="alterado"
          type="text"
          placeholder="00/00/0000"
          readOnly={true}
          disabled={true}
          className="w-full"
          onChange={handleInputChange}
        />
      </div>
      <div className="mt-5 flex items-center gap-2">
        <p className="text-base font-bold">Operação</p>
        <div className="h-[1px] w-full bg-line-gray" />
      </div>
      <div className="mt-5 flex gap-6">
        <Input
          label="Convênio"
          name="convenio"
          type="text"
          className="w-full"
          value={editedItem.productId}
          onChange={handleInputChange}
        />
        <Input
          label="Matrícula"
          name="matricula"
          type="text"
          className="w-full"
          value={editedItem.registration}
          onChange={handleInputChange}
        />
      </div>
      <div className="mb-6 mt-6 flex gap-6">
        <Input
          label="Cargo"
          name="cargo"
          type="text"
          placeholder="000.000.000-00"
          className="w-full"
          onChange={handleInputChange}
        />
        <Input
          label="Vínculo"
          name="vinculo"
          type="text"
          placeholder="(00) 0 0000-0000"
          className="w-full"
          onChange={handleInputChange}
        />
        <Input
          label="Consignatária"
          name="consignataria"
          type="text"
          placeholder="00/00/0000"
          className="w-full"
          value={editedItem.providerId}
          onChange={handleInputChange}
        />
        <Input
          label="Liberado"
          name="liberado"
          type="text"
          placeholder="00/00/0000"
          className="w-full"
          onChange={handleInputChange}
        />
      </div>
      <div className="mb-6 mt-6 flex gap-6">
        <Input
          label="Parcela"
          name="parcela"
          type="text"
          placeholder="00"
          className="w-full"
          onChange={handleInputChange}
        />
        <Input
          label="Prazo"
          name="prazo"
          type="text"
          placeholder="00/00/0000"
          className="w-full"
          onChange={handleInputChange}
        />
        <Input
          label="Taxa"
          name="taxa"
          type="text"
          placeholder="00/00/0000"
          className="w-full"
          onChange={handleInputChange}
        />
        <Input
          label="ADF"
          name="adf"
          type="text"
          placeholder="00/00/0000"
          className="w-full"
          onChange={handleInputChange}
        />
      </div>
      <div className="mb-6 mt-6 flex gap-6">
        <Input
          label="Data Averbação"
          name="dataAverbacao"
          type="text"
          placeholder="00/00/0000"
          className="w-full"
          onChange={handleInputChange}
        />
        <Input
          label="Data Solicitação"
          name="dataSolicitacao"
          type="text"
          placeholder="00/00/0000"
          className="w-full"
          onChange={handleInputChange}
        />
        <Input
          label="Data Pagamento"
          name="dataPagamento"
          type="text"
          placeholder="00/00/0000"
          className="w-full"
          onChange={handleInputChange}
        />
        <Input
          label="Status"
          name="status"
          type="text"
          placeholder="00/00/0000"
          className="w-full"
          onChange={handleInputChange}
        />
      </div>
      <div className="mb-6 mt-6 flex gap-6">
        <div className="flex w-full flex-col gap-2">
          <label htmlFor="" className="font-semibold">
            Observação de pendências
          </label>
          <textarea
            name="observacaoPendencias"
            placeholder="David Bessa Pontes"
            className="w-full rounded-lg border border-gray-400 px-6 py-2 outline-none"
            // value={editedItem.dateBirth}
            onChange={handleInputChange}
          />
        </div>
      </div>
      <div className="mt-5 flex items-center gap-2">
        <p className="text-base font-bold">Documentos</p>
        <div className="h-[1px] w-full bg-line-gray" />
      </div>
      <div className="mt-5 flex items-center gap-2">
        <h1
          className={`${roboto.className} whitespace-nowrap text-2xl font-bold`}
        >
          Fotos dos documentos
        </h1>
        <div className="h-[1px] w-full bg-line-gray" />
      </div>
      <p className="text-base">Imagens menos que 16MB</p>
      <div className="mt-5 flex gap-8">
        <DocumentDownload />
        <DocumentDownload />
        <DocumentDownload />
        <DocumentDownload />
      </div>
      <ButtonSave handleSave={handleSave} />
    </div>
  )
}
