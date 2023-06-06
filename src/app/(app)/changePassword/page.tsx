"use client";

import ButtonSave from "@/components/common/ButtonSave";
import ImageUpload from "@/components/ImageUpload";
import { Inter } from "@next/font/google";
import { Roboto } from "@next/font/google";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { IconArrowBack, IconInsumo } from "../../../../public/icons";
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function ChangePassword() {
  const router = useRouter();

  const handleSave = () => {
    router.push("/dashboard");
  };

  const handleGoBack = () => {
    router.back();
  };
  return (
    <>
      <div
        className={`${inter.className} h-full w-full rounded-md bg-white px-6 py-14`}
      >
        <button className="" onClick={handleGoBack}>
          {IconArrowBack}
        </button>
        <div className="mt-8 flex items-center gap-2">
          <h1 className="text-lg font-bold">Mudar ou redefinir sua senha</h1>
          {IconInsumo}
        </div>
        <p
          className={`${roboto.className} text-base tracking-tight text-text-regular`}
        >
          Prencha todos os campos
        </p>
        <div className="mb-6 mt-6 flex gap-6">
          <div className="flex w-1/3 flex-col gap-2">
            <label htmlFor="" className="font-semibold">
              Digite sua senha atual
            </label>
            <input
              name="nomeCompleto"
              type="password"
              placeholder="******************"
              className="w-full rounded-lg border border-gray-400 px-6 py-2 outline-none"
            />
            <p
              className={`${roboto.className} text-base tracking-tight text-text-regular`}
            >
              Caso tenha esquecido sua senha{" "}
              <Link href="/forgotpassword" className="text-blue-600">
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
          <div className="flex w-1/3 flex-col gap-2">
            <label htmlFor="" className="font-semibold">
              Nova senha
            </label>
            <input
              name="email"
              type="password"
              placeholder="******************"
              className="w-full rounded-lg border border-gray-400 px-6 py-2 outline-none"
              // value={setSavedItem.cadastro}
              // onChange={handleInputChange}
            />
          </div>
          <div className="flex w-1/3 flex-col gap-2">
            <label htmlFor="" className="font-semibold">
              Repita sua senha
            </label>
            <input
              name="cadastro"
              type="password"
              placeholder="******************"
              className="w-full rounded-lg border border-gray-400 px-6 py-2 outline-none"
            />
          </div>
        </div>

        <ButtonSave handleSave={handleSave} />
      </div>
    </>
  );
}
