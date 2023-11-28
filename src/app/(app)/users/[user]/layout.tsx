import { ButtonGoBack } from '@/components/Common/ButtonBack'
import { Roboto } from 'next/font/google'
import { ReactNode } from 'react'
import { IconPartners } from '../../../../../public/icons'

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700'],
})

export default function EditUserLayout({
  children,
  params,
}: {
  children: ReactNode
  params: { user: string }
}) {
  return (
    <div
      className={`${roboto.className} h-full w-full rounded-md bg-white px-6 py-14`}
    >
      <ButtonGoBack />
      <div className="mt-12 flex gap-2">
        <h1 className="text-2xl font-bold">Editar Usuário {params.user}</h1>
        {IconPartners}
      </div>
      {children}
    </div>
  )
}
