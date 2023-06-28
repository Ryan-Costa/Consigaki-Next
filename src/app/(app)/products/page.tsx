import TableProducts from '@/components/Table/TableProducts'

import { IDataProducts } from '@/interfaces/IProps'
import api from '../../../services/server/api'
import { Roboto } from 'next/font/google'

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700'],
})

export default async function Products(req: any) {
  const products = await api.post<IDataProducts>('/products/get-all', {
    name: '',
    page: 1,
    size: 10,
  })

  console.log(products)

  return (
    <>
      <div
        className={`${roboto.className} h-full w-full rounded-md bg-white px-6 py-14`}
      >
        <>
          <TableProducts data={products.data.data.products} />
        </>
      </div>
    </>
  )
}
