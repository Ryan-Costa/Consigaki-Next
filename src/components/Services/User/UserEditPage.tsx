import { IUser } from '@/interfaces/User'
import UserForm from './UserForm'
import UserDetails from './UserDetails'
import { UserAgreement } from '@/interfaces/UserAgreement'
import { UserRequest } from '@/interfaces/UserRequest'
import { UserBankAccount } from '@/interfaces/UserBankAccount'
import { UserCall } from '@/interfaces/UserCall'

interface UserEditPageProps {
  data: IUser
  dataAgreements: UserAgreement
  dataRequests: UserRequest
  dataCalls: UserCall
  dataBankDatas: UserBankAccount
}

export default function UserEditPage({
  data,
  dataAgreements,
  dataRequests,
  dataCalls,
  dataBankDatas,
}: UserEditPageProps) {
  return (
    <>
      <UserForm data={data} />
      <UserDetails
        dataAgreements={dataAgreements}
        dataRequests={dataRequests}
        dataCalls={dataCalls}
        dataBankDatas={dataBankDatas}
      />
    </>
  )
}
