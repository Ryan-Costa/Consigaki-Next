'use client'

import { useForm } from 'react-hook-form'
import { useContext, useState } from 'react'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { CpfMask } from '@/components/Mask/CpfMask'
import { AuthContext } from '@/contexts/AuthContext'
import { Metadata } from 'next'
import ClickHere from '@/components/ClickHere'

export const metadata: Metadata = {
  title: 'Cadastro',
  description: 'Cadastre-se',
}

const createUserFormSchema = z
  .object({
    cpf: z
      .string()
      .nonempty('O CPF é obrigatório')
      .min(14, 'Formato do CPF é inválido'),
    name: z
      .string()
      .nonempty('O Nome é obrigatório')
      .min(3, 'O Nome é inválido')
      .toLowerCase(),
    email: z
      .string()
      .nonempty('O e-mail é obrigatório')
      .email('Formato de e-mail inválido')
      .toLowerCase()
      .refine((email) => {
        return email.endsWith('@consigaki.com.br')
      }, 'O e-mail precisa terminar com @consigaki.com.br'),
    confirmEmail: z
      .string()
      .nonempty('A confirmação de e-mail é obrigatória')
      .toLowerCase(),
    password: z.string().min(9, 'A senha precisa de no mínimo 9 caracteres'),
    confirmPassword: z
      .string()
      .min(9, 'A senha precisa de no mínimo 9 caracteres'),
  })
  .refine((fields) => fields.email === fields.confirmEmail, {
    path: ['confirmEmail'],
    message: 'Os e-mails não coincidem',
  })
  .refine((fields) => fields.password === fields.confirmPassword, {
    path: ['confirmPassword'],
    message: 'As senhas precisam ser iguais',
  })

type CreateUserFormData = z.infer<typeof createUserFormSchema>

export default function SignUp() {
  const { signUp } = useContext(AuthContext)
  const [cpfMask, setCpfMask] = useState('')
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateUserFormData>({
    resolver: zodResolver(createUserFormSchema),
  })

  const transformData = (cpf: any) => {
    const removedCpfMask = cpf.replace(/\D/g, '')
    const newData = removedCpfMask

    return newData
  }

  const handleSignUp = (data: CreateUserFormData) => {
    const newData = {
      cpf: transformData(data.cpf),
      name: data.name,
      email: data.email,
      password: data.password,
    }
    console.log(newData)
    signUp(newData)
  }

  const handleChange = (e: any) => {
    setCpfMask(CpfMask(e.target.value))
  }

  return (
    <div className="flex w-492 flex-col">
      <form
        autoComplete="off"
        onSubmit={handleSubmit(handleSignUp)}
        className="flex w-full flex-col gap-5"
      >
        <div className="relative z-0">
          <input
            {...register('name')}
            autoComplete="no"
            type="text"
            className={`
                peer mb-2 block w-full appearance-none 
                border-0 border-b-2 border-white bg-transparent 
                px-0 py-2.5 text-sm text-white
              focus:border-white focus:outline-none focus:ring-0
            `}
            placeholder=" "
          />
          {errors.name && (
            <span className="text-sm text-red-500">{errors.name.message}</span>
          )}
          <label
            htmlFor="name"
            className={`
                align-center absolute top-2 -z-10 flex origin-[0]
                -translate-y-6 scale-75 transform gap-2 text-lg text-white 
                duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100
                peer-focus:left-0 
                peer-focus:-translate-y-6 peer-focus:scale-100
              peer-focus:text-white
              `}
          >
            Nome
          </label>
        </div>
        <div className="relative z-0">
          <input
            {...register('cpf')}
            type="text"
            maxLength={14}
            className={`
                peer mb-2 block w-full appearance-none border-0 
                border-b-2 border-white bg-transparent px-0 
                py-2.5 text-sm text-white 
              focus:border-white focus:outline-none focus:ring-0
            `}
            placeholder=" "
            value={cpfMask}
            onChange={handleChange}
          />
          {errors.cpf && (
            <span className="text-sm text-red-500">{errors.cpf.message}</span>
          )}
          <label
            htmlFor="cpf"
            className={`
                align-center absolute top-2 -z-10 flex origin-[0]
                -translate-y-6 scale-75 transform gap-2 text-lg text-white 
                duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100
                peer-focus:left-0 
                peer-focus:-translate-y-6 peer-focus:scale-100
              peer-focus:text-white
              `}
          >
            CPF
          </label>
        </div>
        <div className="relative z-0">
          <input
            {...register('email')}
            type="text"
            className={`
                peer mb-2 block w-full appearance-none border-0 
                border-b-2 border-white bg-transparent px-0 
                py-2.5 text-sm text-white 
              focus:border-white focus:outline-none focus:ring-0
            `}
            placeholder=" "
          />
          {errors.email && (
            <span className="text-sm text-red-500">{errors.email.message}</span>
          )}
          <label
            htmlFor="email"
            className={`
                align-center absolute top-2 -z-10 flex origin-[0]
                -translate-y-6 scale-75 transform gap-2 text-lg text-white 
                duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100
                peer-focus:left-0 
                peer-focus:-translate-y-6 peer-focus:scale-100
              peer-focus:text-white
            `}
          >
            E-mail
          </label>
        </div>
        <div className="relative z-0">
          <input
            type="text"
            className={`
                peer mb-2 block w-full appearance-none border-0 
                border-b-2 border-white bg-transparent px-0 
                py-2.5 text-sm text-white 
              focus:border-white focus:outline-none focus:ring-0
            `}
            placeholder=" "
            {...register('confirmEmail')}
          />
          {errors.confirmEmail && (
            <span className="text-sm text-red-500">
              {errors.confirmEmail.message}
            </span>
          )}
          <label
            htmlFor="email"
            className={`
                align-center absolute top-2 -z-10 flex origin-[0]
                -translate-y-6 scale-75 transform gap-2 text-lg text-white 
                duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100
                peer-focus:left-0 
                peer-focus:-translate-y-6 peer-focus:scale-100
              peer-focus:text-white
            `}
          >
            Confirmar e-mail
          </label>
        </div>
        <div className="relative z-0">
          <input
            type="password"
            className={`
                peer mb-2 block w-full appearance-none border-0 
                border-b-2 border-white bg-transparent px-0 
                py-2.5 text-sm text-white 
              focus:border-white focus:outline-none focus:ring-0
              `}
            placeholder=" "
            {...register('password')}
          />
          {errors.password && (
            <span className="text-sm text-red-500">
              {errors.password.message}
            </span>
          )}
          <label
            htmlFor="password"
            className={`
                align-center absolute top-2 -z-10 flex origin-[0]
                -translate-y-6 scale-75 transform gap-2 text-lg text-white 
                duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100
                peer-focus:left-0 
                peer-focus:-translate-y-6 peer-focus:scale-100
                peer-focus:text-white
              `}
          >
            Senha
          </label>
        </div>
        <div className="relative z-0">
          <input
            type="password"
            className={`
                peer mb-2 block w-full appearance-none border-0 
                border-b-2 border-white bg-transparent px-0 
                py-2.5 text-sm text-white 
              focus:border-white focus:outline-none focus:ring-0
              `}
            placeholder=" "
            {...register('confirmPassword')}
          />
          {errors.confirmPassword && (
            <span className="text-sm text-red-500">
              {errors.confirmPassword.message}
            </span>
          )}
          <label
            htmlFor="confirm_password"
            className={`
                align-center absolute top-2 -z-10 flex origin-[0]
                -translate-y-6 scale-75 transform gap-2 text-lg text-white 
                duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100
                peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-100
              peer-focus:text-white
              `}
          >
            Repetir Senha
          </label>
        </div>
        <ClickHere message="Já tem cadastro?" href="/signin" />
        <button
          type="submit"
          className="mt-4 rounded-xl bg-dark-blue px-32 py-5 uppercase opacity-80 hover:opacity-100"
        >
          Cadastrar
        </button>
      </form>
    </div>
  )
}
