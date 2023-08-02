export type Product = {
  id: number
  name: string
  type: number
}

export type IProductAgreementID = {
  id: number
  banner: string
  products: Product
}

export type AgreementProduct = {
  data: IProductAgreementID[]
  message: string
}

export type PostAgreementProduct = {
  image: FileList
  agreementId: number
  productId: number
}

export type MessageDelete = {
  message: string
}

export type ProductData = {
  id: number
  name: string
  type: number
  active: boolean
  createdAt: string
  updatedAt: string
}

export type ProductGetAll = {
  data: {
    totalItems: number
    products: Product[]
    totalPages: number
    currentPage: number
  }
  message: string
}

export type ProductGet = {
  totalItems: number
  products: Product[]
  totalPages: number
  currentPage: number
}
