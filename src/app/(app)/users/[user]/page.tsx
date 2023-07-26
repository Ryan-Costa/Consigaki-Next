import UserEditPage from '@/components/Services/User/UserEditPage'
import { getAgreementsUser } from '@/services/getAgreementsUser'
import { getBankData } from '@/services/getBankData'
import { getCallsUser } from '@/services/getCallsUser'
import { getCurrentUser } from '@/services/getCurrentUser'
import { getRequestsUser } from '@/services/getRequestsUser'

export default async function EditUsers({
  params,
}: {
  params: { user: string }
}) {
  try {
    const userData = getCurrentUser(params.user)
    const usersById = await userData
    const agreementsData = getAgreementsUser(params.user)
    const agreementsById = await agreementsData
    const requestsData = getRequestsUser(params.user)
    const requestsById = await requestsData
    const callsData = getCallsUser(params.user)
    const callsById = await callsData
    const bankData = getBankData(params.user)
    const bankDataById = await bankData

    return (
      <UserEditPage
        data={usersById}
        dataAgreements={agreementsById}
        dataRequests={requestsById}
        dataBankDatas={bankDataById}
        dataCalls={callsById}
      />
    )
  } catch (error) {
    console.log(error)
  }
}

export async function generateMetadata({
  params,
}: {
  params: { user: string }
}) {
  return {
    title: `Editar Usuário ${params.user}`,
  }
}
