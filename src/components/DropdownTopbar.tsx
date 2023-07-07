import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { destroyCookie } from 'nookies'

export default function DropdownTopbar() {
  const router = useRouter()
  const handleLogout = async () => {
    destroyCookie(null, 'consigaki.token')
    router.push('/signin')
    window.location.reload()
  }

  return (
    <div className="absolute right-0 top-[70px] z-10 box-border flex w-72 list-none flex-col rounded-es-2xl bg-white text-left text-black shadow-lg">
      <li className="box-border cursor-pointer px-5 py-4 font-bold hover:border-l-2 hover:border-blue-700">
        <Link href="/profile">Dados pessoais</Link>
      </li>
      <li className="box-border cursor-pointer px-5 py-4 font-bold hover:border-l-2 hover:border-blue-700">
        <Link href="/change-password">Alterar senha</Link>
      </li>
      <li className="box-border cursor-pointer px-5 py-4 font-bold hover:border-l-2 hover:border-blue-700">
        <Link href="/signin" onClick={handleLogout}>
          Logout
        </Link>
      </li>
      <li className="h-4"></li>
    </div>
  )
}
