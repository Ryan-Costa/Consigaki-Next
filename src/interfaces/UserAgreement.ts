export type Agreement = {
  id: number
  name: string
}

export type IAgreementUserID = {
  id: number
  registration: string
  position: string
  jobTitle: string
  agreementId: number
  agreement: Agreement
}

export type UserAgreement = {
  data: IAgreementUserID[]
  message: string
}
