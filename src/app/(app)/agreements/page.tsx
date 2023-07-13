import TableAgreements from '@/components/Services/Agreement/TableAgreements'
import { Roboto } from 'next/font/google'
import { Metadata } from 'next'
import { getAgreements } from '@/services/getAgreements'
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
    return <p>Carregando...</p>
  }

  return (
    <>
      <div
        className={`${roboto.className} h-full w-full rounded-md bg-white px-6 py-14`}
      >
        <>
          <TableAgreements agreementData={agreements} />
        </>
      </div>
    </>
  )
}
