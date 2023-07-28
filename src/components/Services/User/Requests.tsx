import { UserRequest } from '@/interfaces/UserRequest'
import api from '@/services/server/api'
import useSWR from 'swr'
interface RequestsUserProps {
  userId: string
}

export function Requests({ userId }: RequestsUserProps) {
  const URL = `/loans/${userId}/get-all`

  const { data, error } = useSWR(URL, (url) =>
    api.get<UserRequest>(url).then((res) => res.data.data),
  )

  console.log(data)

  if (error) {
    return <div>Error ao carregar os dados</div>
  }

  if (!data) {
    return <div>Carregando...</div>
  }

  return (
    <div>
      <table className="w-full text-left">
        <thead>
          <tr>
            <th className="p-3 text-left">Código</th>
            <th className="p-3 text-left">Status</th>
            <th className="p-3 text-left">Convênio</th>
            <th className="p-3 text-left">Cadastro</th>
            <th className="p-3 text-left">Valor liberado</th>
            <th className="p-3 text-left">Parcela</th>
            <th className="p-3 text-left">Prazo</th>
          </tr>
        </thead>
        <tbody>
          {data.map((request) => (
            <tr key={request.id} className="border-y">
              <td className="p-3 text-left">{request.id}</td>
              <td className="p-3 text-left">{request.status}</td>
              <td className="p-3 text-left">{request.userAgreementId}</td>
              <td className="p-3 text-left">
                {new Date(request.created_at).toLocaleDateString()}
              </td>
              <td className="p-3 text-left">{request.amouunt}</td>
              <td className="p-3 text-left">{request.installment}</td>
              <td className="p-3 text-left">{request.term}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
