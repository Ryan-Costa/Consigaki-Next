'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ReactNode } from 'react'

interface AuthLayoutProps {
  children: ReactNode
}

export default function AuthLayout({ children }: AuthLayoutProps) {
  const pathname = usePathname()

  return (
    <div className="min-h-screen min-w-full px-96 py-60 font-bold">
      <nav className="mb-16 flex justify-start gap-16 text-white">
        <Link
          href="/signin"
          className={`nav ${pathname === '/signin' ? 'active' : ''}`}
          passHref
        >
          LOGIN
        </Link>

        <Link
          href="/signup"
          className={`nav ${pathname === '/signup' ? 'active' : ''}`}
          passHref
        >
          CADASTRO
        </Link>
      </nav>
      <div className="flex ">
        <div className="w-full text-white">{children}</div>
        <div className="">
          <Image
            src="/images/logo.png"
            className="absolute right-[450px] top-72 hidden h-[366px] w-[373px] 3xl:flex"
            priority
            width={500}
            height={500}
            alt="logo image"
          />
          {/* absolute right-96 hidden h-auto w-auto 3xl:flex */}
        </div>
      </div>
    </div>
  )
}
