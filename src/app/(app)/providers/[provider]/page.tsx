import ProviderForm from '@/components/Services/Provider/ProviderForm'
import { IProviderID } from '@/interfaces/Provider'
import api from '@/services/server/api'

export default async function EditProvider({
  params,
}: {
  params: { provider: string }
}) {
  const response = await api.get<IProviderID>(`/providers/${params.provider}`)
  const providersById = response.data
  return <ProviderForm data={providersById} />
}

export async function generateMetadata({
  params,
}: {
  params: { provider: string }
}) {
  return {
    title: `Editar Consignatária ${params.provider}`,
  }
}
