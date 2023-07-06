import { Metadata } from 'next'
import SignUp from './SignUp'

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
