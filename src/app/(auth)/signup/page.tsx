import { Metadata } from 'next'
import SignUp from './signup'

export const metadata: Metadata = {
  title: 'Cadastro',
}

export default function SignUpPage() {
  return (
    <>
      <SignUp />
    </>
  )
}
