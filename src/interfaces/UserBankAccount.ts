export type BankAccount = {
  id: number
  userId: number
  bank: number
  agency: string
  account: string
  pixKey: string
  pix: number
  active: boolean
  createdAt: string
  updatedAt: string
}

export type UserBankAccount = {
  data: BankAccount
  message: string
}
