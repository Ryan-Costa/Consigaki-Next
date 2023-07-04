import React, { ReactNode } from 'react'
import { Roboto } from 'next/font/google'
import { IconPartners } from '../../../../../public/icons'
import ButtonGoBack from '@/components/Common/ButtonBack'

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700'],
})

export default function EditLoansLayout({ children }: { children: ReactNode }) {
  return (
    <div
      className={`${roboto.className} h-full w-full rounded-md bg-white px-6 py-14`}
    >
      <ButtonGoBack />
      <div className="mt-12 flex gap-2">
        <h1 className={`${roboto.className} font-bold first-line:text-2xl`}>
          Detalhes da Esteira
        </h1>
        {IconPartners}
      </div>
      {children}
    </div>
  )
}
