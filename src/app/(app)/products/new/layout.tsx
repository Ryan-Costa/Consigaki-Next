import React, { ReactNode } from 'react'
import { Roboto, Inter } from 'next/font/google'
import ButtonGoBack from '@/components/Common/ButtonBack'
import { IconPartners } from '../../../../../public/icons'
import { Metadata } from 'next'

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '700'],
})

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700'],
})

export const metadata: Metadata = {
  title: 'Novo Produto',
}

export default function EditProviderLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <div
      className={`${roboto.className} h-full w-full rounded-md bg-white px-6 py-14`}
    >
      <div>
        <ButtonGoBack />
        <div className="mt-12 flex gap-2">
          <h1 className="text-2xl font-bold">Adicionar Produto</h1>
          {IconPartners}
        </div>
        <p
          className={`${inter.className} text-base tracking-tight text-text-regular`}
        >
          Prencha todos os campos
        </p>
        {children}
      </div>
    </div>
  )
}
