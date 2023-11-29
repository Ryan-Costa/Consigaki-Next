'use client'

import { ButtonSave } from '@/components/common/ButtonSave'
import { Input } from '@/components/common/Input'
import { postRevalidateItems } from '@/functions/postRevalidateItems'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { useTransition } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import { z } from 'zod'

const schemaNewProviderForm = z.object({
  name: z.string().nonempty('Razão Social não pode ser vazio').toUpperCase(),
})

type NewProviderFormProps = z.infer<typeof schemaNewProviderForm>

export default function NewProviderForm() {
  const [, startTransition] = useTransition()
  const { back } = useRouter()
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
      postRevalidateItems<NewProviderFormProps>(providerUrl, dataForm).then(
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
        </div>
        {errors.name && (
          <span className="text-md font-bold tracking-wide text-red-600">
            {errors.name.message}
          </span>
        )}
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
        <ButtonSave type="submit" />
      </form>
    </>
  )
}
