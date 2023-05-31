'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function Home() {
  const router = useRouter()

  useEffect(() => {
    router.replace('/signin')
  }, [])

  return (
    <div>
      <h1 className="text-white">ConsigAki</h1>
      <Link href="/app" className="text-white">
        app
      </Link>
    </div>
  )
}
