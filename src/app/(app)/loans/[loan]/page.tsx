import LoansForm from '@/components/Loan/LoansForm'
import { ILoanID } from '@/interfaces/IProps'
import api from '@/services/server/api'

export default async function EditLoans({
  params,
}: {
  params: { loan: string }
}) {
  const response = await api.get<ILoanID>(`/loans/${params.loan}`)
  const loansById = response.data
  console.log(loansById)

  return <LoansForm data={loansById} />
}
