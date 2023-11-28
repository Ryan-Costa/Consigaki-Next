'use client'

import { ButtonSave } from '@/components/Common/ButtonSave'
import { Input } from '@/components/Common/Input'
import { DropdownForm } from '@/components/DropdownForm'
import { CpfMask } from '@/components/Mask/CpfMask'
import { DateMask } from '@/components/Mask/DateMask'
import { TelMask } from '@/components/Mask/TelMask'
import { convertToBoolean } from '@/functions/convertToBoolean'
import { formatDateISO } from '@/functions/formatDateISO'
import { postRevalidateItems } from '@/functions/postRevalidateItems'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { useState, useTransition } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import { z } from 'zod'

const validationOptions = ['0', '1'] as const

const schemaNewUserForm = z.object({
  name: z.string().nonempty('Digite o nome do usuário').toUpperCase(),
  email: z
    .string()
    .nonempty('O E-mail é obrigatório')
    .email('Formato de e-mail inválido')
    .toLowerCase()
    .refine((email) => {
      return email.endsWith('@consigaki.com.br')
    }, 'O e-mail precisa terminar com @consigaki.com.br'),
  cpf: z.string().nonempty('O CPF é obrigatório').min(14, 'O CPF é inválido'),
  phoneNumber: z.string().min(13, 'O Número de telefone é inválido'),
  birthDate: z.string().min(10, 'A data de nascimento é inválida'),
  blocked: z.enum(validationOptions, {
    errorMap: () => ({ message: 'O Acesso é obrigatório' }),
  }),
})

type NewUserFormProps = z.infer<typeof schemaNewUserForm>
type MaskFunctions = { [key: string]: (value: string) => string }

export default function NewUserForm() {
  const [, startTransition] = useTransition()
  const [cpfMask, setCpfMask] = useState<string | undefined>(undefined)
  const [telMask, setTelMask] = useState<string | undefined>(undefined)
  const [dateMask, setDateMask] = useState<string | undefined>(undefined)
  const { back } = useRouter()
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<NewUserFormProps>({
    resolver: zodResolver(schemaNewUserForm),
    defaultValues: {
      name: '',
      email: '',
      phoneNumber: '',
      birthDate: '',
    },
  })

  const newUnmaskedCpfData = (data: any) => {
    const removedCpfMask = data.cpf.replace(/\D/g, '')
    const removedTelMask = data.phoneNumber.replace(/\D/g, '')
    const newData = {
      ...data,
      cpf: removedCpfMask,
      phoneNumber: removedTelMask,
    }

    return newData
  }

  const handleFormSubmit = (dataForm: NewUserFormProps) => {
    const newData = newUnmaskedCpfData(dataForm)
    const dataFormatted = {
      ...newData,
      birthDate: formatDateISO(newData.birthDate),
      blocked: convertToBoolean(newData.blocked),
      codeTokenType: 0,
      expoPushToken: 'teste',
    }

    const usersUrl = '/users'

    startTransition(() =>
      postRevalidateItems<NewUserFormProps>(usersUrl, dataFormatted).then(
        (response) => {
          if (response) {
            if (Object.values(response).length === 3) {
              toast.success(response.message)
              back()
            } else {
              toast.error(response.message)
            }
          }
        },
      ),
    )
  }

  const handleChange = (event: any) => {
    const { name, value } = event.target

    const maskFunctions: MaskFunctions = {
      cpf: CpfMask,
      phoneNumber: TelMask,
      birthDate: DateMask,
    }

    if (name in maskFunctions) {
      const maskedValue = maskFunctions[name](value)

      switch (name) {
        case 'cpf':
          setCpfMask(maskedValue)
          break
        case 'phoneNumber':
          setTelMask(maskedValue)
          break
        case 'birthDate':
          setDateMask(maskedValue)
          break
        default:
          break
      }
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit(handleFormSubmit)}>
        <div className="mt-6 flex gap-6">
          <div className="w-full">
            <Input
              register={register}
              label="Nome"
              type="text"
              name="name"
              placeholder="Digite seu nome completo"
            />
            {errors.name && (
              <span className="text-md font-bold tracking-wide text-red-600">
                {errors.name.message}
              </span>
            )}
          </div>
          <div className="w-full">
            <Input
              register={register}
              label="E-mail"
              type="text"
              name="email"
              placeholder="seunome@consigaki.com.br"
              className="w-full"
            />
            {errors.email && (
              <span className="text-md font-bold tracking-wide text-red-600">
                {errors.email.message}
              </span>
            )}
          </div>
        </div>
        <div className="mb-6 mt-6 flex gap-6">
          <div className="w-full">
            <Input
              register={register}
              maxLength={14}
              label="CPF"
              type="text"
              name="cpf"
              placeholder="000.000.000-00"
              value={cpfMask}
              onChange={handleChange}
            />
            {errors.cpf && (
              <span className="text-md font-bold tracking-wide text-red-600">
                {errors.cpf.message}
              </span>
            )}
          </div>
          <div className="w-full">
            <Input
              register={register}
              maxLength={15}
              label="Celular"
              type="text"
              name="phoneNumber"
              placeholder="(00) 00000-0000"
              value={telMask}
              onChange={handleChange}
            />
            {errors.phoneNumber && (
              <span className="text-md font-bold tracking-wide text-red-600">
                {errors.phoneNumber.message}
              </span>
            )}
          </div>
          <div className="w-full">
            <Input
              register={register}
              maxLength={10}
              label="Data de nascimento"
              type="text"
              name="birthDate"
              placeholder="00/00/0000"
              className="w-full"
              value={dateMask}
              onChange={handleChange}
            />
            {errors.birthDate && (
              <span className="text-md font-bold tracking-wide text-red-600">
                {errors.birthDate.message}
              </span>
            )}
          </div>
        </div>
        <div className="mb-6 mt-6 flex gap-6">
          <div className="flex w-full flex-col">
            <label htmlFor="" className="mb-2 font-semibold">
              Acesso
            </label>
            <DropdownForm
              name="blocked"
              register={register}
              options={[
                {
                  name: 'selecione',
                  displayName: 'Selecione',
                  value: 999,
                },
                {
                  name: 'bloqueado',
                  displayName: 'Login Bloqueado',
                  value: 1,
                },
                {
                  name: 'liberado',
                  displayName: 'Login Liberado',
                  value: 0,
                },
              ]}
            />
            {errors.blocked && (
              <span className="text-md font-bold tracking-wide text-red-600">
                {errors.blocked.message}
              </span>
            )}
          </div>
          <Input
            register={register}
            label="Cadastro"
            type="text"
            name="cadastro"
            placeholder="00/00/0000"
            className="w-full"
            disabled
            readOnly
          />
          <Input
            register={register}
            label="Alterado"
            type="text"
            name="alterado"
            placeholder="00/00/0000"
            className="w-full"
            disabled
            readOnly
          />
        </div>
        <ButtonSave type="submit" />
      </form>
    </>
  )
}
