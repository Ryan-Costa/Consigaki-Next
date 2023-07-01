'use client'

import TableProviders from '@/components/Table/TableProviders'
import { getProviders } from '@/services/getProviders'
import { Roboto } from 'next/font/google'
const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700'],
})

export default async function Providers() {
  const providers = await getProviders(1)

  if (!providers) {
    return <p>Carregando...</p>
  }

  return (
    <>
      <div
        className={`${roboto.className} h-full w-full rounded-md bg-white px-6 py-14`}
      >
        <>
          <TableProviders providerData={providers} />
        </>
      </div>
    </>
  )
}
