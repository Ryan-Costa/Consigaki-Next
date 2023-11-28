'use client'

import { ButtonSave } from '@/components/Common/ButtonSave'
import { Input } from '@/components/Common/Input'
import { DropdownForm } from '@/components/DropdownForm'
import { postRevalidateItems } from '@/functions/postRevalidateItems'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { useTransition } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import { z } from 'zod'

const validationOptions = ['0', '1', '2', '99'] as const

const schemaNewProductForm = z.object({
  name: z.string().nonempty('Nome do Produto não pode ser vazio').toUpperCase(),
  type: z.enum(validationOptions, {
    errorMap: () => ({ message: 'Selecione um tipo' }),
  }),
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
  })

  const handleFormSubmit = (dataForm: NewProductFormProps) => {
    const { name, type } = dataForm
    const dataFormFormatted = {
      name,
      type: Number(type),
    }

    const productsUrl = '/products'

    startTransition(() =>
      postRevalidateItems<NewProductFormProps>(
        productsUrl,
        dataFormFormatted,
      ).then((response) => {
        console.log(response)
        if (response) {
          if (Object.values(response).length === 2) {
            toast.success(response.message)
            back()
          } else {
            toast.error(response.message)
          }
        }
      }),
    )
  }

  return (
    <>
      <form onSubmit={handleSubmit(handleFormSubmit)}>
        <div className="mt-6 flex gap-6">
          <div className="flex w-full flex-col">
            <Input
              register={register}
              label="Nome do Produto"
              type="text"
              name="name"
              placeholder="---------- -------- -------"
              className="w-full"
            />
            {errors.name && (
              <span className="text-md font-bold tracking-wide text-red-600">
                {errors.name.message}
              </span>
            )}
          </div>
          <div className="flex w-1/3 flex-col">
            <div className="flex w-full flex-col gap-2">
              <label htmlFor="" className="font-semibold">
                Tipo
              </label>
              <DropdownForm
                name="type"
                register={register}
                options={[
                  { name: 'selecione', displayName: 'Selecione', value: 999 },
                  { name: 'cartao', displayName: 'Cartão', value: 0 },
                  { name: 'emprestimo', displayName: 'Empréstimo', value: 1 },
                  { name: 'previdencia', displayName: 'Previdência', value: 2 },
                  { name: 'seguro', displayName: 'Seguro', value: 3 },
                  { name: 'diversos', displayName: 'Diversos', value: 99 },
                ]}
              />
            </div>
            {errors.type && (
              <span className="text-md font-bold tracking-wide text-red-600">
                {errors.type.message}
              </span>
            )}
          </div>
        </div>

        <div className="mb-6 mt-6 flex gap-6">
          <Input
            label="Cadastro"
            type="text"
            name="cadastro"
            placeholder="00/00/0000"
            disabled
            readOnly
          />
          <Input
            label="Alterado"
            type="text"
            name="alterado"
            placeholder="00/00/0000"
            disabled
            readOnly
          />
        </div>
        <ButtonSave />
      </form>
    </>
  )
}
