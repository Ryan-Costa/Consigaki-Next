import TableUsers from '@/components/Services/User/TableUsers'
import Loading from '@/components/UI/loading'
import { getUsers } from '@/services/getUsers'
import { Roboto } from 'next/font/google'
import { Suspense } from 'react'

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700'],
})

export default async function Users() {
  const users = await getUsers(1)

  if (!users) {
    return <Loading />
  }

  return (
    <>
      <div
        className={`${roboto.className} h-full w-full rounded-md bg-white px-6 py-14`}
      >
        <>
          <Suspense fallback={<Loading />}>
            <TableUsers userData={users} />
          </Suspense>
        </>
      </div>
    </>
  )
}
