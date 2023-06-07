import Link from 'next/link'

export default function DropdownTopbar() {
  return (
    <div className="absolute right-0 top-16 z-10 box-border flex w-72 list-none flex-col rounded-es-2xl bg-white text-left text-black shadow-lg">
      <li className="box-border cursor-pointer px-5 py-4 font-bold hover:border-l-2 hover:border-blue-700">
        <Link href="/profile">Dados pessoais</Link>
      </li>
      <li className="box-border cursor-pointer px-5 py-4 font-bold hover:border-l-2 hover:border-blue-700">
        <Link href="/changePassword">Alterar senha</Link>
      </li>
      <li className="box-border cursor-pointer px-5 py-4 font-bold hover:border-l-2 hover:border-blue-700">
        <Link href="/signin">Logout</Link>
      </li>
      <li className="h-4"></li>
    </div>
  )
}
