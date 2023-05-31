'use client'

import Image from 'next/image'
import { useState } from 'react'
import { IconArrowDown } from '../../public/icons'

export default function Topbar() {
  const [isOpen, setIsOpen] = useState(false)

  const handleOpen = () => setIsOpen((prev) => !prev)
  return (
    <>
      <header className="flex h-20 w-full items-center justify-between bg-dark-blue shadow-2xl">
        <div className="flex items-center px-6">
          <Image
            src="/images/logo-2.png"
            className="mr-2 h-auto w-auto"
            alt="logo"
            width={43.74}
            height={42.98}
          />
          <p className="text-2xl font-bold text-white">ConsigAki</p>
        </div>
        <div className="mr-8">
          <button
            className="flex items-center gap-4 text-white"
            onClick={handleOpen}
          >
            Olá, Davi Bessa Pontes{' '}
            <span
              className={`transition-transform duration-300 ${
                isOpen ? 'rotate-180 transform ' : ''
              }`}
            >
              {IconArrowDown}
            </span>
            {isOpen && (
              <div className="absolute right-0 top-16 box-border flex w-72 list-none flex-col rounded-es-2xl bg-white text-left text-black shadow-lg">
                <li className="box-border cursor-pointer px-5 py-4 font-bold hover:border-l-2 hover:border-blue-700">
                  <a href="/"></a>
                  Dados pessoais
                </li>
                <li className="box-border cursor-pointer px-5 py-4 font-bold hover:border-l-2 hover:border-blue-700">
                  <a href="/"></a>
                  Alterar senha
                </li>
                <li className="box-border cursor-pointer px-5 py-4 font-bold hover:border-l-2 hover:border-blue-700">
                  <a href="/signin">Logout</a>
                </li>
                <li className="h-4"></li>
              </div>
            )}
          </button>
        </div>
      </header>
    </>
  )
}
