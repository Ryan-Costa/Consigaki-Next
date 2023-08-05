import { TableLoans } from '@/components/Services/Loan/TableLoans'
import { getLoans } from '@/services/getLoans'
import { Metadata } from 'next'
import { Roboto } from 'next/font/google'
const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700'],
})

export const metadata: Metadata = {
  title: 'Esteira',
}

export default async function Loans() {
  const loans = await getLoans(1)
  return (
    <>
      <div
        className={`${roboto.className} h-full w-full rounded-md bg-white px-6 py-14`}
      >
        <TableLoans loanData={loans} />
      </div>
    </>
  )
}
