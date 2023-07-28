import { UserAgreement } from '@/interfaces/UserAgreement'
import api from '@/services/server/api'
import useSWR from 'swr'

interface AgreementUserProps {
  userId: string
}

export function AgreementsUserPage({ userId }: AgreementUserProps) {
  const URL = `/user-agreements/${userId}`

  const { data, error } = useSWR(URL, (url) =>
    api.get<UserAgreement>(url).then((res) => res.data.data),
  )

  if (error) {
    return <div>Error ao carregar os dados</div>
  }

  if (!data) {
    return <div>Carregando...</div>
  }

  return (
    <>
      <table className="w-full text-left">
        <thead>
          <tr>
            <th className="p-4 text-left">Nome Convênio</th>
            <th className="p-4 text-left">Matrícula</th>
            <th className="p-4 text-left">Cargo</th>
            <th className="p-4 text-left">Vínculo</th>
          </tr>
        </thead>
        <tbody>
          {data.map((agreement) => (
            <tr className="border-y" key={agreement.id}>
              <td className="w-1/6 p-4 text-left">
                {agreement.agreement.name}
              </td>
              <td className="w-3/6 p-4 text-left">{agreement.registration}</td>
              <td className="w-1/6 p-4 text-left">{agreement.jobTitle}</td>
              <td className="w-6/6 p-4 text-left">{agreement.position}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}
