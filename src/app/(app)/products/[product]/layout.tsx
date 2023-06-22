'use client'

import React, { useState, ChangeEvent, ReactNode } from 'react'
import { Inter } from 'next/font/google'
import { IProducts } from '@/interfaces/IProps'
import { ButtonSave } from '@/components/Common/ButtonSave'
import { Input } from '@/components/Common/Input'
import ToggleSwitch from '@/components/ToggleSwitch'
import { IconArrowBack, IconPartners } from '../../../../../public/icons'
import { Roboto } from 'next/font/google'
import { useRouter } from 'next/navigation'
const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700'],
})

// import { useForm } from "react-hook-form";
const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '700'],
})

interface EditProductsProps {
  item: IProducts
  onClose: () => void
  children: ReactNode
}

export default function EditProductLayout({ item, onClose, children }: EditProductsProps) {
  
  // const { control, handleSubmit } = useForm({
  //   defaultValues: {},
  // });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    // setEditedItem((prevItem) => ({
    //   ...prevItem,
    //   [name]: value,
    // }))
  }

  

  const handleGoBack = () => {
    onClose()
    console.log('voltei')
  }

  return (
    <div className={`${roboto.className} h-full w-full rounded-md bg-white px-6 py-14`}>
      <button className="" onClick={handleGoBack}>
        {IconArrowBack}
      </button>
      <div className="mt-12 flex gap-2">
        <h1 className="text-2xl font-bold">Editar produto</h1>
        {IconPartners}
      </div>
      <p
        className={`${inter.className} text-base tracking-tight text-text-regular`}
      >
        Prencha todos os campos
      </p>
      {children}
      
    </div>
  )
}
