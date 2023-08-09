import { TableLoans } from '@/components/Services/Loan/TableLoans'
import Loading from '@/components/UI/loading'
import { getLoans } from '@/services/getLoans'
import { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import { Suspense } from 'react'
const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700'],
})

export const metadata: Metadata = {
  title: 'Esteira',
}

export default async function Loans() {
  const loans = await getLoans(1)

  if (!loans) {
    return <Loading />
  }

  return (
    <>
      <div
        className={`${roboto.className} h-full w-full rounded-md bg-white px-6 py-14`}
      >
        <Suspense fallback={<Loading />}>
          <TableLoans loanData={loans} />
        </Suspense>
      </div>
    </>
  )
}
