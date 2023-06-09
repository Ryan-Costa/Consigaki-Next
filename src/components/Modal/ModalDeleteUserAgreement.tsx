'use client'

import React from 'react'
import ReactModal from 'react-modal'
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

const Modal = ({ isOpen, onRequestClose, handleDelete }: ModalProps) => {
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={{
        overlay: {
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        },
        content: {
          width: '560px',
          height: '250px',
          padding: '40px 105px 20px',
          borderRadius: '20px',
          boxShadow: '4px 4px 4px 4px rgba(43, 49, 85, 0.6)',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          backgroundColor: '#FFFFFF',
        },
      }}
    >
      <div
        className={`${karla.className} flex h-full w-full flex-col items-center`}
      >
        <div className="px-[22.5px]">
          <h1 className="text-3xl">Você tem certeza que deseja excluir?</h1>
        </div>
        <div className="mb-5 mt-5 flex h-[60px] w-[350px] items-center rounded-2xl bg-dark-blue">
          <button
            className="flex h-full w-[294px] items-center rounded-2xl pl-[23px] text-xl  font-bold   text-white"
            onClick={onRequestClose}
          >
            NÃO
          </button>
          <p className="flex h-full w-[56px] rotate-90 items-center justify-center">
            {IconArrowRight}
          </p>
        </div>
        <div>
          <button
            className="text-sm font-bold text-dark-blue"
            onClick={() => {
              handleDelete()
              onRequestClose()
            }}
          >
            Sim, excluir
          </button>
        </div>
      </div>
    </ReactModal>
  )
}

export default Modal
