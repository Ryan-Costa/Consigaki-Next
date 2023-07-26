import { UserAgreement } from '@/interfaces/UserAgreement'

interface AgreementUserProps {
  data: UserAgreement
}

export function AgreementsUserPage({ data }: AgreementUserProps) {
  const agreementData = data.data

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
          {agreementData.map((data) => (
            <tr className="border-y" key={data.id}>
              <td className="w-1/6 p-4 text-left">{data.agreement.name}</td>
              <td className="w-3/6 p-4 text-left">{data.registration}</td>
              <td className="w-1/6 p-4 text-left">{data.jobTitle}</td>
              <td className="w-6/6 p-4 text-left">{data.position}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}
