export type User = {
  id: number
  name: string
}

export type ICallsUserID = {
  id: number
  call: string
  created_at: string
  user: User
}

export type UserCall = {
  data: ICallsUserID[]
  message: string
}

export type PostUserCall = {
  userId: number
  call: string
}
