import { UserBankAccount } from '@/interfaces/UserBankAccount'
import api from '@/services/server/api'
import useSWR from 'swr'
import { Input } from '../../compCommon/Input'

interface BankDataUserProps {
  userId: string
}

export default function BankData({ userId }: BankDataUserProps) {
  const URL = `/users-bank-account/${userId}`

  const { data, error } = useSWR(URL, (url) =>
    api.get<UserBankAccount>(url).then((res) => res.data.data),
  )

  if (error) {
    return <div>Error ao carregar os dados</div>
  }

  if (!data) {
    return <div>Carregando...</div>
  }

  return (
    <>
      <div className="mt-6 flex gap-6">
        <Input
          label="Banco"
          name="nome"
          type="text"
          placeholder="000"
          className="w-full"
          value={data.bank}
          readOnly
          disabled
        />
        <Input
          label="Agência"
          name="nome"
          type="text"
          placeholder="0000"
          className="w-full"
          value={data.agency}
          readOnly
          disabled
        />
        <Input
          label="Conta"
          name="nome"
          type="text"
          placeholder="0000000"
          className="w-full"
          value={data.account}
          readOnly
          disabled
        />
        <Input
          label="DV"
          name="nome"
          type="text"
          placeholder="0"
          className="w-full"
          value={data.account}
          readOnly
          disabled
        />
      </div>
      <div className="mt-4 flex items-center gap-6">
        <Input
          label="Chave Pix"
          name="nome"
          type="text"
          placeholder="CPF, E-mail, Telefone, Chave Aleatória"
          className="w-3/6"
          value={data.pixKey}
          readOnly
          disabled
        />
      </div>
    </>
  )
}
