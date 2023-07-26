import { UserBankAccount } from '@/interfaces/UserBankAccount'
import { Input } from '../../Common/Input'

interface BankDataProps {
  data: UserBankAccount
}

export default function BankData({ data }: BankDataProps) {
  const bankData = data.data

  console.log(data)

  return (
    <>
      <div className="mt-6 flex gap-6">
        <Input
          label="Banco"
          name="nome"
          type="text"
          placeholder="000"
          className="w-full"
          value={bankData.bank}
          readOnly
          disabled
        />
        <Input
          label="Agência"
          name="nome"
          type="text"
          placeholder="0000"
          className="w-full"
          value={bankData.agency}
          readOnly
          disabled
        />
        <Input
          label="Conta"
          name="nome"
          type="text"
          placeholder="0000000"
          className="w-full"
          value={bankData.account}
          readOnly
          disabled
        />
        <Input
          label="DV"
          name="nome"
          type="text"
          placeholder="0"
          className="w-full"
          value={bankData.account}
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
          value={bankData.pixKey}
          readOnly
          disabled
        />
      </div>
    </>
  )
}
