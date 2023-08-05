'use client'

import { ButtonSave } from '@/components/Common/ButtonSave'
import { Metadata } from 'next'
import { Inter, Roboto } from 'next/font/google'

import Link from 'next/link'
import { IconInsumo } from '../../../../public/icons'
import ButtonGoBack from '@/components/Common/ButtonBack'
import { Input } from '@/components/Common/Input'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import api from '@/services/server/api'
import { ChangePassowrd } from '@/interfaces/ChangePassword'
const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '700'],
})

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700'],
})

export const metadata: Metadata = {
  title: 'Convênios',
}

const schemaChangePasswordForm = z
  .object({
    currentPass: z.string().nonempty('Digite sua senha atual'),
    newPass: z.string().min(6, 'A senha ter no mínimo 6 caracteres'),
    repeatPass: z.string().min(6, 'A senha ter no mínimo 6 caracteres'),
  })
  .refine((fields) => fields.repeatPass === fields.newPass, {
    path: ['repeatPass'],
    message: 'As senhas precisam ser iguais',
  })

type ChangePassowrdFormDataProps = z.infer<typeof schemaChangePasswordForm>
export default function ChangePassword() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ChangePassowrdFormDataProps>({
    resolver: zodResolver(schemaChangePasswordForm),
  })

  const handleFormSubmit = (dataForm: ChangePassowrdFormDataProps) => {
    // api.put<ChangePassowrd>('/users/user/change-password')
  }

  return (
    <>
      <div
        className={`${inter.className} h-full w-full rounded-md bg-white px-6 py-14`}
      >
        <ButtonGoBack />
        <div className="mt-8 flex items-center gap-2">
          <h1 className="text-2xl font-bold">Alterar senha</h1>
          {IconInsumo}
        </div>
        <p
          className={`${roboto.className} text-base tracking-tight text-text-regular`}
        >
          Prencha todos os campos
        </p>

        <form onSubmit={handleSubmit(handleFormSubmit)}>
          <div className="mb-6 mt-6 flex gap-6">
            <div className="flex w-1/3 flex-col">
              <Input
                register={register}
                name="currentPass"
                type="password"
                label="Digite sua senha atual"
                placeholder="******************"
              />
              {errors.currentPass && (
                <span className="text-md font-bold tracking-wide text-red-600">
                  {errors.currentPass.message}
                </span>
              )}
              <p
                className={`${roboto.className} mt-4 text-base tracking-tight text-text-regular`}
              >
                Caso tenha esquecido sua senha{' '}
                <Link href="/forget-password" className="text-blue-600">
                  clique aqui
                </Link>
              </p>
            </div>
          </div>
          <div className="mt-5 flex items-center gap-2">
            <span>
              <p
                className={`${roboto.className} whitespace-nowrap text-2xl font-bold`}
              >
                Agora escreva sua nova senha
              </p>
            </span>
            <div className="h-[1px] w-full bg-line-gray" />
          </div>
          <p
            className={`${roboto.className} text-base tracking-tight text-text-regular`}
          >
            certifique se de por as duas senhas iguais
          </p>
          <div className="mb-6 mt-6 flex flex-col gap-6">
            <div className="flex w-1/3 flex-col">
              <Input
                register={register}
                name="newPass"
                type="password"
                label="Nova senha"
                placeholder="******************"
              />
              {errors.newPass && (
                <span className="text-md font-bold tracking-wide text-red-600">
                  {errors.newPass.message}
                </span>
              )}
            </div>
            <div className="flex w-1/3 flex-col">
              <Input
                register={register}
                name="repeatPass"
                type="password"
                label="Repita a senha"
                placeholder="******************"
              />
              {errors.repeatPass && (
                <span className="text-md font-bold tracking-wide text-red-600">
                  {errors.repeatPass.message}
                </span>
              )}
            </div>
          </div>

          <ButtonSave />
        </form>
      </div>
    </>
  )
}
