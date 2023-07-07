'use client'

import { patchRevalidateItems } from '@/functions/patchRevalidateItems'
import { ILoanID } from '@/interfaces/IProps'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { useState, useTransition } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { ButtonSave } from '../Common/ButtonSave'
import { Input } from '../Common/Input'
import { DropdownForm } from '../DropdownForm'
import LoansDocuments from './LoansDocuments'
import { putRevalidateItems } from '@/functions/putRevalidateItems'

const schamaLoansForm = z.object({
  status: z.number(),
  observation: z.string(),
})

type LoansFormProps = z.infer<typeof schamaLoansForm>

export default function LoansForm({ data }: { data: ILoanID }) {
  const [obsPendencies, setObsPendencies] = useState(true)
  const [, startTransition] = useTransition()
  const { back } = useRouter()

  const loans = data.data

  const { handleSubmit, register } = useForm<LoansFormProps>({
    resolver: zodResolver(schamaLoansForm),
    defaultValues: {
      status: loans.status,
    },
  })

  const statusChange = (value: string) => {
    console.log('valor do status:', +value)
    value === '2' ? setObsPendencies(false) : setObsPendencies(true)
  }

  const handleFormSubmit = (dataForm: LoansFormProps) => {
    const loansUrl = `/loans/${loans.id}`
    console.log(dataForm)

    if (dataForm.status !== 0) {
      startTransition(() =>
        patchRevalidateItems<LoansFormProps>(loansUrl, dataForm),
      )
      back()
    } else {
      startTransition(() =>
        putRevalidateItems<LoansFormProps>(loansUrl, dataForm),
      )
    }
  }

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)}>
      <div className="mt-5 flex items-center gap-2">
        <p className="text-base font-bold">Cliente</p>
        <div className="h-[1px] w-full bg-line-gray" />
      </div>
      <div className="mb-6 mt-6 flex gap-6">
        <Input
          register={register}
          label="Nome"
          name="username"
          type="text"
          readOnly
          value={loans.user.name}
          className="w-full"
        />
        <Input
          register={register}
          label="E-mail"
          name="email"
          type="text"
          readOnly
          value={loans.user.email}
          className="w-full"
        />
      </div>
      <div className="mb-6 mt-6 flex gap-6">
        <Input
          register={register}
          label="CPF"
          name="cpf"
          type="text"
          readOnly
          value={loans.user.cpf}
          className="w-full"
        />
        <Input
          register={register}
          label="Celular"
          name="phoneNumber"
          type="text"
          readOnly
          value={loans.user.phoneNumber}
          className="w-full"
        />
        <Input
          register={register}
          label="Data de Nascimento"
          name="birthDate"
          type="text"
          readOnly
          value={new Date(loans.user.birthDate).toLocaleDateString()}
          className="w-full"
        />
      </div>
      <div className="mb-6 mt-6 flex gap-6">
        <Input
          register={register}
          label="Cadastro"
          name="createdAt"
          type="text"
          disabled
          value={new Date(loans.createdAt).toLocaleDateString()}
          className="w-full"
        />
        <Input
          register={register}
          label="Alterado"
          name="updatedAt"
          type="text"
          disabled
          value={new Date(loans.updatedAt).toLocaleDateString()}
          className="w-full"
        />
      </div>
      <div className="mt-5 flex items-center gap-2">
        <p className="text-base font-bold">Operação</p>
        <div className="h-[1px] w-full bg-line-gray" />
      </div>
      <div className="mt-5 flex gap-6">
        <Input
          register={register}
          label="Convênio"
          name="agreement"
          type="text"
          readOnly
          value={loans.userAgreements.agreement.name}
          className="w-full"
        />
        <Input
          register={register}
          label="Matrícula"
          name="registration"
          type="text"
          readOnly
          value={loans.userAgreements.registration}
          className="w-full"
        />
      </div>
      <div className="mb-6 mt-6 flex gap-6">
        <Input
          register={register}
          label="Cargo"
          name="occupation"
          type="text"
          readOnly
          value={loans.userAgreements.job_title}
          className="w-full"
        />
        <Input
          register={register}
          label="Vínculo"
          name="position"
          type="text"
          readOnly
          value={loans.userAgreements.position}
          className="w-full"
        />
        <Input
          register={register}
          label="Consignatária"
          name="provider"
          type="text"
          readOnly
          value={loans.provider.name}
          className="w-full"
        />
        <Input
          register={register}
          label="Liberado"
          name="liberado"
          type="text"
          readOnly
          className="w-full"
        />
      </div>
      <div className="mb-6 mt-6 flex gap-6">
        <Input
          register={register}
          label="Parcela"
          name="installment"
          type="text"
          readOnly
          value={loans.installment}
          className="w-full"
        />
        <Input
          register={register}
          label="Prazo"
          name="term"
          type="text"
          readOnly
          value={loans.term}
          className="w-full"
        />
        <Input
          register={register}
          label="Taxa"
          name="fee"
          type="text"
          readOnly
          value={loans.fee}
          className="w-full"
        />
        <Input
          register={register}
          label="ADF"
          name="adf"
          value={loans.adf}
          readOnly
          type="text"
          className="w-full"
        />
      </div>
      <div className="mb-6 mt-6 flex gap-6">
        <Input
          register={register}
          label="Data Averbação" // rever este campo
          name="dataAverbacao"
          type="text"
          readOnly
          className="w-full"
        />
        <Input
          register={register}
          label="Data Solicitação" // rever este campo
          name="dataSolicitacao"
          type="text"
          readOnly
          className="w-full"
        />
        <Input
          register={register}
          label="Data Pagamento" // rever este campo
          name="dataPagamento"
          type="text"
          readOnly
          className="w-full"
        />
        <div className="flex w-full flex-col gap-2">
          <label htmlFor="" className="font-semibold">
            Status
          </label>
          <DropdownForm
            name="Status"
            register={register}
            defaultValue={loans.status}
            valueSelected={statusChange}
            options={[
              { name: 'solicitado', displayName: 'Solicitado', value: 0 },
              { name: 'crivo', displayName: 'Crivo', value: 1 },
              { name: 'pendente', displayName: 'Pendente', value: 2 },
              { name: 'reprovado', displayName: 'Reprovado', value: 3 },
              { name: 'cancelado', displayName: 'Cancelado', value: 4 },
              { name: 'integrado', displayName: 'Integrado', value: 5 },
              { name: 'pago', displayName: 'Pago', value: 99 },
            ]}
          />
        </div>
      </div>
      <div className="mb-6 mt-6 flex gap-6">
        <div className="flex w-full flex-col gap-2">
          <label htmlFor="" className="font-semibold">
            Observação de pendências
          </label>
          <textarea
            name="observacaoPendencias"
            className="w-full rounded-lg border border-gray-400 px-6 py-2"
            disabled={obsPendencies}
          />
        </div>
      </div>
      <LoansDocuments />
      <ButtonSave type="submit" />
    </form>
  )
}
