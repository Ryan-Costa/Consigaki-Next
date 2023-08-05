'use client'

import AddParameterAgreement from './AddParameterAgreement'
import TableParametersAgreement from './TableParametersAgreement'
import api from '@/services/server/api'
import {
  AgreementParameter,
  MessageDelete,
} from '@/interfaces/AgreementParameter'
import { toast } from 'react-toastify'
import useSWR, { mutate } from 'swr'
import { ImpulseSpinner } from 'react-spinners-kit'

interface ParametersAgreementProps {
  agreementId: string
}

export function Parameters({ agreementId }: ParametersAgreementProps) {
  const URL = `/agreement-parameters/${agreementId}`

  const { data: parameterAgreementById, error } = useSWR(URL, (url) =>
    api.get<AgreementParameter>(url).then((res) => res.data.data),
  )

  if (error) {
    return <div>Error ao carregar os dados</div>
  }

  const handleDelete = (parameterId: number) => {
    api
      .delete<MessageDelete>(`/agreement-parameters/${parameterId}`)
      .then((res) => {
        mutate(URL)
        toast.success(res.data.message)
      })
      .catch((err) => {
        toast.error(err.response.data.message)
      })
  }

  return (
    <>
      <AddParameterAgreement agreementId={agreementId} />

      {!parameterAgreementById ? (
        <table className="mt-4 w-full text-left">
          <thead>
            <tr>
              <th className="p-4 text-left">Identificador</th>
              <th className="p-4 text-left">Tipo</th>
              <th className="p-4 text-left">Legenda</th>
              <th className="p-4 text-left">Tipo</th>
              <th className="p-4 text-left">Tamanho mínimo</th>
              <th className="p-4 text-left">Tamanho máximo</th>
              <th className="p-4 text-left">Excluir</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-y">
              <td className="w-2/12 p-4 text-left">
                <ImpulseSpinner
                  color="#d1d5db"
                  frontColor="#d1d5db"
                  backColor="#94a3b8"
                />
              </td>
              <td className="w-1/12 p-4 text-left">
                <ImpulseSpinner
                  color="#d1d5db"
                  frontColor="#d1d5db"
                  backColor="#94a3b8"
                />
              </td>
              <td className="w-2/12 p-4 text-left">
                <ImpulseSpinner
                  color="#d1d5db"
                  frontColor="#d1d5db"
                  backColor="#94a3b8"
                />
              </td>
              <td className="w-1/12 p-4 text-left">
                <ImpulseSpinner
                  color="#d1d5db"
                  frontColor="#d1d5db"
                  backColor="#94a3b8"
                />
              </td>
              <td className="w-2/12 p-4 text-left">
                <ImpulseSpinner
                  color="#d1d5db"
                  frontColor="#d1d5db"
                  backColor="#94a3b8"
                />
              </td>
              <td className="w-3/12 p-4 text-left">
                <ImpulseSpinner
                  color="#d1d5db"
                  frontColor="#d1d5db"
                  backColor="#94a3b8"
                />
              </td>
              <td className="flex w-10/12 justify-center p-4 text-left">
                <ImpulseSpinner
                  color="#d1d5db"
                  frontColor="#d1d5db"
                  backColor="#94a3b8"
                />
              </td>
            </tr>
          </tbody>
        </table>
      ) : (
        <TableParametersAgreement
          parameterAgreementById={parameterAgreementById}
          deleteParameter={handleDelete}
        />
      )}
    </>
  )
}
