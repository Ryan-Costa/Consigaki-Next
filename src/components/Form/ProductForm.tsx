'use client'

import { IProductID, IProducts } from "@/interfaces/IProps";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { ButtonSave } from "../Common/ButtonSave";
import { Input } from "../Common/Input";
import ToggleSwitch from "../ToggleSwitch";


const schemaProductForm = z.object({
  name: z.string(),
  createdAt: z.string(),
  updatedAt: z.string(),
})

type ProductsFormProps = z.infer<typeof schemaProductForm>

export default function ProductForm({ data }: { data: IProductID }) {
  const { back } = useRouter()
  const products = data.data
  console.log(products)
  const { 
    handleSubmit, 
    register, 
    formState: { errors},
    setValue
  } = useForm<ProductsFormProps>({
    resolver: zodResolver(schemaProductForm),
    defaultValues: {
      name: products.name,
      createdAt: products.createdAt,
      updatedAt: products.updatedAt
    }
  })

    setValue('name', products.name);
    setValue('createdAt', products.createdAt);
    setValue('updatedAt', products.updatedAt);

  const handleFormSubmit = (dataForm: ProductsFormProps) => {
    console.log(dataForm)
  }

  const handleSave = () => {
    // back()
  }

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)}>
      <div className="mt-6 flex gap-6">
        <Input
          {...register('name')}
          label="Nome"
          type="text"
          name="nome"
          className="w-full"
          
        />
      </div>
      <div className="mb-6 mt-6 flex gap-6">
        <Input
          {...register('createdAt')}
          label="Cadastro"
          type="date"
          name="cadastro"
          
        />
        <Input
          {...register('updatedAt')}
          label="Alterado"
          type="date"
          name="alterado"
        />
      </div>
      <ToggleSwitch />
      <ButtonSave type="submit" />
    </form>
  )
}