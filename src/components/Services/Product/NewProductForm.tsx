'use client'

import { postRevalidateItems } from '@/functions/postRevalidateItems'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { useTransition } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { DropdownForm } from '../../DropdownForm'
import ToggleSwitch from '../../ToggleSwitch'
import { ButtonSave } from '../../compCommon/ButtonSave'
import { Input } from '../../compCommon/Input'

const schemaNewProductForm = z.object({
  name: z.string().nonempty('Digite o nome do produto').toUpperCase(),
  type: z.string(),
})

type NewProductFormProps = z.infer<typeof schemaNewProductForm>

export default function NewProductForm() {
  const [, startTransition] = useTransition()
  const { back } = useRouter()
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<NewProductFormProps>({
    resolver: zodResolver(schemaNewProductForm),
    defaultValues: {
      name: '',
      type: '',
    },
  })

  const handleFormSubmit = (dataForm: NewProductFormProps) => {
    const { name, type } = dataForm
    const dataFormFormatted = {
      name,
      type: Number(type),
    }

    const productsUrl = '/products'

    startTransition(() =>
      postRevalidateItems<NewProductFormProps>(productsUrl, dataFormFormatted),
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

          <div className="flex w-1/3 flex-col gap-2">
            <label htmlFor="" className="font-semibold">
              Tipo
            </label>
            <DropdownForm
              name="type"
              register={register}
              defaultValue="Selecione o tipo do produto"
              options={[
                { name: 'cartao', displayName: 'Cartão', value: 0 },
                { name: 'emprestimo', displayName: 'Empréstimo', value: 1 },
                { name: 'previdencia', displayName: 'Previdência', value: 2 },
                { name: 'seguro', displayName: 'Seguro', value: 3 },
                { name: 'diversos', displayName: 'Diversos', value: 99 },
              ]}
            />
          </div>
        </div>
        {errors.name && (
          <span className="text-md font-bold tracking-wide text-red-600">
            {errors.name.message}
          </span>
        )}
        <div className="mb-6 mt-6 flex gap-6">
          <Input
            label="Cadastro"
            type="text"
            name="cadastro"
            placeholder="00/00/0000"
          />
          <Input
            label="Alterado"
            type="text"
            name="alterado"
            placeholder="00/00/0000"
          />
        </div>
        <ToggleSwitch />
        <ButtonSave />
      </form>
    </>
  )
}
