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
    <>
      <div className="hidden text-white max-3xl:flex max-3xl:w-full max-3xl:items-center max-3xl:pl-12 max-3xl:pt-12">
        <Image
          src="/images/logo.png"
          className="mr-6 h-12 w-12"
          priority
          width={48}
          height={48}
          alt="logo image"
        />
        <p className="font-boldtext-white text-2xl">Consigaki</p>
      </div>
      <div className="min-h-screen min-w-full bg-transparent px-80 py-60 font-bold max-3xl:pb-44 max-3xl:pt-32">
        <div className="flex">
          {/* laranja */}
          <div className="flex w-full flex-col max-3xl:items-center">
            <nav className="mb-16 flex justify-start gap-16 text-white max-3xl:w-492 ">
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
            <div className="text-white max-3xl:w-492 ">{children}</div>
          </div>
          {/* branca */}
          <div className="flex h-full w-full items-center justify-center max-3xl:hidden">
            <Image
              src="/images/logo.png"
              className="h-[366px] w-[373px] max-3xl:hidden"
              priority
              width={500}
              height={500}
              alt="logo image"
            />
          </div>
        </div>
        {/* absolute right-[450px] top-72 */}
      </div>
    </>
  )
}
