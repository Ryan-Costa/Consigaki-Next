'use client'

import { patchRevalidateItems } from '@/functions/patchRevalidateItems'
import { ILoanID } from '@/interfaces/IProps'
import { zodResolver } from '@hookform/resolvers/zod'
import { Roboto } from 'next/font/google'
import { useRouter } from 'next/navigation'
import { useTransition } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { ButtonSave } from '../Common/ButtonSave'
import { Input } from '../Common/Input'
import DocumentDownload from '../DocumentDownload'
import { DropdownForm } from '../DropdownForm'
import LoansDocuments from './LoansDocuments'

const schamaLoansForm = z.object({
  username: z.string(),
  registration: z.string(),
  agreement: z.string(),
})

type LoansFormProps = z.infer<typeof schamaLoansForm>

export default function LoansForm({ data }: { data: ILoanID }) {
  const [isPending, startTransition] = useTransition()
  console.log(isPending)
  const { back } = useRouter()

  const loans = data.data

  const { handleSubmit, register } = useForm<LoansFormProps>({
    resolver: zodResolver(schamaLoansForm),
    defaultValues: {
      username: loans.user.name,
      registration: loans.userAgreements.registration,
      agreement: loans.userAgreements.job_title,
    },
  })

  const handleFormSubmit = (dataForm: LoansFormProps) => {
    const loansUrl = `/loans/${loans.id}`

    startTransition(() =>
      patchRevalidateItems<LoansFormProps>(loansUrl, dataForm),
    )
    back()
  }

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)}>
      <div className="mt-5 flex items-center gap-2">
        <p className="text-base font-bold">Usuário</p>
        <div className="h-[1px] w-full bg-line-gray" />
      </div>
      <div className="mb-6 mt-6 flex gap-6">
        <div className="flex w-full flex-col gap-2">
          <label htmlFor="" className="font-semibold">
            Acesso
          </label>
          <DropdownForm
            name="type"
            register={register}
            defaultValue={loans.active}
            options={[
              {
                name: 'loginBloquado',
                displayName: 'Login Bloqueado',
                value: 0,
              },
              {
                name: 'loginLiberado',
                displayName: 'Login Liberado',
                value: 1,
              },
            ]}
          />
        </div>
        <Input
          register={register}
          label="Cadastro"
          name="createdAt"
          type="text"
          disabled
          className="w-full"
        />
        <Input
          register={register}
          label="Alterado"
          name="updatedAt"
          type="text"
          disabled
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
          className="w-full"
        />
        <Input
          register={register}
          label="Matrícula"
          name="registration"
          type="text"
          className="w-full"
        />
      </div>
      <div className="mb-6 mt-6 flex gap-6">
        <Input
          register={register}
          label="Cargo"
          name="job_title"
          type="text"
          className="w-full"
        />
        <Input
          register={register}
          label="Vínculo"
          name="position"
          type="text"
          className="w-full"
        />
        <Input
          register={register}
          label="Consignatária"
          name="provider"
          type="text"
          className="w-full"
        />
        <Input
          register={register}
          label="Liberado"
          name="liberado"
          type="text"
          className="w-full"
        />
      </div>
      <div className="mb-6 mt-6 flex gap-6">
        <Input
          register={register}
          label="Parcela"
          name="installment"
          type="text"
          className="w-full"
        />
        <Input
          register={register}
          label="Prazo"
          name="term"
          type="text"
          className="w-full"
        />
        <Input
          register={register}
          label="Taxa"
          name="fee"
          type="text"
          className="w-full"
        />
        <Input
          register={register}
          label="ADF"
          name="adf"
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
          className="w-full"
        />
        <Input
          register={register}
          label="Data Solicitação" // rever este campo
          name="dataSolicitacao"
          type="text"
          className="w-full"
        />
        <Input
          register={register}
          label="Data Pagamento" // rever este campo
          name="dataPagamento"
          type="text"
          className="w-full"
        />
        <Input
          register={register}
          label="Status"
          name="status"
          type="text"
          className="w-full"
        />
      </div>
      <div className="mb-6 mt-6 flex gap-6">
        <div className="flex w-full flex-col gap-2">
          <label htmlFor="" className="font-semibold">
            Observação de pendências
          </label>
          <textarea
            name="observacaoPendencias"
            className="w-full rounded-lg border border-gray-400 px-6 py-2"
          />
        </div>
      </div>
      <LoansDocuments />
      <ButtonSave type="submit" />
    </form>
  )
}
