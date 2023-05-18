"use client";
import Link from "next/link";
import { IconePass, IconeUser } from "../../../public/icons";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
// import { useRouter } from "next/router";

const createUserFormSchema = z.object({
  password: z.string().min(6, "A senha precisa de no mínimo 6 caracteres"),
  confirmPassword: z
    .string()
    .min(6, "A senha precisa de no mínimo 6 caracteres"),
});

type CreateUserFormData = z.infer<typeof createUserFormSchema>;

export default function NewPassword() {
  const [output, setOutput] = useState("");

  // const router = useRouter();

  // const handleClick = () => {
  //   router.push("/nova_senha");
  // };

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
      <div className="flex h-screen w-full font-bold">
        <div className="w-7/12 py-60 pl-64 pr-40">
          <div className="w-full">
            <h1 className="text-2xl font-bold uppercase tracking-tight text-white">
              Recuperação de senha
            </h1>
            <p className="mt-6 text-base font-normal text-white">
              Preencha corretamente
            </p>

            <form onSubmit={handleSubmit(createUser)}>
              <div className="relative z-0 mb-5 mt-28 flex w-96 flex-col gap-1">
                <input
                  type="text"
                  maxLength={11}
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
              <div className="relative z-0 mb-5 mt-28 flex w-96 flex-col gap-1">
                <input
                  type="text"
                  maxLength={11}
                  className={`
                peer block w-full appearance-none border-0 border-b-2 
                border-white bg-transparent px-0 py-2.5 
                text-sm text-white focus:border-white 
                focus:outline-none focus:ring-0
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
                  {IconePass} Repita sua senha
                </label>
              </div>

              <button
                type="submit"
                // onClick={handleClick}
                className="mt-24 rounded-xl bg-button-sign px-36 py-6 uppercase tracking-wide text-white opacity-80"
              >
                Continuar
              </button>
            </form>
            <pre className="text-white">{output}</pre>
          </div>
        </div>
        <div className="z-1 relative flex h-full w-5/12 items-center justify-center bg-white">
          <Image
            src="/images/nova_senha.png"
            width={500}
            height={500}
            alt="logo image"
          ></Image>
          <Image
            src="/images/bg-img-senha.png"
            className="absolute right-96 top-0"
            width={378}
            height={367}
            alt="logo image"
          ></Image>
          <Image
            src="/images/bg-img-senha-2.png"
            className="absolute bottom-0 right-0"
            width={378}
            height={367}
            alt="logo image"
          ></Image>
        </div>
      </div>
    </>
  );
}
