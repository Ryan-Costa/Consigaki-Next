'use client'

import React from 'react'
import { IconArrowBack, IconPartners } from '../../../public/icons'
import { Inter } from 'next/font/google'
// import { IProducts } from '@/interfaces/IProps'
import { useRouter } from 'next/navigation'
import NewProductForm from '../Form/NewProductForm'

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '700'],
})

export default function AddProduct() {
  const { back } = useRouter()
  // const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
  //   const { name, value } = e.target
  //   setSavedItem((prevItem) => ({
  //     ...prevItem,
  //     [name]: value,
  //   }))
  // }

  const handleGoBack = () => {
    back()
    console.log('voltei')
  }

  return (
    <div>
      <button className="" onClick={handleGoBack}>
        {IconArrowBack}
      </button>

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
