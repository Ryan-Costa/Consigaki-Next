'use client'

import { patchRevalidateItems } from '@/functions/patchRevalidateItems'
import { IProviderID } from '@/interfaces/Provider'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { useTransition } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import { z } from 'zod'
import ToggleSwitch from '../../ToggleSwitch'
import { ButtonSave } from '../../compCommon/ButtonSave'
import { Input } from '../../compCommon/Input'

const schemaProvidersForm = z.object({
  name: z.string().nonempty('Razão Social não pode ser vazio'),
})

type ProvidersFormProps = z.infer<typeof schemaProvidersForm>

export default function ProviderForm({ data }: { data: IProviderID }) {
  const [, startTransition] = useTransition()
  const { back } = useRouter()

  const providers = data.data

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<ProvidersFormProps>({
    resolver: zodResolver(schemaProvidersForm),
    defaultValues: {
      name: providers.name,
    },
  })

  const handleFormSubmit = (dataForm: ProvidersFormProps) => {
    const providersUrl = `/providers/${providers.id}`

    startTransition(() =>
      patchRevalidateItems<ProvidersFormProps>(providersUrl, dataForm).then(
        (response) => {
          toast.success(response.message)
          back()
        },
      ),
    )
  }

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)}>
      <div className="mt-6 flex gap-6">
        <Input
          register={register}
          label="Razão Social"
          name="name"
          type="text"
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
          name="createdAt"
          type="text"
          disabled
          classNameInput="cursor-no-drop"
          value={new Date(providers.createdAt).toLocaleDateString()}
        />
        <Input
          label="Alterado"
          name="updatedAt"
          type="text"
          disabled
          classNameInput="cursor-no-drop"
          value={new Date(providers.updatedAt).toLocaleDateString()}
        />
      </div>
      <ToggleSwitch isChecked={providers.active} />
      <ButtonSave type="submit" />
    </form>
  )
}
