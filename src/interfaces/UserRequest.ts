export interface Product {
  id: number
  name: string
  type: number
}
export interface IRequestsUserID {
  id: number
  userAgreementId: number
  integration_code: string | null
  amouunt: string
  installment: string
  term: number
  status: number
  created_at: string
  product: Product
}

export interface UserRequest {
  data: IRequestsUserID[]
  message: string
}
