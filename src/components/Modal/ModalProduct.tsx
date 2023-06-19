'use client'

import React from 'react'

import ImageUpload from '../ImageUpload'
import { Dropdown } from '../Dropdown'
import { Roboto, Inter } from 'next/font/google'
import { IconPartners } from '../../../public/icons'
const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700'],
})
const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '700'],
})

interface ModalProps {
  isOpen: boolean
  onRequestClose: () => void
}

export function ModalProduct({ isOpen, onRequestClose }: ModalProps) {
  const handleFormSubmit = (event: React.FormEvent) => {
    event.preventDefault()
  }
  return (
    <div
      className={`${
        !isOpen && 'hidden'
      } fixed left-0 top-0 flex min-h-screen w-full items-center justify-center bg-black bg-opacity-50`}
    >
      <div className="h-[650px] w-[800px] rounded-3xl bg-white px-[50px] pb-[45px] pt-[20px] shadow-lg">
        <div className={`${roboto.className} flex h-full w-full flex-col`}>
          <div className="mt-10 flex flex-col items-start gap-2 text-left">
            <h2 className="flex items-center gap-2 text-2xl font-bold">
              Adicionar Produto {IconPartners}
            </h2>

            <p className={`${inter.className}`}>Preencha todos os campos</p>
          </div>
          <div className="flex h-full flex-col items-start justify-start ">
            <h2 className="mb-4 mt-7 font-bold">Produtos</h2>
            <form onSubmit={handleFormSubmit} className="w-full">
              <Dropdown
                defaultValue="Selecione"
                type="modal"
                options={['Cartão', 'Empréstimo', 'Previdência', 'Seguro']}
              />
              <h2 className="mt-5 text-2xl font-bold">
                Insira a imagem do seu produto
              </h2>
              <p className={`${inter.className}`}>Imagem menores que 300kb</p>

              <ImageUpload type="modal" />
              <div className="flex w-full items-center justify-center">
                <button
                  type="submit"
                  className="mt-10 rounded-sm bg-goldenrod px-56 py-4 font-bold shadow-lg"
                  onClick={onRequestClose}
                >
                  Salvar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
