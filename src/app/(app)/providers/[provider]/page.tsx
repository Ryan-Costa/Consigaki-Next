import ProviderForm from '@/components/Provider/ProviderForm'
import { IProviderID } from '@/interfaces/IProps'
import api from '@/services/server/api'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Consignatárias',
}

export default async function EditProvider({
  params,
}: {
  params: { provider: string }
}) {
  const response = await api.get<IProviderID>(`/providers/${params.provider}`)
  const providerById = response.data
  return <ProviderForm data={providerById} />
}
