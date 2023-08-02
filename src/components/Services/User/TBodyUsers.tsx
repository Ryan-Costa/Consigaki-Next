import Link from 'next/link'
import { IconEdit } from '../../../../public/icons'
import { IUsersID } from '@/interfaces/User'
import { toUpperCase } from '@/functions/toUpperCase'

interface TBodyProps {
  data: IUsersID[]
}

export default function TBodyUsers({ data }: TBodyProps) {
  const usersById = data

  return (
    <>
      <tbody>
        {usersById.map((user) => (
          <tr key={user.id} className="border-y">
            <td className="p-4 pl-8 text-left">{user.id}</td>
            <td className="p-4 text-left">{toUpperCase(user.name)}</td>
            <td className="p-4 text-left">
              {new Date(user.createdAt).toLocaleDateString()}
            </td>
            <td className="p-4 text-left">
              <Link href={`/users/${user.id}`} className="cursor-pointer">
                {IconEdit}
              </Link>
            </td>
          </tr>
        ))}
      </tbody>
    </>
  )
}
