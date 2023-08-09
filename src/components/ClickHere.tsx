'use client'

import Link from 'next/link'

interface ClickHereProps {
  message: string
  href: string
}

export default function ClickHere({ message, href }: ClickHereProps) {
  return (
    <>
      <div className="mb-6 flex gap-2">
        <p>{message}</p>
        <Link href={href} className="text-click-here">
          Clique Aqui
        </Link>
      </div>
    </>
  )
}
