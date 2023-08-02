export type IParameterAgreementID = {
  id: number
  identifier: string
  agreementId: number
  type: string
  label: string
  validationType: string
  validationMin: number
  validationMax: number
}

export type AgreementParameter = {
  data: IParameterAgreementID[]
  message: string
}

export type PostAgreementParameter = {
  agreementId: number
  identifier: string
  type: string
  label: string
  validationType: string
  validationMin: number
  validationMax: number
}

export type MessageDelete = {
  message: string
}
