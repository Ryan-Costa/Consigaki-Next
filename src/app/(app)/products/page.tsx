import TableProducts from '@/components/Table/TableProducts'
import AddProduct from '@/components/ProductsComponents/AddProduct'
import EditProduct from '@/components/ProductsComponents/EditProduct'

import { Dropdown } from '@/components/Dropdown'
import { SearchInput } from '@/components/SearchInput'
import { useEffect, useState } from 'react'
import { IconPartners } from '../../../../public/icons'

import { IDataProducts, IProducts } from '@/interfaces/IProps'
import api from '../../../services/server/api'
import { Roboto } from 'next/font/google'
import { ButtonAdd } from '@/components/Common/ButtonAdd'

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700'],
})

export default async function Products(req: any) {
  const products = await api.get<IDataProducts>('/products')

  // const [products, setProducts] = useState<IProducts[]>([])

  // useEffect(() => {
  //   ; (async () => {
  //     try {
  //       const response = await api.get<IDataProducts>('/products')
  //       setProducts(response.data.data.products)
  //     } catch (error) {
  //       console.log(error)
  //     }
  //   })()
  // }, [])

  return (
    <>
      <div
        className={`${roboto.className} h-full w-full rounded-md bg-white px-6 py-14`}
      >
        <>
          <TableProducts
            data={products.data.data.products}
          />
        </>
      </div>
    </>
  )
}
