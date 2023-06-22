import React, { useState, ChangeEvent } from 'react'
import api from '@/services/server/api'
import { IProductID } from '@/interfaces/IProps'
import ProductForm from '@/components/Form/ProductForm'
// import { useForm } from "react-hook-form";


export default async function EditProduct({ params }: { params: { product: string } }) {
  const response = await api.get<IProductID>(`/products/${params.product}`)
  const productsById = response.data
  console.log(productsById)
  return <ProductForm data={productsById} />
}
