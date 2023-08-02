import { ButtonAdd } from '@/components/Common/ButtonAdd'
import { Input } from '@/components/Common/Input'
import { DropdownForm } from '@/components/DropdownForm'
import { postRevalidateItems } from '@/functions/postRevalidateItems'
import {
  AgreementParameter,
  PostAgreementParameter,
} from '@/interfaces/AgreementParameter'
import api from '@/services/server/api'
import { zodResolver } from '@hookform/resolvers/zod'
import { useTransition } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import { mutate } from 'swr'
import { z } from 'zod'

const validationOptions = ['string', 'number', 'dateTime'] as const

const schemaAddParameterAgreement = z
  .object({
    identifier: z.string().nonempty('Digite um identificador'),
    type: z.string().nonempty('Digite um tipo'),
    label: z.string().nonempty('Digite uma legenda').toUpperCase(),
    validationType: z.enum(validationOptions, {
      errorMap: () => ({ message: 'Digite o tipo do campo' }),
    }),
    validationMin: z.coerce.number().min(1, 'Digite o tamanho mínimo'),
    validationMax: z.coerce.number().min(1, 'Digite o tamanho máximo'),
  })
  .refine((fields) => fields.validationMin <= fields.validationMax, {
    path: ['validationMin'],
    message: 'Precisa ser menor que o tamanho máximo',
  })

type NewParameterAgreementProps = z.infer<typeof schemaAddParameterAgreement>

interface AddParameterAgreementProps {
  agreementId: string
}

export default function AddParameterAgreement({
  agreementId,
}: AddParameterAgreementProps) {
  const [, startTransition] = useTransition()

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<NewParameterAgreementProps>({
    resolver: zodResolver(schemaAddParameterAgreement),
  })

  const handleFormSubmit = (dataForm: NewParameterAgreementProps) => {
    console.log(dataForm)

    const dataFormatted = {
      agreementId: Number(agreementId),
      ...dataForm,
    }

    console.log(dataFormatted)
    startTransition(() =>
      postRevalidateItems<PostAgreementParameter>(
        `/agreement-parameters`,
        dataFormatted,
      )
        .then((response) => {
          console.log(response)
          if (response.message === 'created') {
            api
              .get<AgreementParameter>(`/agreement-parameters/${agreementId}`)
              .then(() => mutate(`/agreement-parameters/${agreementId}`))
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
    <>
      <form onSubmit={handleSubmit(handleFormSubmit)}>
        <div className="flex gap-6">
          <div className="w-full">
            <Input
              register={register}
              label="Identificador"
              type="text"
              name="identifier"
              className="w-full"
              classNameLabel="font-normal"
            />
            {errors.identifier && (
              <span className="text-md font-bold tracking-wide text-red-600">
                {errors.identifier.message}
              </span>
            )}
          </div>
          <div className="w-full">
            <Input
              register={register}
              label="Tipo"
              type="text"
              name="type"
              className="w-full"
              classNameLabel="font-normal"
            />
            {errors.type && (
              <span className="text-md font-bold tracking-wide text-red-600">
                {errors.type.message}
              </span>
            )}
          </div>
          <div className="w-full">
            <Input
              register={register}
              label="Legenda"
              type="text"
              name="label"
              className="w-full"
              classNameLabel="font-normal"
            />
            {errors.label && (
              <span className="text-md font-bold tracking-wide text-red-600">
                {errors.label.message}
              </span>
            )}
          </div>
          <Input label="" type="" name="" className="invisible w-full" />
        </div>
        <div className="mt-5 flex items-center gap-2">
          <p className="text-base font-bold">Validação</p>
          <div className="h-[1px] w-full bg-line-gray" />
        </div>
        <div className="mt-3 flex justify-end gap-6">
          <div className="flex w-full flex-col">
            <div className="flex w-full flex-col gap-2">
              <label className="font-normal">Tipo do campo</label>
              <DropdownForm
                register={register}
                name="validationType"
                options={[
                  { name: 'selecione', displayName: 'Selecione', value: '999' },
                  { name: 'string', displayName: 'String', value: 'string' },
                  { name: 'number', displayName: 'Number', value: 'number' },
                  {
                    name: 'dateTime',
                    displayName: 'DateTime',
                    value: 'dateTime',
                  },
                ]}
              />
            </div>
            {errors.validationType && (
              <span className="text-md font-bold tracking-wide text-red-600">
                {errors.validationType.message}
              </span>
            )}
          </div>
          <div className="w-full">
            <Input
              register={register}
              label="Tamanho Mínimo"
              type="number"
              name="validationMin"
              className="w-full"
              classNameLabel="font-normal"
            />
            {errors.validationMin && (
              <span className="text-md font-bold tracking-wide text-red-600">
                {errors.validationMin.message}
              </span>
            )}
          </div>
          <div className="w-full">
            <Input
              register={register}
              label="Tamanho Máximo"
              type="number"
              name="validationMax"
              className="w-full"
              classNameLabel="font-normal"
            />
            {errors.validationMax && (
              <span className="text-md font-bold tracking-wide text-red-600">
                {errors.validationMax.message}
              </span>
            )}
          </div>
          <ButtonAdd
            name=""
            styled="tableAgreement"
            type="submit"
            className="w-full"
          />
        </div>
      </form>
    </>
  )
}
