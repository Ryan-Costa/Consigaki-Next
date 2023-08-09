import TableAgreements from '@/components/Services/Agreement/TableAgreements'
import { Roboto } from 'next/font/google'
import { Metadata } from 'next'
import { getAgreements } from '@/services/getAgreements'
import Loading from '@/components/UI/loading'
import { Suspense } from 'react'
const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700'],
})

export const metadata: Metadata = {
  title: 'Convênios',
}

export default async function Agreements() {
  const agreements = await getAgreements(1)

  if (!agreements) {
    return <Loading />
  }

  return (
    <>
      <div
        className={`${roboto.className} h-full w-full rounded-md bg-white px-6 py-14`}
      >
        <>
          <Suspense fallback={<Loading />}>
            <TableAgreements agreementData={agreements} />
          </Suspense>
        </>
      </div>
    </>
  )
}
