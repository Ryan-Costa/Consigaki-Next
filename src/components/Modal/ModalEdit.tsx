'use client'

import React from 'react'
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

export function ModalEdit({ isOpen, onRequestClose }: ModalProps) {
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
              Editar Usuário {IconPartners}
            </h2>

            <p className={`${inter.className}`}>Preencha todos os campos</p>
          </div>
          <div className="flex h-full flex-col items-start justify-start ">
            <form onSubmit={handleFormSubmit} className="mt-7 w-full">
              <Dropdown
                defaultValue="CONVÊNIO"
                type="modal"
                options={[
                  'INSS',
                  'Governo de São Paulo',
                  'Prefeitura de Guarulhos',
                ]}
              />
              <div className="mt-6 flex w-2/6 flex-col gap-2">
                <label htmlFor="" className="font-semibold">
                  Matrícula
                </label>
                <input
                  name="Matrícula"
                  type="text"
                  placeholder="000-000-00"
                  className="w-full rounded-lg border border-gray-400 px-6 py-2 outline-none"
                />
              </div>
              <div className="mt-2 flex w-2/6 flex-col gap-2 ">
                <label htmlFor="" className="font-semibold">
                  Cargo
                </label>
                <input
                  name="cargo"
                  type="text"
                  placeholder="Professor"
                  className="w-full rounded-lg border border-gray-400 px-6 py-2 outline-none"
                />
              </div>
              <div className="mt-2 flex w-2/6 flex-col gap-2">
                <label htmlFor="" className="font-semibold">
                  Vínculo
                </label>
                <input
                  name="vinculo"
                  type="text"
                  placeholder="Efetivo"
                  className="w-full rounded-lg border border-gray-400 px-6 py-2 outline-none"
                />
              </div>
              <div className="mt-10 w-full rounded-[8px]">
                <button
                  className="w-full rounded-[8px] bg-goldenrod py-4 text-2xl font-bold hover:bg-green-goldenrod"
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
