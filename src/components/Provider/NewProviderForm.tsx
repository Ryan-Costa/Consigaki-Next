'use client'

import api from '@/services/server/api'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { ButtonSave } from '../Common/ButtonSave'
import { Input } from '../Common/Input'
import ToggleSwitch from '../ToggleSwitch'

const schemaNewProviderForm = z.object({
  name: z.string().nonempty('Digite o nome do produto').toUpperCase(),
})

type NewProviderFormProps = z.infer<typeof schemaNewProviderForm>

export default function NewProviderForm() {
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
    api
      .post<NewProviderFormProps>('/providers/', dataForm)
      .then((response) => {
        console.log(response)
      })
      .catch((error) => {
        console.log(error)
      })

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
        <ButtonSave />
      </form>
    </>
  )
}
