import { ReactNode } from 'react'

import { Karla } from 'next/font/google'
const karla = Karla({ subsets: ['latin'] })

export default function RecoveryLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={karla.className}>
      <head />
      <body className="h-screen w-full bg-gradient-to-r from-deg2 to-deg1">
        {children}
      </body>
    </html>
  )
}
