import { Roboto } from 'next/font/google'
import React, { useTransition } from 'react'
import { ButtonAdd } from '@/components/Common/ButtonAdd'
import ImageUploadProductAgreement from '@/components/UI/ImageUploadProductAgreement'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { DropdownForm } from '@/components/DropdownForm'
import {
  AgreementProduct,
  PostAgreementProduct,
  ProductGetAll,
} from '@/interfaces/AgreementProduct'
import { formatString } from '@/functions/formatString'
import { postRevalidateItems } from '@/functions/postRevalidateItems'
import { toast } from 'react-toastify'
import { mutate } from 'swr'
import api from '@/services/server/api'

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700'],
})

// PARA OBTER A URL DESCOMENTE AS LINHAS [33, 43-45] E ADICIONE A PROPRIEDADE
// onImageChange PASSANDO handleImageChange.

interface AddProductAgreementProps {
  agreementId: string
  allProducts: ProductGetAll
}

export default function AddProductAgreement({
  agreementId,
  allProducts,
}: AddProductAgreementProps) {
  const [, startTransition] = useTransition()

  const allProductsArray = allProducts.data.products
  const optionsValues = allProductsArray.map((product) => product.id.toString())
  const validationOptions = ['', ...optionsValues] as const

  const schemaAddProductAgreement = z.object({
    productId: z.enum(validationOptions, {
      errorMap: () => ({ message: 'Selecione um produto' }),
    }),
    productImage: z
      .instanceof(FileList)
      .transform((list) => (list.length > 0 ? list.item(0) : null))
      .refine((value) => value !== null, { message: 'Selecione uma imagem' })
      .refine(
        (value) => value !== null && value.size <= 10 * 1024 * 1024,
        'A imagem precisa ter no máximo 10Mb ',
      ),
  })

  type NewProductAgreementProps = z.infer<typeof schemaAddProductAgreement>

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<NewProductAgreementProps>({
    resolver: zodResolver(schemaAddProductAgreement),
  })

  const handleFormSubmit = (dataForm: NewProductAgreementProps) => {
    const { productImage, productId } = dataForm

    const formData = new FormData()
    formData.append('docs', productImage as File)
    formData.append('productId', productId)
    formData.append('agreementId', agreementId)

    startTransition(() =>
      postRevalidateItems<PostAgreementProduct>('/agreement-products', formData)
        .then((response) => {
          console.log(response)
          if (response.message === 'created') {
            api
              .get<AgreementProduct>(`/agreement-products/${agreementId}`)
              .then(() => mutate(`/agreement-products/${agreementId}`))
            toast.success(response.message)
          } else {
            toast.warn(response.message)
          }
        })
        .catch((error) => {
          toast.error(error.message)
        }),
    )
  }

  return (
    <div className={`${roboto.className} flex h-full w-full flex-col px-4`}>
      <div className="flex h-full flex-col items-start justify-start">
        <form onSubmit={handleSubmit(handleFormSubmit)} className="w-full">
          <div className="mt-5">
            <div className="flex flex-col">
              <label className="mb-4 text-lg font-bold">Produto</label>
              <DropdownForm
                name="productId"
                register={register}
                className="w-1/4"
                options={[
                  { name: 'selecione', displayName: 'SELECIONE', value: 999 },
                  ...allProductsArray.map((product) => ({
                    name: formatString(product.name),
                    displayName: product.name,
                    value: product.id,
                  })),
                ]}
              />
            </div>
            {errors.productId && (
              <span className="text-md font-bold tracking-wide text-red-600">
                {errors.productId.message}
              </span>
            )}

            <div className="mt-5 flex items-center gap-2">
              <p className="text-base font-bold">Imagem</p>
              <div className="h-[1px] w-full bg-line-gray" />
            </div>
            <div>
              <div>
                <ImageUploadProductAgreement
                  name="productImage"
                  register={register}
                />
                {errors.productImage && (
                  <span className="text-md font-bold tracking-wide text-red-600">
                    {errors.productImage.message}
                  </span>
                )}
              </div>
            </div>
          </div>
          <ButtonAdd name="Produto" type="submit" />
        </form>
      </div>
    </div>
  )
}
