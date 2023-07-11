'use client'

import { z } from 'zod'
import { Input } from '../Common/Input'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/navigation'
import { ButtonSave } from '../Common/ButtonSave'
import { IProviderID } from '@/interfaces/IProps'
import { zodResolver } from '@hookform/resolvers/zod'
import { useTransition } from 'react'
import { patchRevalidateItems } from '@/functions/patchRevalidateItems'
import ToggleSwitch from '../ToggleSwitch'

const schemaProvidersForm = z.object({
  name: z.string(),
})

type ProvidersFormProps = z.infer<typeof schemaProvidersForm>

export default function ProviderForm({ data }: { data: IProviderID }) {
  const [, startTransition] = useTransition()
  const { back } = useRouter()

  const providers = data.data

  const { handleSubmit, register } = useForm<ProvidersFormProps>({
    resolver: zodResolver(schemaProvidersForm),
    defaultValues: {
      name: providers.name,
    },
  })

  const handleFormSubmit = (dataForm: ProvidersFormProps) => {
    console.log(dataForm)

    const providersUrl = `/providers/${providers.id}`

    startTransition(() =>
      patchRevalidateItems<ProvidersFormProps>(providersUrl, dataForm),
    )

    back()
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
