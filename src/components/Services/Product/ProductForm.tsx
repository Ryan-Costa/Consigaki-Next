'use client'

import { z } from 'zod'
import { Input } from '../../Common/Input'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/navigation'
import { IProductID } from '@/interfaces/Product'
import { ButtonSave } from '../../Common/ButtonSave'
import { patchRevalidateItems } from '../../../functions/patchRevalidateItems'
import { zodResolver } from '@hookform/resolvers/zod'
import { DropdownForm } from '../../DropdownForm'
import { useTransition } from 'react'
import ToggleSwitch from '../../ToggleSwitch'
import { toast } from 'react-toastify'

const schemaProductForm = z.object({
  name: z.string().toUpperCase().nonempty('Nome do Produto não pode ser vazio'),
  type: z.string(),
})

type ProductsFormProps = z.infer<typeof schemaProductForm>

export default function ProductForm({ data }: { data: IProductID }) {
  const [, startTransition] = useTransition()
  const { back } = useRouter()

  const products = data.data

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<ProductsFormProps>({
    resolver: zodResolver(schemaProductForm),
    defaultValues: {
      name: products.name,
      type: String(products.type),
    },
  })

  console.log(products.type)

  const handleFormSubmit = (dataForm: ProductsFormProps) => {
    const { name, type } = dataForm
    const dataFormFormatted = {
      name,
      type: Number(type),
    }

    const productsUrl = `/products/${products.id}`

    startTransition(() =>
      patchRevalidateItems<ProductsFormProps>(
        productsUrl,
        dataFormFormatted,
      ).then((response) => {
        console.log(response)
        toast.success(response.message)
        back()
      }),
    )
  }

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)}>
      <div className="mt-6 flex gap-6">
        <div className="w-full">
          <Input
            register={register}
            label="Nome do Produto"
            type="text"
            name="name"
          />
          {errors.name && (
            <span className="text-md font-bold tracking-wide text-red-600">
              {errors.name.message}
            </span>
          )}
        </div>
        <div className="flex w-1/3 flex-col gap-2">
          <label htmlFor="" className="font-semibold">
            Tipo
          </label>
          <DropdownForm
            name="type"
            register={register}
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
      <div className="mb-6 mt-6 flex items-center gap-6">
        <Input
          label="Cadastro"
          type="text"
          name="createdAt"
          value={new Date(products.createdAt).toLocaleDateString()}
          readOnly
          disabled
        />
        <Input
          label="Alterado"
          type="text"
          name="updatedAt"
          value={new Date(products.updatedAt).toLocaleDateString()}
          readOnly
          disabled
        />
      </div>
      <ToggleSwitch isChecked={products.active} />
      <ButtonSave type="submit" />
    </form>
  )
}
