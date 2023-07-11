import { IAgreements } from '@/interfaces/IProps'
import Link from 'next/link'
import { IconEdit } from '../../../public/icons'

interface TBodyProps {
  data: IAgreements[]
}

export default function TBodyAgreements({ data }: TBodyProps) {
  return (
    <>
      <tbody>
        {data.map((item) => (
          <tr key={item.id} className="border-y">
            <td className="p-4 text-left">{item.id}</td>
            <td className="p-4 text-left">{item.name}</td>
            <td className="p-4 text-left">
              {new Date(item.createdAt).toLocaleDateString()}
            </td>
            <td className="p-4 text-left">
              <Link href={`/agreements/${item.id}`} className="cursor-pointer">
                {IconEdit}
              </Link>
            </td>
          </tr>
        ))}
      </tbody>
    </>
  )
}
