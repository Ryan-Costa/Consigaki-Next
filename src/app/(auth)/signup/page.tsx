"use client";

import { useForm } from "react-hook-form";
import { useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const cpfRegex = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
const createUserFormSchema = z.object({
  cpf: z
    .string()
    .nonempty("O CPF é obrigatório")
    .regex(cpfRegex, "CPF inválido"),
  email: z
    .string()
    .nonempty("O e-mail é obrigatório")
    .email("Formato de e-mail inválido")
    .toLowerCase()
    .refine((email) => {
      return email.endsWith("@consigaki.com");
    }, "O e-mail precisa ser do Banco Pan"),
  confirmEmail: z
    .string()
    .nonempty("A confirmação de e-mail é obrigatória")
    .toLowerCase(),
  password: z.string().min(6, "A senha precisa de no mínimo 6 caracteres"),
  confirmPassword: z
    .string()
    .min(6, "A senha precisa de no mínimo 6 caracteres"),
});

type CreateUserFormData = z.infer<typeof createUserFormSchema>;

export default function SignUp() {
  const [output, setOutput] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateUserFormData>({
    resolver: zodResolver(createUserFormSchema),
  });

  function createUser(data: any) {
    setOutput(JSON.stringify(data, null, 2));
  }

  return (
    <div className="mr-64 flex w-492 flex-col gap-6">
      <form
        onSubmit={handleSubmit(createUser)}
        className="flex w-full flex-col"
      >
        <div className="relative z-0 mb-9">
          <input
            type="text"
            maxLength={14}
            className={`
                peer mb-2 block w-full appearance-none border-0 
                border-b-2 border-white bg-transparent px-0 
                py-2.5 text-sm text-white 
              focus:border-white focus:outline-none focus:ring-0
            `}
            placeholder=" "
            {...register("cpf")}
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
        <div className="relative z-0 mb-9">
          <input
            type="text"
            className={`
                peer mb-2 block w-full appearance-none border-0 
                border-b-2 border-white bg-transparent px-0 
                py-2.5 text-sm text-white 
              focus:border-white focus:outline-none focus:ring-0
            `}
            placeholder=" "
            {...register("email")}
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
        <div className="relative z-0 mb-9">
          <input
            type="text"
            className={`
                peer mb-2 block w-full appearance-none border-0 
                border-b-2 border-white bg-transparent px-0 
                py-2.5 text-sm text-white 
              focus:border-white focus:outline-none focus:ring-0
            `}
            placeholder=" "
            {...register("confirmEmail")}
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
        <div className="relative z-0 mb-9">
          <input
            type="password"
            className={`
                peer mb-2 block w-full appearance-none border-0 
                border-b-2 border-white bg-transparent px-0 
                py-2.5 text-sm text-white 
              focus:border-white focus:outline-none focus:ring-0
              `}
            placeholder=" "
            {...register("password")}
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
            {...register("confirmPassword")}
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
          className="mb-32 mt-32 rounded-xl bg-dark-blue px-32 py-5 uppercase opacity-80 hover:opacity-100"
        >
          Cadastrar
        </button>
      </form>
      <pre>{output}</pre>
    </div>
  );
}
