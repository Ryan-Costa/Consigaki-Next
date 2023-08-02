import React, { ReactNode, createContext, useContext, useState } from 'react'
import { ProductGet, ProductGetAll } from '@/interfaces/AgreementProduct'
import useSWR from 'swr'
import api from '@/services/server/api'

type ProductContextType = {
  product: ProductGet
  children?: ReactNode
}

const ProductContext = createContext<ProductContextType | null>(null)

export const useProductContext = () => useContext(ProductContext)

export function ProductProvider({ children }: ProductContextType) {
  const [product, setProduct] = useState<ProductGet>()
  const URL = '/products/get-all'

  const body = { name: '', page: 1, size: 20 }

  const { data, error } = useSWR(URL, (url) =>
    api.post<ProductGetAll>(url, body).then((res) => res.data.data),
  )

  if (error) {
    return <div>Error ao carregar os dados</div>
  }

  if (!data) {
    return <div>Carregando...</div>
  }

  setProduct(data)

  console.log(data)
  console.log(product)

  if (!product) {
    return <div>Carregando...</div>
  }

  return (
    <ProductContext.Provider value={{ product }}>
      {children}
    </ProductContext.Provider>
  )
}
