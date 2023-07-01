'use client'

import { IconArrowBack } from '../../../public/icons'
import { useRouter } from 'next/navigation'

export default function ButtonGoBack() {
  const router = useRouter()

  return (
    <>
      <button className="" onClick={() => router.back()}>
        {IconArrowBack}
      </button>
    </>
  )
}
