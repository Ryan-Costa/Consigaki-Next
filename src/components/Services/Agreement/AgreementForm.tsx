'use client'

import { z } from 'zod'
import { Input } from '../../Common/Input'
import { useForm } from 'react-hook-form'
import { ButtonSave } from '../../Common/ButtonSave'
import { zodResolver } from '@hookform/resolvers/zod'
import { IAgreementID } from '@/interfaces/Agreement'
import { useTransition } from 'react'
import { patchRevalidateItems } from '@/functions/patchRevalidateItems'
import ToggleSwitch from '../../ToggleSwitch'
import AgreementDetails from './AgreementDetails'

const schemaAgreementForm = z.object({
  name: z
    .string()
    .nonempty('Nome do Convênio não pode ser vazio')
    .toUpperCase(),
})

type AgreementsFormProps = z.infer<typeof schemaAgreementForm>

export default function AgreementForm({ data }: { data: IAgreementID }) {
  const [, startTransition] = useTransition()

  const agreements = data.data

  console.log(agreements)

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<AgreementsFormProps>({
    resolver: zodResolver(schemaAgreementForm),
    defaultValues: {
      name: agreements.name,
    },
  })

  const handleFormSubmit = (dataForm: AgreementsFormProps) => {
    console.log(dataForm)

    const agreementsUrl = `/agreements/${agreements.id}`

    startTransition(() =>
      patchRevalidateItems<AgreementsFormProps>(agreementsUrl, dataForm).then(
        (response) => console.log(response),
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
          value={new Date(agreements.createdAt).toLocaleDateString()}
          readOnly
          disabled
        />
        <Input
          label="Alterado"
          name="alterado"
          type="text"
          value={new Date(agreements.updatedAt).toLocaleDateString()}
          readOnly
          disabled
        />
      </div>
      <ToggleSwitch isChecked={agreements.active} />
      <ButtonSave />
      <AgreementDetails />
    </form>
  )
}
