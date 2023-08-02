'use client'

import { IconArrowRight } from '../../../public/icons'
import { Karla } from 'next/font/google'

const karla = Karla({
  subsets: ['latin'],
  weight: ['400', '700'],
})

interface ModalProps {
  isOpen: boolean
  onRequestClose: () => void
  handleDelete: () => void
}

export function ModalDelete({
  isOpen,
  onRequestClose,
  handleDelete,
}: ModalProps) {
  return (
    <div
      className={`${
        !isOpen && 'hidden'
      } fixed left-0 top-0 flex min-h-screen w-full items-center justify-center bg-black bg-opacity-20`}
    >
      <div className="h-[250px] w-[560px] rounded-3xl bg-white px-[105px] py-[40px] pt-[20px] shadow-lg">
        <div
          className={`${karla.className} relative flex h-full w-full flex-col items-center`}
        >
          <div className="px-[22.5px]">
            <h1 className="text-3xl">Você tem certeza que deseja excluir?</h1>
          </div>
          <div className="mb-5  mt-5 flex h-[60px] w-[350px] items-center rounded-2xl">
            <button
              className="flex h-full w-full items-center justify-between rounded-2xl bg-dark-blue px-[24px] text-xl font-bold text-white hover:scale-105 hover:transition-transform"
              onClick={onRequestClose}
            >
              <p className="flex h-full items-center justify-center">NÃO</p>
              <p className="justify-cente flex rotate-90 items-center">
                {IconArrowRight}
              </p>
            </button>
          </div>
          <div>
            <button
              className="text-sm font-bold text-dark-blue hover:scale-125 hover:transition-transform"
              onClick={() => {
                handleDelete()
                onRequestClose()
              }}
            >
              Sim, excluir
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
