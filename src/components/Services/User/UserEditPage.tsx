import { ReactNode } from 'react'

interface UserEditPageProps {
  userForm: ReactNode
  userDetails: ReactNode
}

export default function UserEditPage({
  userForm,
  userDetails,
}: UserEditPageProps) {
  return (
    <>
      {userForm}
      {userDetails}
    </>
  )
}
