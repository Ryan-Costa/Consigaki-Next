'use client'

import Image from 'next/image'
import { useContext, useState } from 'react'
import { IconArrowDown } from '../../public/icons'
import DropdownTopbar from './DropdownTopbar'
import { AuthContext } from '@/contexts/AuthContext'

export default function Topbar() {
  const [isOpen, setIsOpen] = useState(false)
  const { username } = useContext(AuthContext)

  console.log('isOpen TopBar', isOpen)

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
            Olá, {username}
            <span
              className={`transition-transform duration-300 ${
                isOpen ? 'rotate-180 transform ' : ''
              }`}
            >
              {IconArrowDown}
            </span>
            {isOpen && <DropdownTopbar isOpen={isOpen} setIsOpen={setIsOpen} />}
          </button>
        </div>
      </header>
    </>
  )
}
