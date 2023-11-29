import { ButtonGoBack } from '@/components/compCommon/ButtonGoBack'
import { Inter, Roboto } from 'next/font/google'
import { ReactNode } from 'react'
import { IconInsumo } from '../../../../public/icons'

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '700'],
})

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700'],
})

export default function ProfileLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <div
        className={`${inter.className} h-full w-full rounded-md bg-white px-6 py-14`}
      >
        <ButtonGoBack />
        <div className="mt-8 flex items-center gap-2">
          <h1 className="text-lg font-bold">Informações do seu Perfil</h1>
          {IconInsumo}
        </div>
        <p
          className={`${roboto.className} text-base tracking-tight text-text-regular`}
        >
          Prencha todos os campos
        </p>
        {children}
      </div>
    </>
  )
}
