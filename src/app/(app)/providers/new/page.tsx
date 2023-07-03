import AddProvider from '@/components/Provider/AddProvider'
import { Metadata } from 'next'
import { Roboto } from 'next/font/google'

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700'],
})

export const metadata: Metadata = {
  title: 'Nova Consignatária',
}

export default function NewProvider() {
  return (
    <>
      <div
        className={`${roboto.className} h-full w-full rounded-md bg-white px-6 py-14`}
      >
        <AddProvider />
      </div>
    </>
  )
}
