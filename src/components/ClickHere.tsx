'use client'

import Link from 'next/link'

export default function ClickHere() {
  return (
    <>
      <div className="mb-6 flex gap-2">
        <p>Não é cadastrado?</p>
        <Link href="/signup" className="text-click-here">
          Clique Aqui
        </Link>
      </div>
    </>
  )
}
