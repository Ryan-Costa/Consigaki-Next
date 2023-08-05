import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { destroyCookie, parseCookies } from 'nookies'
import { Dispatch, SetStateAction, useEffect, useRef } from 'react'

interface DropdownTopBarProps {
  isOpen: boolean
  setIsOpen: Dispatch<SetStateAction<boolean>>
}

export default function DropdownTopbar({
  isOpen,
  setIsOpen,
}: DropdownTopBarProps) {
  const router = useRouter()
  const dropdownRef = useRef(null)

  const handleLogout = async () => {
    const cookies = parseCookies()
    destroyCookie(null, 'consigaki_token')

    if (cookies.consigaki_token) {
      router.replace('/signin')
    }
    router.refresh()
  }

  const handleClickOutside = () => {
    if (dropdownRef.current) {
      setIsOpen(false)
    }
  }

  useEffect(() => {
    document.addEventListener('click', handleClickOutside)
    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
  })

  return (
    <div
      ref={dropdownRef}
      className={`absolute right-0 top-[70px] z-10 box-border flex w-72 list-none flex-col rounded-es-2xl bg-white text-left text-black shadow-lg ${
        isOpen ? '' : 'hidden'
      }`}
    >
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
