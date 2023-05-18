"use client";

import { FieldCpf } from "@/components/fieldCpf";
import Link from "next/link";
import { IconePass, IconeUser } from "../../../../public/icons";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

export const metadata = {
  title: "Login",
};

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
      return email.endsWith("@bancopan.com");
    }, "O e-mail precisa ser do Banco Pan"),
  password: z.string().min(6, "A senha precisa de no mínimo 6 caracteres"),
});

type CreateUserFormData = z.infer<typeof createUserFormSchema>;

export default function SignIn() {
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
    <>
      <div className="mr-64 flex w-492 flex-col gap-6">
        <form
          onSubmit={handleSubmit(createUser)}
          className="flex w-full flex-col"
        >
          <div className="relative z-0 mb-28 flex flex-col gap-1">
            <input
              type="text"
              maxLength={14}
              className={`
                peer block w-full appearance-none border-0 border-b-2 
                border-white bg-transparent px-0 py-2.5 
                text-sm text-white focus:border-white 
                focus:outline-none focus:ring-0
              `}
              placeholder=" "
              {...register("cpf")}
            />
            {errors.cpf && (
              <span className="text-sm text-red-500">{errors.cpf.message}</span>
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
              {IconeUser} CPF
            </label>
          </div>

          <div className="relative z-0 mb-8 flex flex-col gap-1">
            <input
              type="password"
              className={`
              peer block w-full appearance-none border-0 border-b-2 
              border-white bg-transparent px-0 py-2.5 
              text-sm text-white focus:border-white 
              focus:outline-none focus:ring-0
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

          <div className="mb-6 flex gap-2">
            <p>Não é cadastrado?</p>
            <Link href="/cadastro" className="text-click-here">
              Clique Aqui
            </Link>
          </div>
          <div className="mb-20">
            <Link
              href="/esqueci_a_senha"
              className="font-karla font-bold text-click-here underline"
            >
              Esqueceu sua senha?
            </Link>
          </div>

          <button
            type="submit"
            className="button-sign flex justify-center rounded-xl bg-button-sign px-40 py-5 opacity-80"
          >
            Entrar
          </button>
        </form>
        <pre>{output}</pre>
      </div>
    </>
  );
}
