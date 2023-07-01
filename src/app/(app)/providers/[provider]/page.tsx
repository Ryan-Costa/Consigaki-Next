import ProviderForm from '@/components/Form/ProviderForm'
import { IProviderID } from '@/interfaces/IProps'
import api from '@/services/server/api'

export default async function EditProvider({
  params,
}: {
  params: { provider: string }
}) {
  const response = await api.get<IProviderID>(`/providers/${params.provider}`)
  const providerById = response.data
  return <ProviderForm data={providerById} />
}
