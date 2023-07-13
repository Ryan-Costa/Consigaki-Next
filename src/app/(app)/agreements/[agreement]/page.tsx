import AgreementForm from '@/components/Services/Agreement/AgreementForm'
import { IAgreementID } from '@/interfaces/Agreement'
import api from '@/services/server/api'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Consignatárias',
}

export default async function EditAgreement({
  params,
}: {
  params: { agreement: string }
}) {
  const response = await api.get<IAgreementID>(
    `/agreements/${params.agreement}`,
  )
  const agreementsById = response.data
  return <AgreementForm data={agreementsById} />
}

export async function generateMetadata({
  params,
}: {
  params: { agreement: string }
}) {
  return {
    title: `Editar Consignatária ${params.agreement}`,
  }
}
