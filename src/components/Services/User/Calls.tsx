import { ButtonAdd } from '@/components/Common/ButtonAdd'
import { UserCall } from '@/interfaces/UserCall'

interface CallUserProps {
  data: UserCall
}

export default function Calls({ data }: CallUserProps) {
  const callData = data.data
  console.log(callData)
  return (
    <>
      <textarea className="mb-[-20px] h-[176px] w-full resize-none rounded-lg border border-gray-400 px-6 py-2 outline-none" />
      <ButtonAdd name="Observação" />
      <table className="mt-4 w-full text-left">
        <thead>
          <tr>
            <th className="p-4 text-left">Data</th>
            <th className="p-4 text-left">Operador</th>
            <th className="p-4 text-left">Histórico</th>
          </tr>
        </thead>
        <tbody>
          {callData.map((data) => (
            <tr className="border-y" key={data.id}>
              <td className="w-1/6 p-4 text-left">
                {new Date(data.created_at).toLocaleDateString()}
              </td>
              <td className="w-3/6 p-4 text-left">{data.user.name}</td>
              <td className="w-1/6 p-4 text-left">{data.call}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}
