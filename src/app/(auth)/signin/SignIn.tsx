'use client'

import ClickHere from '@/components/ClickHere'
import InputMask from '@/components/compCommon/InputMask'
import { AuthContext } from '@/contexts/AuthContext'
import { zodResolver } from '@hookform/resolvers/zod'
import { Metadata } from 'next'
import { useContext, useTransition } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import { z } from 'zod'
import { IconePass } from '../../../../public/icons'

export const metadata: Metadata = {
  title: 'Login',
  description: 'Entre',
}

const loginUserFormSchema = z.object({
  cpf: z
    .string()
    .nonempty('O CPF é obrigatório')
    .min(14, 'Formato do CPF é inválido'),
  password: z.string().min(6, 'A senha precisa de no mínimo 9 caracteres'),
})

type LoginUserFormData = z.infer<typeof loginUserFormSchema>

export default function SignIn() {
  const [isPending, startTransition] = useTransition()
  const { signIn, messageError } = useContext(AuthContext)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginUserFormData>({
    resolver: zodResolver(loginUserFormSchema),
    defaultValues: {
      cpf: '',
      password: '',
    },
  })

  const newUnmaskedCpfData = (data: any) => {
    const removedCpfMask = data.cpf.replace(/\D/g, '')
    const newData = {
      cpf: removedCpfMask,
      password: data.password,
    }

    return newData
  }

  const handleSignIn = (data: any) => {
    const newData = newUnmaskedCpfData(data)
    startTransition(() => signIn(newData))
  }

  console.log(isPending)
  return (
    <div className="flex w-492 flex-col">
      <form
        onSubmit={handleSubmit(handleSignIn)}
        className="flex w-full flex-col"
      >
        <InputMask register={register} name="cpf" errors={errors.cpf} />

        <div className="relative z-0 mb-8 flex flex-col gap-1">
          <input
            {...register('password')}
            type="password"
            className={`
              peer block w-full appearance-none border-0 border-b-2 
              border-white bg-transparent px-0 py-2.5 
              text-sm text-white focus:border-white 
              focus:outline-none focus:ring-0
            `}
            placeholder=" "
          />
          {errors.password && (
            <span className="text-sm text-red-500">
              {errors.password.message}
            </span>
          )}

          {messageError && (
            <>
              <div className="absolute text-transparent">
                {toast.error(messageError.message)}
              </div>
            </>
          )}

          <label
            htmlFor="pass"
            className={`
              align-center absolute top-2 -z-10 flex origin-[0]
              -translate-y-6 scale-75 transform gap-2 text-lg text-white 
              duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100
              peer-focus:left-0 
              peer-focus:-translate-y-6 peer-focus:scale-100
              peer-focus:text-white
            `}
          >
            {IconePass} Senha
          </label>
        </div>

        <ClickHere message="Não é cadastrado?" href="/signup" />

        <button
          type="submit"
          className={`mt-4 flex justify-center rounded-xl bg-dark-blue px-40 py-5 opacity-80 hover:opacity-100`}
        >
          {isPending ? 'CARREGANDO' : 'ENTRAR'}
        </button>
      </form>
    </div>
  )
}
