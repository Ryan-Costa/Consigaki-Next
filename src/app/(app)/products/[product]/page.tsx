import React from 'react'
import api from '@/services/server/api'
import { IProductID } from '@/interfaces/IProps'
import ProductForm from '@/components/Product/ProductForm'

export default async function EditProduct({
  params,
}: {
  params: { product: string }
}) {
  const response = await api.get<IProductID>(`/products/${params.product}`)
  const productsById = response.data
  console.log(productsById)

  return <ProductForm data={productsById} />
}

export async function generateMetadata({
  params,
}: {
  params: { product: string }
}) {
  return {
    title: `Editar Produto ${params.product}`,
  }
}
