import { Metadata } from 'next'
import ChangePassword from './ChangePassword'

export const metadata: Metadata = {
  title: 'Alterar senha',
}

export default function ChangePasswordPage() {
  return (
    <>
      <ChangePassword />
    </>
  )
}
