import { ModalDelete } from '@/components/Modal/ModalDelete'
import { IParameterAgreementID } from '@/interfaces/AgreementParameter'
import { useState } from 'react'
import { IconClose } from '../../../../public/icons'
import { toUpperCase } from '@/functions/toUpperCase'

interface TableParametersAgremeentProps {
  parameterAgreementById: IParameterAgreementID[]
  deleteParameter: (parameterId: number) => void
}

export default function TableParametersAgreement({
  parameterAgreementById,
  deleteParameter,
}: TableParametersAgremeentProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => {
    setIsModalOpen(true)
  }
  return (
    <>
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
          {parameterAgreementById.map((parameter) => (
            <tr className="border-y" key={parameter.id}>
              <td className="w-2/12 p-4 text-left">{parameter.identifier}</td>
              <td className="w-1/12 p-4 text-left">
                {toUpperCase(parameter.type)}
              </td>
              <td className="w-2/12 p-4 text-left">{parameter.label}</td>
              <td className="w-1/12 p-4 text-left">
                {toUpperCase(parameter.validationType)}
              </td>
              <td className="w-2/12 p-4 text-left">
                {parameter.validationMin}
              </td>
              <td className="w-3/12 p-4 text-left">
                {parameter.validationMax}
              </td>

              <td className="flex w-10/12 justify-center p-4 text-left">
                <a onClick={openModal} className="cursor-pointer">
                  {IconClose}
                </a>
                <ModalDelete
                  isOpen={isModalOpen}
                  onRequestClose={() => setIsModalOpen(false)}
                  handleDelete={() => deleteParameter(parameter.id)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}
