'use client'

import AddProductAgreement from './AddProductAgreement'
import api from '@/services/server/api'
import { ImpulseSpinner } from 'react-spinners-kit'
import useSWR, { mutate } from 'swr'
import {
  AgreementProduct,
  MessageDelete,
  ProductGetAll,
} from '@/interfaces/AgreementProduct'
import { toast } from 'react-toastify'
import TableProductsAgreement from './TableProductsAgreement'

interface ProductAgreementProps {
  agreementId: string
  allProducts: ProductGetAll
}

export function Products({ agreementId, allProducts }: ProductAgreementProps) {
  const URL = `/agreement-products/${agreementId}`

  const { data: productsAgreementById, error } = useSWR(URL, (url) =>
    api.get<AgreementProduct>(url).then((res) => res.data.data),
  )

  console.log(productsAgreementById)

  if (error) {
    return <div>Error ao carregar os dados</div>
  }

  // if (!productsAgreementById) {
  //   return <div>Carregando...</div>
  // }

  const handleDelete = (productId: number) => {
    api
      .delete<MessageDelete>(`/agreement-products/${productId}`)
      .then((res) => {
        mutate(URL)
        toast.success(res.data.message)
      })
      .catch((err) => toast.error(err.response.data.message))
  }

  return (
    <>
      <AddProductAgreement
        agreementId={agreementId}
        allProducts={allProducts}
      />

      {!productsAgreementById ? (
        <table className="mt-4 w-full text-left">
          <thead>
            <tr>
              <th className="p-4 text-left">Nome Produto</th>
              <th className="p-4 text-left">Imagem</th>
              <th className="p-4 text-left">Excluir</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-y">
              <td className="w-2/6 p-4 text-left text-sm">
                <ImpulseSpinner
                  color="#d1d5db"
                  frontColor="#d1d5db"
                  backColor="#94a3b8"
                />
              </td>
              <td className="w-4/6 p-4 text-left  text-sm">
                <ImpulseSpinner
                  color="#d1d5db"
                  frontColor="#d1d5db"
                  backColor="#94a3b8"
                />
              </td>
              <td className="w-6/6 flex justify-center p-4 text-left text-sm">
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
        <TableProductsAgreement
          productsAgreementById={productsAgreementById}
          deleteProduct={handleDelete}
        />
      )}
    </>
  )
}
