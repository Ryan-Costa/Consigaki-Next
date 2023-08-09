import TableProviders from '@/components/Services/Provider/TableProviders'
import Loading from '@/components/UI/loading'
import { getProviders } from '@/services/getProviders'
import { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import { Suspense } from 'react'
const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700'],
})

export const metadata: Metadata = {
  title: 'Consignatárias',
}

export default async function Providers() {
  const providers = await getProviders(1)

  if (!providers) {
    return <Loading />
  }

  return (
    <>
      <div
        className={`${roboto.className} h-full w-full rounded-md bg-white px-6 py-14`}
      >
        <>
          <Suspense fallback={<Loading />}>
            <TableProviders providerData={providers} />
          </Suspense>
        </>
      </div>
    </>
  )
}
