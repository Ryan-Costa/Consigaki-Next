'use client'

import { CpfMask } from '@/components/Mask/CpfMask'
import { DateMask } from '@/components/Mask/DateMask'
import { TelMask } from '@/components/Mask/TelMask'
import { toUpperCase } from '@/functions/toUpperCase'
import { IUser } from '@/interfaces/User'
import { useEffect, useTransition } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import { z } from 'zod'
import { DropdownForm } from '../../DropdownForm'
import ToggleSwitch from '../../ToggleSwitch'
import { ButtonSave } from '../../compCommon/ButtonSave'
import { Input } from '../../compCommon/Input'

import { convertToBoolean } from '@/functions/convertToBoolean'
import { putRevalidateItems } from '@/functions/putRevalidateItems'
import { useRouter } from 'next/navigation'

const schemaUserForm = z.object({
  blocked: z.string(),
})

interface UserIdProps {
  dataUserId: IUser
}

type UsersFormProps = z.infer<typeof schemaUserForm>

export default function UserForm({ dataUserId }: UserIdProps) {
  const [, startTransition] = useTransition()
  const { back } = useRouter()

  const users = dataUserId.data

  const { handleSubmit, register, setValue } = useForm<UsersFormProps>()

  const initialValue = Number(users.blocked)

  useEffect(() => {
    setValue('blocked', String(initialValue))
  }, [setValue, initialValue])

  const handleFormSubmit = (dataForm: UsersFormProps) => {
    const dataFormatted = {
      blocked: convertToBoolean(dataForm.blocked),
    }

    let usersUrl: any

    if (dataFormatted.blocked) {
      usersUrl = `/users/${users.id}/block`
    } else {
      usersUrl = `/users/${users.id}/unblock`
    }

    startTransition(() =>
      putRevalidateItems<UsersFormProps>(usersUrl).then((response) => {
        toast.success(response.message)
        back()
      }),
    )
  }

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)}>
      <div className="mt-6 flex gap-6">
        <div className="w-full">
          <Input
            label="Nome"
            type="text"
            name="name"
            value={toUpperCase(users.name)}
            disabled
            readOnly
            placeholder="Digite seu nome completo"
          />
        </div>
        <div className="w-full">
          <Input
            label="E-mail"
            type="text"
            name="email"
            value={users.email}
            disabled
            readOnly
            placeholder="seunome@consigaki.com.br"
            className="w-full"
          />
        </div>
      </div>
      <div className="mb-6 mt-6 flex gap-6">
        <div className="w-full">
          <Input
            maxLength={14}
            label="CPF"
            type="text"
            name="cpf"
            placeholder="000.000.000-00"
            value={CpfMask(users.cpf)}
            disabled
            readOnly
          />
        </div>
        <div className="w-full">
          <Input
            label="Celular"
            type="text"
            name="phoneNumber"
            placeholder="(00) 0 0000-0000"
            value={TelMask(users.phoneNumber)}
            disabled
            readOnly
          />
        </div>
        <div className="w-full">
          <Input
            label="Data de nascimento"
            type="text"
            name="birthDate"
            placeholder="00/00/0000"
            className="w-full"
            value={DateMask(users.birthDate)}
            disabled
            readOnly
          />
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
            defaultValue={Number(users.blocked)}
            options={[
              {
                name: 'liberado',
                displayName: 'Login Liberado',
                value: '0',
              },
              {
                name: 'bloqueado',
                displayName: 'Login Bloqueado',
                value: '1',
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
