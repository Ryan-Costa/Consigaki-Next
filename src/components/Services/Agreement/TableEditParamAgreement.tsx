'use client'

import { Input } from '@/components/Common/Input'
import { Dropdown } from '@/components/Dropdown'
import { useState } from 'react'
import { ButtonAdd } from '../../Common/ButtonAdd'
import { IconClose } from '../../../../public/icons'
import { ModalProduct } from '../../Modal/ModalProduct'

export function TableEditParamAgreement() {
  const [isOpenModalProduct, setIsOpenModalProduct] = useState(false)

  const [agreementsData, setAgreementsData] = useState([
    {
      id: 'Senha Averbação',
      type: 'Texto',
      subtitle: 'Senha Averbação',
      altType: 'String',
      minSize: '00',
      maxSize: '06',
    },
    {
      id: 'Número Benefício',
      type: 'Texto',
      subtitle: 'Número Benefício',
      altType: 'Number',
      minSize: '00',
      maxSize: '06',
    },
  ])

  const handleDelete = (index: any) => {
    const updateData = [...agreementsData]
    updateData.splice(index, 1)
    setAgreementsData(updateData)
  }

  const handleOpenModalProduct = () => {
    setIsOpenModalProduct(true)
  }

  const handleCloseModalProduct = () => {
    setIsOpenModalProduct(false)
  }

  return (
    <>
      <div className="flex gap-6">
        <Input
          label="Identificador"
          type="text"
          name="Identificador"
          placeholder="00/00/0000"
          className="w-full"
        />
        <Input
          label="Tipo"
          type="text"
          name="Tipo"
          placeholder="00/00/0000"
          className="w-full"
        />
        <Input
          label="Legenda"
          type="text"
          name="Legenda"
          placeholder="00/00/0000"
          className="w-full"
        />
        <Input
          label="Legenda"
          type="text"
          name="Legenda"
          placeholder="00/00/0000"
          className="invisible w-full"
        />
      </div>
      <div className="mt-5 flex items-center gap-2">
        <p className="text-base font-bold">Validação</p>
        <div className="h-[1px] w-full bg-line-gray" />
      </div>
      <div className="mt-3 flex justify-end gap-6">
        <div className="flex w-full flex-col justify-end">
          <Dropdown
            type={'form'}
            defaultValue={'Tipo'}
            options={['String', 'Number', 'DateTime']}
          />
        </div>
        <Input
          label="Identificador"
          type="text"
          name="Identificador"
          placeholder="00/00/0000"
          className="w-full"
        />
        <Input
          label="Identificador"
          type="text"
          name="Identificador"
          placeholder="00/00/0000"
          className="w-full"
        />
        <ButtonAdd
          name=""
          styled="tableAgreement"
          className="w-full"
          handleOpenModal={handleOpenModalProduct}
        />
      </div>
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
          {agreementsData.map((item, index) => (
            <tr className="border-y" key={item.id}>
              <td className="w-2/12 p-4 text-left">{item.id}</td>
              <td className="w-1/12 p-4 text-left">{item.type}</td>
              <td className="w-2/12 p-4 text-left">{item.subtitle}</td>
              <td className="w-1/12 p-4 text-left">{item.altType}</td>
              <td className="w-2/12 p-4 text-left">{item.minSize}</td>
              <td className="w-3/12 p-4 text-left">{item.maxSize}</td>

              <td className="flex w-10/12 justify-center p-4 text-left">
                <a
                  onClick={() => handleDelete(index)}
                  className="cursor-pointer"
                >
                  {IconClose}
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <ModalProduct
        isOpen={isOpenModalProduct}
        onRequestClose={handleCloseModalProduct}
      />
    </>
  )
}
