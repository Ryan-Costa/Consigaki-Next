'use client'

import { useForm } from 'react-hook-form'
import { useContext, useState } from 'react'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { CpfMask } from '@/components/Common/CpfMask'
import { AuthContext } from '@/contexts/AuthContext'

const createUserFormSchema = z
  .object({
    name: z
      .string()
      .nonempty('O Nome é obrigatório')
      .min(3, 'O Nome é inválido'),
    cpf: z.string().nonempty('O CPF é obrigatório').min(14, 'O CPF é inválido'),
    email: z
      .string()
      .nonempty('O e-mail é obrigatório')
      .email('Formato de e-mail inválido')
      .toLowerCase()
      .refine((email) => {
        return email.endsWith('@consigaki.com')
      }, 'O e-mail precisa terminar com @consigaki.com'),
    confirmEmail: z
      .string()
      .nonempty('A confirmação de e-mail é obrigatória')
      .toLowerCase(),
    password: z.string().min(6, 'A senha precisa de no mínimo 6 caracteres'),
    confirmPassword: z
      .string()
      .min(6, 'A senha precisa de no mínimo 6 caracteres'),
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
  const [cpfMask, setCpfMask] = useState()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateUserFormData>({
    resolver: zodResolver(createUserFormSchema),
  })

  const newUnmaskedCpfData = (data: any) => {
    const removedCpfMask = data.cpf.replace(/\D/g, '')
    const newData = {
      cpf: removedCpfMask,
      email: data.email,
      password: data.password,
    }

    return newData
  }

  const handleSignUp = (data: any) => {
    const newData = newUnmaskedCpfData(data)
    signUp(newData)
    console.log(newData)
  }

  const handleChange = (e: any) => {
    setCpfMask(CpfMask(e.target.value))
    console.log(cpfMask)
  }

  return (
    <div className="mr-64 flex w-492 flex-col">
      <form
        onSubmit={handleSubmit(handleSignUp)}
        className="flex w-full flex-col gap-5"
      >
        <div className="relative z-0">
          <input
            {...register('name')}
            type="text"
            maxLength={14}
            className={`
                peer mb-2 block w-full appearance-none border-0 
                border-b-2 border-white bg-transparent px-0 
                py-2.5 text-sm text-white 
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
            type="text"
            className={`
                peer mb-2 block w-full appearance-none border-0 
                border-b-2 border-white bg-transparent px-0 
                py-2.5 text-sm text-white 
              focus:border-white focus:outline-none focus:ring-0
            `}
            placeholder=" "
            {...register('email')}
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
        <button
          type="submit"
          className="mt-10 rounded-xl bg-dark-blue px-32 py-5 uppercase opacity-80 hover:opacity-100"
        >
          Cadastrar
        </button>
      </form>
    </div>
  )
}
