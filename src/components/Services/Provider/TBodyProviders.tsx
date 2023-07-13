import { IProviders } from '@/interfaces/Provider'
import Link from 'next/link'
import { IconEdit } from '../../../../public/icons'

interface TBodyProps {
  data: IProviders[]
}

export default function TBodyProviders({ data }: TBodyProps) {
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
              <Link href={`/providers/${item.id}`} className="cursor-pointer">
                {IconEdit}
              </Link>
            </td>
          </tr>
        ))}
      </tbody>
    </>
  )
}
