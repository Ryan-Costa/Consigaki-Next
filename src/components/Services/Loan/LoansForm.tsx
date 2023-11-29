'use client'

import { patchRevalidateItems } from '@/functions/patchRevalidateItems'
import { putRevalidateItems } from '@/functions/putRevalidateItems'
import { ILoanID } from '@/interfaces/Loan'
import { zodResolver } from '@hookform/resolvers/zod'
// import { useRouter } from 'next/navigation'
import { ChangeEvent, useState, useTransition } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import { z } from 'zod'
import { DropdownForm } from '../../DropdownForm'
import { ButtonSave } from '../../compCommon/ButtonSave'
import { Input } from '../../compCommon/Input'
import LoansDocuments from './LoansDocuments'

const schemaLoansForm = z.object({
  status: z.string(),
  comments: z.string().optional(),
})

type LoansFormProps = z.infer<typeof schemaLoansForm>

export default function LoansForm({ data }: { data: ILoanID }) {
  const [valueTextPendencies, setValueTextPendencies] = useState('')
  const [, startTransition] = useTransition()
  //   const { back } = useRouter()
  const loans = data.data
  const [obsPendencies, setObsPendencies] = useState(loans.status !== 2)
  const {
    handleSubmit,
    register,
    reset,
    setError,
    formState: { errors },
  } = useForm<LoansFormProps>({
    resolver: zodResolver(schemaLoansForm),
    defaultValues: {
      status: String(loans.status),
    },
  })

  const statusChange = (value: string) => {
    if (value === '2') {
      setObsPendencies(false)
    } else {
      setObsPendencies(true)
      setValueTextPendencies('')
      reset({
        comments: undefined,
      })
    }
  }

  const handleChangePendencies = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = event.target
    setValueTextPendencies(value)
  }

  const handleFormSubmit = (dataForm: LoansFormProps) => {
    const updateStatusUrl = `/loans/${loans.id}/${dataForm.status}`
    const setPendingUrl = `/loans/${loans.id}/set-pending`
    console.log('dados do formulário', dataForm)

    if (dataForm.status === '2') {
      if (dataForm.comments === undefined || dataForm.comments === '') {
        console.log('seta o erro')
        setError('comments', {
          type: 'custom',
          message: 'Digite o motivo da pendência',
        })
      } else {
        console.log('seta pendencia')

        startTransition(() =>
          patchRevalidateItems<LoansFormProps>(setPendingUrl, dataForm.comments)
            .then((response) => {
              toast.success(response.message)
            })
            .catch((error) => {
              toast.error(error.response.message)
            }),
        )
        // back()
      }
    } else {
      console.log('atualiza o status')

      startTransition(() =>
        putRevalidateItems<LoansFormProps>(updateStatusUrl)
          .then((res) => {
            toast.success(res.response.message)
          })
          .catch((error) => {
            console.log('ERRO ===>', error)
            // toast.error(error.response.message)
          }),
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
          label="Nome"
          name="username"
          type="text"
          readOnly
          value={loans.user.name ?? 'Não possui'}
          className="w-full"
        />
        <Input
          label="E-mail"
          name="email"
          type="text"
          readOnly
          value={loans.user.email ?? 'Não possui'}
          className="w-full"
        />
      </div>
      <div className="mb-6 mt-6 flex gap-6">
        <Input
          label="CPF"
          name="cpf"
          type="text"
          readOnly
          value={loans.user.cpf ?? 'Não possui'}
          className="w-full"
        />
        <Input
          label="Celular"
          name="phoneNumber"
          type="text"
          readOnly
          value={loans.user.phoneNumber ?? 'Não possui'}
          className="w-full"
        />
        <Input
          label="Data de Nascimento"
          name="birthDate"
          type="text"
          readOnly
          value={
            new Date(loans.user.birthDate).toLocaleDateString() ?? 'Não possui'
          }
          className="w-full"
        />
      </div>
      <div className="mb-6 mt-6 flex gap-6">
        <Input
          label="Cadastro"
          name="createdAt"
          type="text"
          disabled
          value={new Date(loans.createdAt).toLocaleDateString() ?? 'Não possui'}
          className="w-full"
        />
        <Input
          label="Alterado"
          name="updatedAt"
          type="text"
          disabled
          value={new Date(loans.updatedAt).toLocaleDateString() ?? 'Não possui'}
          className="w-full"
        />
      </div>
      <div className="mt-5 flex items-center gap-2">
        <p className="text-base font-bold">Operação</p>
        <div className="h-[1px] w-full bg-line-gray" />
      </div>
      <div className="mt-5 flex gap-6">
        <Input
          label="Convênio"
          name="agreement"
          type="text"
          readOnly
          value={loans.userAgreements.agreement.name ?? 'Não possui'}
          className="w-full"
        />
        <Input
          label="Matrícula"
          name="registration"
          type="text"
          readOnly
          value={loans.userAgreements.registration ?? 'Não possui'}
          className="w-full"
        />
      </div>
      <div className="mb-6 mt-6 flex gap-6">
        <Input
          label="Cargo"
          name="occupation"
          type="text"
          readOnly
          value={loans.userAgreements.job_title ?? 'Não possui'}
          className="w-full"
        />
        <Input
          label="Vínculo"
          name="position"
          type="text"
          readOnly
          value={loans.userAgreements.position ?? 'Não possui'}
          className="w-full"
        />
        <Input
          label="Consignatária"
          name="provider"
          type="text"
          readOnly
          value={loans.provider.name ?? 'Não possui'}
          className="w-full"
        />
        <Input
          label="Liberado"
          name="liberado"
          type="text"
          readOnly
          className="w-full"
        />
      </div>
      <div className="mb-6 mt-6 flex gap-6">
        <Input
          label="Parcela"
          name="installment"
          type="text"
          readOnly
          value={loans.installment ?? 'Não possui'}
          className="w-full"
        />
        <Input
          label="Prazo"
          name="term"
          type="text"
          readOnly
          value={loans.term ?? 'Não possui'}
          className="w-full"
        />
        <Input
          label="Taxa"
          name="fee"
          type="text"
          readOnly
          value={loans.fee ?? 'Não possui'}
          className="w-full"
        />
        <Input
          label="ADF"
          name="adf"
          value={loans.adf ?? 'Não possui'}
          readOnly
          type="text"
          className="w-full"
        />
      </div>
      <div className="mb-6 mt-6 flex gap-6">
        <Input
          label="Data Averbação" // rever este campo
          name="dataAverbacao"
          type="text"
          readOnly
          className="w-full"
        />
        <Input
          label="Data Solicitação" // rever este campo
          name="dataSolicitacao"
          type="text"
          readOnly
          className="w-full"
        />
        <Input
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
            register={register}
            name="status"
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
            {...register('comments')}
            className="h-[150px] w-full resize-none rounded-lg border border-gray-400 px-6 py-2"
            disabled={obsPendencies}
            value={valueTextPendencies}
            onChange={handleChangePendencies}
          />
          {errors.comments?.message && (
            <span className="text-md font-bold tracking-wide text-red-600">
              {errors.comments.message}
            </span>
          )}
        </div>
      </div>
      {loans.loansDocuments.length > 0 ? (
        <LoansDocuments loans={loans} />
      ) : (
        <h2 className="font-semibold">Não há documentos</h2>
      )}

      <ButtonSave type="submit" />
    </form>
  )
}
