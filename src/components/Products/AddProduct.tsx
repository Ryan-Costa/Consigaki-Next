import React from 'react'
import { IconPartners } from '../../../public/icons'
import { Inter } from 'next/font/google'
import NewProductForm from '../Form/NewProductForm'
import ButtonGoBack from '../Common/ButtonBack'

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '700'],
})

export default function AddProduct() {
  return (
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
      <NewProductForm />
    </div>
  )
}
