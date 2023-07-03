import AddProduct from '@/components/Product/AddProduct'
import { Metadata } from 'next'
import { Roboto } from 'next/font/google'

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700'],
})

export const metadata: Metadata = {
  title: 'Novo Produto',
}

export default function NewProduct() {
  return (
    <>
      <div
        className={`${roboto.className} h-full w-full rounded-md bg-white px-6 py-14`}
      >
        <AddProduct />
      </div>
    </>
  )
}
