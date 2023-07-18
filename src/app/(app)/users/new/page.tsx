'use client'

import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/navigation'
import { postRevalidateItems } from '@/functions/postRevalidateItems'
import { zodResolver } from '@hookform/resolvers/zod'
import { useState, useTransition } from 'react'
import { ButtonSave } from '@/components/Common/ButtonSave'
import { Input } from '@/components/Common/Input'
import { DropdownForm } from '@/components/DropdownForm'
import { CpfMask } from '@/components/Mask/CpfMask'
import { DateMask } from '@/components/Mask/DateMask'
import { TelMask } from '@/components/Mask/TelMask'

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
  blocked: z.string(),
})

type NewUserFormProps = z.infer<typeof schemaNewUserForm>

export default function NewUserForm() {
  const [, startTransition] = useTransition()
  const [cpfMask, setCpfMask] = useState()
  const [telMask, setTelMask] = useState()
  const [dateMask, setDateMask] = useState()
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
      blocked: '',
    },
  })

  const newUnmaskedCpfData = (data: any) => {
    const removedCpfMask = data.cpf.replace(/\D/g, '')
    const removedTelMask = data.phoneNumber.replace(/\D/g, '')
    const removedDateMask = data.birthDate.replace(/\D/g, '')
    const newData = {
      ...data,
      cpf: removedCpfMask,
      phoneNumber: removedTelMask,
      birthDate: removedDateMask,
    }

    return newData
  }

  const handleFormSubmit = (dataForm: NewUserFormProps) => {
    const newData = newUnmaskedCpfData(dataForm)
    const usersUrl = '/users'
    console.log(newData)

    startTransition(() =>
      postRevalidateItems<NewUserFormProps>(usersUrl, newData),
    )

    back()
  }

  const handleChange = (event: any) => {
    const { name, value } = event.target

    let maskedValue

    if (name === 'cpf') {
      maskedValue = CpfMask(value)
      setCpfMask(maskedValue)
    } else if (name === 'phoneNumber') {
      maskedValue = TelMask(value)
      setTelMask(maskedValue)
    } else if (name === 'birthDate') {
      maskedValue = DateMask(value)
      setDateMask(maskedValue)
    }

    console.log(maskedValue)
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
          <div className="flex w-full flex-col gap-2">
            <label htmlFor="" className="font-semibold">
              Acesso
            </label>
            <DropdownForm
              name="blocked"
              register={register}
              defaultValue="Selecione"
              options={[
                {
                  name: 'bloqueado',
                  displayName: 'Login Bloqueado',
                  value: 0,
                },
                {
                  name: 'liberado',
                  displayName: 'Login Liberado',
                  value: 1,
                },
              ]}
            />
          </div>
          <Input
            register={register}
            label="Cadastro"
            type="text"
            name="cadastro"
            placeholder="00/00/0000"
            className="w-full"
          />
          <Input
            register={register}
            label="Alterado"
            type="text"
            name="alterado"
            placeholder="00/00/0000"
            className="w-full"
          />
        </div>
        <ButtonSave type="submit" />
      </form>
    </>
  )
}
