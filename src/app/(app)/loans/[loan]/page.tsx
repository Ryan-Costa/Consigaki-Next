import { ILoanID } from '@/interfaces/Loan'
import LoansForm from '@/components/Services/Loan/LoansForm'
import api from '@/services/server/api'

export default async function EditLoans({
  params,
}: {
  params: { loan: string }
}) {
  const response = await api.get<ILoanID>(`/loans/${params.loan}`)
  const loansById = response.data

  return <LoansForm data={loansById} />
}

export async function generateMetadata({
  params,
}: {
  params: { loan: string }
}) {
  return {
    title: `Editar Esteira ${params.loan}`,
  }
}
