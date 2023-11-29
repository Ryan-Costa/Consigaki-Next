'use client'

import { useRouter } from 'next/navigation'
import { IconArrowBack } from '../../../public/icons'

export function ButtonGoBack() {
  const router = useRouter()

  return (
    <>
      <button className="" onClick={() => router.back()}>
        {IconArrowBack}
      </button>
    </>
  )
}
