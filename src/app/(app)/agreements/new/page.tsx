'use client'

import { z } from 'zod'
import { Metadata } from 'next'
import { useTransition } from 'react'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { postRevalidateItems } from '@/functions/postRevalidateItems'
import { Input } from '@/components/Common/Input'
import ToggleSwitch from '@/components/ToggleSwitch'
import { ButtonSave } from '@/components/Common/ButtonSave'

export const metadata: Metadata = {
  title: 'Novo Convênio',
}

const schemaNewAgreementForm = z.object({
  name: z.string().nonempty('Digite o nome do produto').toUpperCase(),
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
      postRevalidateItems<NewAgreementFormProps>(agreementUrl, dataForm),
    )

    back()
  }

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)}>
      <div className="mt-6 flex gap-6">
        <Input
          register={register}
          label="Nome"
          name="nome"
          type="text"
          placeholder="---------- -------- -------"
          className="w-full"
        />
        {errors.name && (
          <span className="text-md font-bold tracking-wide text-red-600">
            {errors.name.message}
          </span>
        )}
      </div>
      <div className="mb-6 mt-6 flex gap-6">
        <Input
          label="Cadastro"
          name="cadastro"
          type="text"
          placeholder="00/00/0000"
        />
        <Input
          label="Alterado"
          name="alterado"
          type="text"
          placeholder="00/00/0000"
        />
      </div>
      <ToggleSwitch />
      <ButtonSave type="submit" />
    </form>
  )
}
