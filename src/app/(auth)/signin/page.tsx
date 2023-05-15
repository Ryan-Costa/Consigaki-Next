import Link from "next/link";

export default function SignIn() {
  return (
    <>
      <div className="flex flex-col mr-64 w-96">
        <div className="relative z-0 mb-20">
          <input
            type="text"
            id="cpf"
            className={`block py-2.5 px-0 w-full text-sm text-white 
            bg-transparent border-0 border-b-2 border-white 
            appearance-none focus:outline-none focus:ring-0 
            focus:border-white peer`}
            placeholder=" "
          />
          <label
            htmlFor="cpf"
            className={`absolute text-lg text-white
            duration-300 transform -translate-y-6 scale-75 top-3 -z-10 
            origin-[0] peer-focus:left-0 peer-focus:text-white
              peer-placeholder-shown:scale-100 
              peer-placeholder-shown:translate-y-0 peer-focus:scale-100
              peer-focus:-translate-y-6`}
          >
            CPF
          </label>
        </div>
        <div className="relative z-0 mb-6">
          <input
            type="text"
            id="mail"
            className={`block py-2.5 px-0 w-full text-sm text-white 
              bg-transparent border-0 border-b-2 border-white 
              appearance-none focus:outline-none focus:ring-0 
              focus:border-white peer`}
            placeholder=" "
          />
          <label
            htmlFor="mail"
            className={`absolute text-lg text-white
            duration-300 transform -translate-y-6 scale-75 top-3 -z-10 
            origin-[0] peer-focus:left-0 peer-focus:text-white
            peer-placeholder-shown:scale-100 
            peer-placeholder-shown:translate-y-0 peer-focus:scale-100
            peer-focus:-translate-y-6`}
          >
            E-mail
          </label>
        </div>
        <div className="flex gap-2 mb-6">
          <p>Não é cadastrado?</p>
          <Link href="/" className="text-click-here">
            Clique Aqui
          </Link>
        </div>
        <div className="text-click-here font-karla font-bold mb-16">
          <p>Esqueci a senha</p>
        </div>
        <button className="px-40 py-6 bg-button-sign rounded-xl">Entrar</button>
      </div>
      <div></div>
    </>
  );
}
