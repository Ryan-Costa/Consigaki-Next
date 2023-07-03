export default function Calls() {
  return (
    <>
      <textarea className="h-[176px] w-full rounded-lg border border-gray-400 px-6 py-2 outline-none" />
      <table className="w-full border-collapse">
        <thead>
          <tr>
            <th className="h-7 w-1/6 border border-gray-400 px-4 text-left text-base">
              DATA
            </th>
            <th className="h-7 w-2/6 border border-gray-400 px-4 text-left text-base">
              Operador
            </th>
            <th className="h-7 w-3/6 border border-gray-400 px-4 text-left text-base">
              Histórico
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-400 px-4 py-3 text-left text-base"></td>
            <td className="border border-gray-400 px-4 py-3 text-left text-base"></td>
            <td className="border border-gray-400 px-4 py-3 text-left text-base"></td>
          </tr>
          <tr>
            <td className="border border-gray-400 px-4 py-3 text-left text-base"></td>
            <td className="border border-gray-400 px-4 py-3 text-left text-base"></td>
            <td className="border border-gray-400 px-4 py-3 text-left text-base"></td>
          </tr>
          <tr>
            <td className="border border-gray-400 px-4 py-3 text-left text-base"></td>
            <td className="border border-gray-400 px-4 py-3 text-left text-base"></td>
            <td className="border border-gray-400 px-4 py-3 text-left text-base"></td>
          </tr>
        </tbody>
      </table>
    </>
  )
}
