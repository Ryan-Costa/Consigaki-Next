import { IProductAgreementID } from '@/interfaces/AgreementProduct'
import { IconClose } from '../../../../public/icons'
import { useState } from 'react'
import { ModalDelete } from '@/components/Modal/ModalDelete'

interface TableProductsAgremeentProps {
  productsAgreementById: IProductAgreementID[]
  deleteProduct: (productId: number) => void
}

export default function TableProductsAgreement({
  productsAgreementById,
  deleteProduct,
}: TableProductsAgremeentProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => {
    setIsModalOpen(true)
  }

  return (
    <table className="mt-4 w-full text-left">
      <thead>
        <tr>
          <th className="p-4 text-left">Nome Produto</th>
          <th className="p-4 text-left">Imagem</th>
          <th className="p-4 text-left">Excluir</th>
        </tr>
      </thead>
      <tbody>
        {productsAgreementById.map((product) => (
          <tr className="border-y" key={product.id}>
            <td className="w-2/6 p-4 text-left text-sm">
              {product.products.name}
            </td>
            <td className="w-4/6 p-4 text-left  text-sm">
              <a href={product.banner} className="font-semibold underline">
                Baixar
              </a>
            </td>
            <td className="w-6/6 flex justify-center p-4 text-left text-sm">
              <a onClick={openModal} className="cursor-pointer">
                {IconClose}
              </a>
              <ModalDelete
                isOpen={isModalOpen}
                onRequestClose={() => setIsModalOpen(false)}
                handleDelete={() => deleteProduct(product.id)}
              />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
