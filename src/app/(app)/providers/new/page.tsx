import AddProvider from '@/components/ProvidersComponents/AddProvider'
import { Roboto } from 'next/font/google'

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700'],
})

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
