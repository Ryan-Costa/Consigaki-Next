'use client'

import { z } from 'zod'
import { Input } from '../../Common/Input'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/navigation'
import { ButtonSave } from '../../Common/ButtonSave'
import { patchRevalidateItems } from '../../../functions/patchRevalidateItems'
import { zodResolver } from '@hookform/resolvers/zod'
import { DropdownForm } from '../../DropdownForm'
import { useState, useTransition } from 'react'
import ToggleSwitch from '../../ToggleSwitch'
import { IUserID } from '@/interfaces/User'
import { IProviderID } from '@/interfaces/Provider'
import { CpfMask } from '@/components/Mask/CpfMask'

const schemaUserForm = z.object({
  name: z.string().nonempty('O Nome é obrigatório').toUpperCase(),
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

type UsersFormProps = z.infer<typeof schemaUserForm>

export default function UserForm({ data }: { data: IProviderID }) {
  const [, startTransition] = useTransition()
  const [cpfMask, setCpfMask] = useState()
  const { back } = useRouter()

  const users = data.data

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<UsersFormProps>({
    resolver: zodResolver(schemaUserForm),
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
    const newData = { ...data, cpf: removedCpfMask }

    return newData
  }

  const handleFormSubmit = (dataForm: UsersFormProps) => {
    const newData = newUnmaskedCpfData(dataForm)
    console.log(newData)
    const usersUrl = `/users/${users.id}`

    startTransition(() =>
      patchRevalidateItems<UsersFormProps>(usersUrl, newData),
    )
    back()
  }

  const handleChange = (e: any) => {
    setCpfMask(CpfMask(e.target.value))
    console.log(cpfMask)
  }

  return (
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
            label="Celular"
            type="text"
            name="phoneNumber"
            placeholder="(00) 0 0000-0000"
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
            label="Data de nascimento"
            type="text"
            name="birthDate"
            placeholder="00/00/0000"
            className="w-full"
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
          label="Cadastro"
          type="text"
          name="createdAt"
          value={new Date(users.createdAt).toLocaleDateString()}
          className="w-full"
          readOnly
          disabled
        />
        <Input
          label="Alterado"
          type="text"
          name="updatedAt"
          value={new Date(users.updatedAt).toLocaleDateString()}
          className="w-full"
          readOnly
          disabled
        />
      </div>
      <ToggleSwitch isChecked={users.active} />
      <ButtonSave type="submit" />
    </form>
  )
}
