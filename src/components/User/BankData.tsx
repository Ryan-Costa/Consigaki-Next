import { IconClose } from '../../../public/icons'
import { ButtonAdd } from '../Common/ButtonAdd'
import { Input } from '../Common/Input'

export default function BankData() {
  return (
    <>
      <div className="mt-6 flex gap-6">
        <Input
          label="Banco"
          name="nome"
          type="text"
          placeholder="000"
          className="w-full"
        />
        <Input
          label="Agência"
          name="nome"
          type="text"
          placeholder="0000"
          className="w-full"
        />
        <Input
          label="Conta"
          name="nome"
          type="text"
          placeholder="0000000"
          className="w-full"
        />
        <Input
          label="DV"
          name="nome"
          type="text"
          placeholder="0"
          className="w-full"
        />
      </div>
      <div className="mt-4 flex items-center gap-6">
        <Input
          label="Chave Pix"
          name="nome"
          type="text"
          placeholder="CPF, E-mail, Telefone, Chave Aleatória"
          className="w-3/6"
        />
        <ButtonAdd name="Convênio" />
      </div>
      <table className="mb-2 mt-5 w-full border-collapse">
        <thead>
          <tr>
            <th className="border border-gray-400 px-4 py-3 text-left text-base">
              BANCO
            </th>
            <th className="border border-gray-400 px-4 py-3 text-left text-base">
              AGÊNCIA
            </th>
            <th className="border border-gray-400 px-4 py-3 text-left text-base">
              CONTA
            </th>
            <th className="border border-gray-400 px-4 py-3 text-left text-base">
              DV
            </th>
            <th className="border border-gray-400 px-4 py-3 text-left text-base">
              CHAVE PIX
            </th>
            <th className="border border-gray-400 px-4 py-3 text-left text-base">
              EXCLUIR
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-400 px-4 py-6 text-left text-base"></td>
            <td className="border border-gray-400 px-4 py-6 text-left text-base"></td>
            <td className="border border-gray-400 px-4 py-6 text-left text-base"></td>
            <td className="border border-gray-400 px-4 py-6 text-left text-base"></td>
            <td className="border border-gray-400 px-4 py-6 text-left text-base"></td>
            <td className="cursor-pointer border border-gray-400 px-4 py-3 text-left text-base">
              {IconClose}
            </td>
          </tr>
          <tr>
            <td className="border border-gray-400 px-4 py-6 text-left text-base"></td>
            <td className="border border-gray-400 px-4 py-6 text-left text-base"></td>
            <td className="border border-gray-400 px-4 py-6 text-left text-base"></td>
            <td className="border border-gray-400 px-4 py-6 text-left text-base"></td>
            <td className="border border-gray-400 px-4 py-6 text-left text-base"></td>
            <td className="cursor-pointer border border-gray-400 px-4 py-3 text-left text-base">
              {IconClose}
            </td>
          </tr>
        </tbody>
      </table>
    </>
  )
}
