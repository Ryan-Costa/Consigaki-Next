import { ReactNode } from 'react'
import '../styles/global/globals.css'

import { Karla } from 'next/font/google'
import { AuthProvider } from '@/contexts/AuthContext'
const karla = Karla({ subsets: ['latin'] })

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={karla.className}>
      <head />
      <body className="h-screen w-full bg-gradient-to-r from-deg2 to-deg1">
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  )
}
