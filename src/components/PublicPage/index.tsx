'use client'

import { AuthProvider } from "@/contexts/AuthContext"
import { checkIsPublicRoute } from "@/functions/check-is-public-route"
import { usePathname } from "next/navigation"
import { ReactNode } from "react"
import PrivateRoute from "../PrivateRoute"

type PublicPageProps = {
  children: ReactNode
}

export const PublicPage = ({ children }: PublicPageProps) => {
  const pathname = usePathname()
  const isPublicPage = checkIsPublicRoute(pathname!)

  return (
    <>
      {isPublicPage && <AuthProvider>{children}</AuthProvider>}
      {!isPublicPage && (
        <PrivateRoute>
          <AuthProvider>{children}</AuthProvider>
        </PrivateRoute>
      )}
    </>
  )
}