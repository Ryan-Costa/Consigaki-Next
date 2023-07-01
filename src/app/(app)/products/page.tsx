import TableProducts from '@/components/Products/TableProducts'
import { getProducts } from '@/services/getProducts'
import { Roboto } from 'next/font/google'

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700'],
})

export default async function Products() {
  const products = await getProducts(1)

  if (!products) {
    return <p>Carregando...</p>
  }

  return (
    <>
      <div
        className={`${roboto.className} h-full w-full rounded-md bg-white px-6 py-14`}
      >
        <>
          <TableProducts productData={products} />
        </>
      </div>
    </>
  )
}
