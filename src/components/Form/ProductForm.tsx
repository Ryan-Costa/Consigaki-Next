'use client'

import { IProductID } from '@/interfaces/IProps'
import api from '@/services/server/api'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { ButtonSave } from '../Common/ButtonSave'
import { Input } from '../Common/Input'
import { DropdownForm } from '../DropdownForm'
import ToggleSwitch from '../ToggleSwitch'

const schemaProductForm = z.object({
  name: z.string(),
  type: z.string(),
})

type ProductsFormProps = z.infer<typeof schemaProductForm>

export default function ProductForm({ data }: { data: IProductID }) {
  const { back } = useRouter()
  const products = data.data

  const { handleSubmit, register } = useForm<ProductsFormProps>({
    resolver: zodResolver(schemaProductForm),
    defaultValues: {
      name: products.name,
      type: String(products.type),
    },
  })

  const handleFormSubmit = (dataForm: ProductsFormProps) => {
    const { name, type } = dataForm
    const dataFormFormatted = {
      name,
      type: Number(type),
    }
    console.log(dataFormFormatted)
    api
      .patch<ProductsFormProps>(`/products/${products.id}`, dataFormFormatted)
      .then((response) => {
        console.log(response)
      })
      .catch((error) => {
        console.log(error)
      })

    back()
  }

  const handleOnChange = (value: number) => {
    console.log(value)
  }

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)}>
      <div className="mt-6 flex gap-6">
        <Input
          register={register}
          label="Nome"
          type="text"
          name="name"
          className="w-full"
        />
        <div className="flex w-1/3 flex-col gap-2">
          <label htmlFor="" className="font-semibold">
            Tipo
          </label>
          <DropdownForm
            name="type"
            register={register}
            defaultValue={products.type}
            onSelect={handleOnChange}
            type="form"
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
