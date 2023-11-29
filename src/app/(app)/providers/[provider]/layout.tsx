import { ButtonGoBack } from '@/components/compCommon/ButtonGoBack'
import { Roboto } from 'next/font/google'
import { ReactNode } from 'react'
import { IconPartners } from '../../../../../public/icons'

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700'],
})

export default function EditProviderLayout({
  children,
  params,
}: {
  children: ReactNode
  params: { provider: string }
}) {
  return (
    <div
      className={`${roboto.className} h-full w-full rounded-md bg-white px-6 py-14`}
    >
      <ButtonGoBack />
      <div className="mt-12 flex gap-2">
        <h1 className="text-2xl font-bold">
          Editar Consignatária {params.provider}
        </h1>
        {IconPartners}
      </div>
      {children}
    </div>
  )
}
