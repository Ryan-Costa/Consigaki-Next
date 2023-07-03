import { Metadata } from 'next'
import SignIn from './SignIn'

export const metadata: Metadata = {
  title: 'Login',
}

export default function SignInPage() {
  return (
    <>
      <SignIn />
    </>
  )
}
