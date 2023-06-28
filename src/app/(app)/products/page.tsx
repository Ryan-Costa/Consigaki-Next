import TableProducts from '@/components/Table/TableProducts'

import { IDataProducts } from '@/interfaces/IProps'
import api from '../../../services/server/api'
import { Roboto } from 'next/font/google'

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700'],
})
// const callbackDataFetching = (params: any) => {
//   console.log('Dados recebidos: ', params)
// }

export const getProducts = async (pageNumber: number) => {
  const response = await api.post<IDataProducts>('/products/get-all', {
    name: '',
    page: pageNumber,
    size: 10,
  })

  console.log(pageNumber)

  return response.data
}

export default async function Products() {
  const products = await getProducts(1)
  console.log(products)
  console.log(products.data.products)

  return (
    <>
      <div
        className={`${roboto.className} h-full w-full rounded-md bg-white px-6 py-14`}
      >
        <>
          <TableProducts
            productData={products}
            // callback={callbackDataFetching}
          />
        </>
      </div>
    </>
  )
}
