'use client'
import { useState } from 'react'
import { IconClose } from '../../../public/icons'
import ModalBanner from '../modal/ModalBanner'
import ModalProduct from '../modal/ModalProduct'

export function TableEditAgreement() {
  const [isOpenModalBanner, setIsOpenModalBanner] = useState(false)
  const [isOpenModalProduct, setIsOpenModalProduct] = useState(false)
  const [agreementsData, setAgreementsData] = useState([
    {
      nome: 'Empréstimo',
      banner: 'http://aws.s3.imagem.com/teste',
      ativo: 'Sim',
    },
    {
      nome: 'Empréstimo',
      banner: 'http://aws.s3.imagem.com/teste',
      ativo: 'Não',
    },
  ])

  const handleDelete = (index: any) => {
    const updateData = [...agreementsData]
    updateData.splice(index, 1)
    setAgreementsData(updateData)
  }

  const handleOpenModalBanner = () => {
    setIsOpenModalBanner(true)
  }

  const handleCloseModalBanner = () => {
    setIsOpenModalBanner(false)
  }

  const handleOpenModalProduct = () => {
    setIsOpenModalProduct(true)
  }

  const handleCloseModalProduct = () => {
    setIsOpenModalProduct(false)
  }

  return (
    <>
      <table className="mt-4 w-full text-left">
        <thead>
          <tr>
            <th className="p-4 text-left">Nome Produto</th>
            <th className="p-4 text-left">Banner</th>
            <th className="p-4 text-left">Ativo</th>
            <th className="p-4 text-left">Excluir</th>
          </tr>
        </thead>
        <tbody>
          {agreementsData.map((item, index) => (
            <tr className="border-y" key={item.nome}>
              <td className="w-1/6 p-4 text-left">{item.nome}</td>
              <td className="w-3/6 p-4 text-left">
                <button
                  onClick={handleOpenModalBanner}
                  className="font-semibold underline"
                >
                  {item.banner}
                </button>
              </td>
              <td className="w-1/6 p-4 text-left">{item.ativo}</td>
              <td className="flex w-2/5 justify-center p-4 text-left">
                <a
                  onClick={() => handleDelete(index)}
                  className="cursor-pointer"
                >
                  {IconClose}
                </a>
                <ModalBanner
                  isOpen={isOpenModalBanner}
                  onRequestClose={handleCloseModalBanner}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="w-full">
        <button
          className="mt-9 rounded-md bg-bs-teal-2 px-6 py-3 text-white outline-none"
          onClick={handleOpenModalProduct}
        >
          + Adicionar Produto
        </button>
        <ModalProduct
          isOpen={isOpenModalProduct}
          onRequestClose={handleCloseModalProduct}
        />
      </div>
    </>
  )
}
