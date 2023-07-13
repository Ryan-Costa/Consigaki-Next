import Link from 'next/link'
import { IconEdit } from '../../../../public/icons'
import { IUsers } from '@/interfaces/User'

interface TBodyProps {
  data: IUsers[]
}

export default function TBodyUsers({ data }: TBodyProps) {
  return (
    <>
      <tbody>
        {data.map((item) => (
          <tr key={item.id} className="border-y">
            <td className="p-4 pl-8 text-left">{item.id}</td>
            <td className="p-4 text-left">{item.name}</td>
            <td className="p-4 text-left">
              {new Date(item.createdAt).toLocaleDateString()}
            </td>
            <td className="p-4 text-left">
              <Link href={`/users/${item.id}`} className="cursor-pointer">
                {IconEdit}
              </Link>
            </td>
          </tr>
        ))}
      </tbody>
    </>
  )
}
