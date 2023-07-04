import { ILoans } from '@/interfaces/IProps'
import Link from 'next/link'
import { IconEdit } from '../../../public/icons'

interface TBodyProps {
  data: ILoans[]
}

export default function TBodyLoans({ data }: TBodyProps) {
  return (
    <tbody>
      {data.map((item) => (
        <tr key={item.id} className="border-y">
          <td className="p-3 pl-6 text-left">{item.id}</td>
          <td className="p-3 text-left">{item.user.name}</td>
          <td className="p-3 text-left">{item.user.cpf}</td>
          <td className="p-3 text-left">{item.userAgreements.registration}</td>
          <td className="p-3 text-left">
            {item.userAgreements.agreement.name}
          </td>
          <td className="p-3 text-left">{item.provider.name}</td>
          <td className="p-3 text-left">{item.amouunt}</td>
          <td className="p-3 text-left">{item.installment}</td>
          <td className="p-3 text-left">{item.fee}X</td>
          <td className="p-3 text-left">
            <Link href={`/loans/${item.id}`} className="cursor-pointer">
              {IconEdit}
            </Link>
          </td>
        </tr>
      ))}
    </tbody>
  )
}
