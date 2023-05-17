import { FieldCpf } from "@/components/fieldCpf";
import Link from "next/link";
import { IconePass, IconeUser } from "../../../../public/icons";

export default function SignIn() {
  return (
    <>
      <div className="flex flex-col mr-64 w-96">
        <FieldCpf />
        <div className="relative z-0 mb-6">
          <input
            type="password"
            id="pass"
            className={`
              block py-2.5 px-0 w-full text-sm text-white 
              bg-transparent border-0 border-b-2 border-white 
              appearance-none focus:outline-none focus:ring-0 
              focus:border-white peer
            `}
            placeholder=" "
          />
          <label
            htmlFor="pass"
            className={`
              flex gap-2 align-center absolute text-lg text-white
              duration-300 transform -translate-y-6 scale-75 top-2 -z-10 
              origin-[0] peer-focus:left-0 peer-focus:text-white
              peer-placeholder-shown:scale-100 
              peer-placeholder-shown:translate-y-0 peer-focus:scale-100
              peer-focus:-translate-y-6
            `}
          >
            {IconePass} E-mail
          </label>
        </div>
        <div className="flex gap-2 mb-6">
          <p>Não é cadastrado?</p>
          <Link href="/" className="text-click-here">
            Clique Aqui
          </Link>
        </div>
        <div className="text-click-here font-karla font-bold mb-16">
          <p className="underline">Esqueceu sua senha?</p>
        </div>
        <button className="px-40 py-6 bg-button-sign rounded-xl">ENTRAR</button>
      </div>
      <div></div>
    </>
  );
}
