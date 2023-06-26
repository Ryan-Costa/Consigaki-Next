'use client'

import { IProductID } from '@/interfaces/IProps'
import api from '@/services/server/api'
import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { ButtonSave } from '../Common/ButtonSave'
import { Input } from '../Common/Input'
import { Dropdown } from '../Dropdown'
import ToggleSwitch from '../ToggleSwitch'

const schemaProductForm = z.object({
  name: z.string(),
  type: z.number(),
})

type ProductsFormProps = z.infer<typeof schemaProductForm>

export default function ProductForm({ data }: { data: IProductID }) {
  const [dropdownValue, setDropdownValue] = useState<string>()
  // const { back } = useRouter()
  const products = data.data

  console.log(products)
  console.log(dropdownValue)
  const getTypeLabel = (type: number | undefined): string => {
    const typeMap: { [key: number]: string } = {
      0: 'Cartão',
      1: 'Empréstimo',
      2: 'Previdência',
      3: 'Seguro',
      99: 'Diversos',
    }
    return typeMap[type!] || 'Selecione um tipo'
  }

  const { handleSubmit, register } = useForm<ProductsFormProps>({
    resolver: zodResolver(schemaProductForm),
    defaultValues: {
      name: products.name,
      type: getTypeLabel(products.type),
    },
  })

  const handleFormSubmit = (dataForm: ProductsFormProps) => {
    const payload = { ...dataForm, dropdownValue }
    console.log(dropdownValue)
    console.log(payload)
    console.log(dataForm)
    api
      .put<ProductsFormProps>(`/products/${products.id}`, payload)
      .then((response) => {
        console.log(response)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  const handleDropdownSelect = (value: string) => {
    console.log(value)
    setDropdownValue(value)
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
          <Dropdown
            defaultValue={getTypeLabel(products.type)}
            type="form"
            className="w-full"
            onSelect={handleDropdownSelect}
            options={[
              'Cartão',
              'Empréstimo',
              'Previdência',
              'Seguro',
              'Diversos',
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
