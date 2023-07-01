'use client'

import { IProviderID } from '@/interfaces/IProps'
import api from '@/services/server/api'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { ButtonSave } from '../Common/ButtonSave'
import { Input } from '../Common/Input'
import ToggleSwitch from '../ToggleSwitch'

const schemaProvidersForm = z.object({
  name: z.string(),
})

type ProvidersFormProps = z.infer<typeof schemaProvidersForm>

export default function ProviderForm({ data }: { data: IProviderID }) {
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
    api
      .patch<ProvidersFormProps>(`/providers/${providers.id}`, dataForm)
      .then((response) => {
        console.log(response)
      })
      .catch((error) => {
        console.log(error)
      })

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
          name="cadastro"
          type="text"
          value={new Date(providers.createdAt).toLocaleDateString()}
        />
        <Input
          label="Alterado"
          name="alterado"
          type="text"
          value={new Date(providers.updatedAt).toLocaleDateString()}
        />
      </div>
      <ToggleSwitch isChecked={true} />
      <ButtonSave type="submit" />
    </form>
  )
}
