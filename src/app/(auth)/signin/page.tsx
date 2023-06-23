'use client'

import Link from 'next/link'
import { IconePass, IconeUser } from '../../../../public/icons'
import { useForm } from 'react-hook-form'
import { useContext, useState } from 'react'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import ClickHere from '@/components/ClickHere'
import { AuthContext } from '@/contexts/AuthContext'
import { CpfMask } from '@/components/Common/CpfMask'

const loginUserFormSchema = z.object({
  cpf: z.string().nonempty('O CPF é obrigatório').min(14, 'O CPF é inválido'),
  password: z.string().min(6, 'A senha precisa de no mínimo 6 caracteres'),
})

type LoginUserFormData = z.infer<typeof loginUserFormSchema>

const defaultValues = {
  cpf: '',
  password: '',
}

export default function SignIn() {
  const { signIn } = useContext(AuthContext)
  const [cpfMask, setCpfMask] = useState()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginUserFormData>({
    resolver: zodResolver(loginUserFormSchema),
    defaultValues,
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
    signIn(newData)
    console.log(newData)
  }

  const handleChange = (e: any) => {
    setCpfMask(CpfMask(e.target.value))
    console.log(cpfMask)
  }

  return (
    <div className="mr-64 flex w-492 flex-col">
      <form
        onSubmit={handleSubmit(handleSignIn)}
        className="flex w-full flex-col"
      >
        <div className="relative z-0 mb-20 flex flex-col gap-1">
          <input
            {...register('cpf')}
            type="text"
            maxLength={14}
            className={`
                peer block w-full appearance-none border-0 border-b-2 
                border-white bg-transparent px-0 py-2.5 
                text-sm text-white focus:border-white 
                focus:outline-none focus:ring-0
              `}
            placeholder=" "
            value={cpfMask}
            onChange={handleChange}
          />
          {errors.cpf && (
            <span className="text-sm text-red-500">{errors.cpf.message}</span>
          )}
          <label
            htmlFor="pass"
            className={`
              align-center absolute 
              top-2 
              -z-10 flex
              origin-[0] 
              -translate-y-6 
              scale-100 
              transform 
              gap-2 
              text-lg 
              text-white 
              duration-300 
              peer-placeholder-shown:translate-y-0 
              peer-placeholder-shown:scale-100
              peer-focus:left-0 peer-focus:-translate-y-6
              peer-focus:scale-100 
              peer-focus:text-white
            `}
          >
            {IconeUser} CPF
          </label>
        </div>

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

        <ClickHere />
        <div>
          <Link
            href="/forget-password"
            className="font-karla font-bold text-click-here underline"
          >
            Esqueceu sua senha?
          </Link>
        </div>

        <button
          type="submit"
          className="mt-10 flex justify-center rounded-xl bg-dark-blue px-40 py-5 opacity-80 hover:opacity-100"
        >
          Entrar
        </button>
      </form>
    </div>
  )
}
