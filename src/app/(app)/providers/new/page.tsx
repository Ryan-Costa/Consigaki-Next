'use client'

import { z } from 'zod'
import { Input } from '@/components/Common/Input'
import { useForm } from 'react-hook-form'
import { Metadata } from 'next'
import { useRouter } from 'next/navigation'
import { ButtonSave } from '@/components/Common/ButtonSave'
import { zodResolver } from '@hookform/resolvers/zod'
import { useTransition } from 'react'
import { postRevalidateItems } from '@/functions/postRevalidateItems'
import ToggleSwitch from '@/components/ToggleSwitch'

export const metadata: Metadata = {
  title: 'Nova Consignatária',
}

const schemaNewProviderForm = z.object({
  name: z.string().nonempty('Digite o nome do produto').toUpperCase(),
})

type NewProviderFormProps = z.infer<typeof schemaNewProviderForm>

export default function NewProviderForm() {
  const [isPending, startTransition] = useTransition()
  const { back } = useRouter()
  console.log(isPending)
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<NewProviderFormProps>({
    resolver: zodResolver(schemaNewProviderForm),
    defaultValues: {
      name: '',
    },
  })

  const handleFormSubmit = (dataForm: NewProviderFormProps) => {
    const providerUrl = '/providers'

    startTransition(() =>
      postRevalidateItems<NewProviderFormProps>(providerUrl, dataForm),
    )

    back()
  }

  return (
    <>
      <form onSubmit={handleSubmit(handleFormSubmit)}>
        <div className="mt-6 flex gap-6">
          <Input
            register={register}
            label="Razão Social"
            type="text"
            name="name"
            placeholder="Digite o nome"
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
            disabled
            classNameInput="cursor-no-drop"
          />
          <Input
            label="Alterado"
            name="alterado"
            type="text"
            placeholder="00/00/0000"
            disabled
            classNameInput="cursor-no-drop"
          />
        </div>
        <ToggleSwitch />
        <ButtonSave type="submit" />
      </form>
    </>
  )
}
