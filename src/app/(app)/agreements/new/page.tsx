'use client'

import { ButtonSave } from '@/components/compCommon/ButtonSave'
import { Input } from '@/components/compCommon/Input'
import { postRevalidateItems } from '@/functions/postRevalidateItems'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { useTransition } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import { z } from 'zod'

const schemaNewAgreementForm = z.object({
  name: z
    .string()
    .nonempty('Nome do Convênio não pode ser vazio')
    .toUpperCase(),
})

type NewAgreementFormProps = z.infer<typeof schemaNewAgreementForm>

export default function NewAgreementForm() {
  const [, startTransition] = useTransition()
  const { back } = useRouter()
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<NewAgreementFormProps>({
    resolver: zodResolver(schemaNewAgreementForm),
    defaultValues: {
      name: '',
    },
  })

  const handleFormSubmit = (dataForm: NewAgreementFormProps) => {
    const agreementUrl = '/agreements'

    startTransition(() =>
      postRevalidateItems<NewAgreementFormProps>(agreementUrl, dataForm).then(
        (response) => {
          if (response) {
            if (Object.values(response).length === 2) {
              toast.success(response.message)
              back()
            } else {
              toast.error(response.message)
            }
          }
        },
      ),
    )
  }

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)}>
      <div className="mt-6 flex gap-6">
        <Input
          register={register}
          label="Nome do Convênio"
          name="name"
          type="text"
          placeholder="---------- -------- -------"
          className="w-full"
        />
      </div>
      {errors.name && (
        <span className="text-md font-bold tracking-wide text-red-600">
          {errors.name.message}
        </span>
      )}
      <div className="mb-6 mt-6 flex gap-6">
        <Input
          label="Cadastro"
          name=""
          type="text"
          placeholder="00/00/0000"
          readOnly
          disabled
        />
        <Input
          label="Alterado"
          name=""
          type="text"
          placeholder="00/00/0000"
          readOnly
          disabled
        />
      </div>
      <ButtonSave />
    </form>
  )
}
