import { ReactNode } from 'react'

import Sidebar from '@/components/Sidebar'
import Topbar from '@/components/TopBar'
import { Karla } from 'next/font/google'
import { Metadata } from 'next'
const karla = Karla({ subsets: ['latin'] })

interface AppLayoutProps {
  children: ReactNode
}

export const metadata: Metadata = {
  title: {
    template: '%s | Consigaki App',
    default: 'Consigaki App',
  },
}

export default function AppLayout({ children }: AppLayoutProps) {
  return (
    <>
      <div
        className={`${karla.className} flex min-h-screen w-full bg-layout-app text-word-app`}
      >
        <aside className="min-h-screen w-60 bg-aside shadow-2xl">
          <Sidebar />
        </aside>
        <div className="flex w-full flex-col">
          <Topbar />
          <section
            className={`
                  md:w-md-width
                  m-auto
                  my-7 
                  h-full
                  sm:w-sm-width lg:w-lg-width xl:w-xl-width 2xl:w-2xl-width
            `}
          >
            {children}
          </section>
        </div>
      </div>
    </>
  )
}
