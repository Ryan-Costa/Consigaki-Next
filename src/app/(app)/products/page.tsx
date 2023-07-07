import TableProducts from '@/components/Product/TableProducts'
import Loading from '@/components/UI/loading'
import { getProducts } from '@/services/getProducts'
import { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import { Suspense } from 'react'

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700'],
})

export const metadata: Metadata = {
  title: 'Produtos',
}

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
          <Suspense fallback={<Loading />}>
            <TableProducts productData={products} />
          </Suspense>
          {/* <Loading /> */}
        </>
      </div>
    </>
  )
}
