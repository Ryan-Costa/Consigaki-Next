export default function SignUp() {
  return (
    <div className="flex flex-col mr-64 w-96 gap-4">
      <div className="relative z-0">
        <input
          required
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
      <div className="relative z-0">
        <input
          required
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
      <div className="relative z-0">
        <input
          required
          type="text"
          id="confirm_mail"
          className={`block py-2.5 px-0 w-full text-sm text-white 
            bg-transparent border-0 border-b-2 border-white 
            appearance-none focus:outline-none focus:ring-0 
            focus:border-white peer`}
          placeholder=" "
        />
        <label
          htmlFor="confirm_mail"
          className={`absolute text-lg text-white
            duration-300 transform -translate-y-6 scale-75 top-3 -z-10 
            origin-[0] peer-focus:left-0 peer-focus:text-white
            peer-placeholder-shown:scale-100 
            peer-placeholder-shown:translate-y-0 peer-focus:scale-100
            peer-focus:-translate-y-6`}
        >
          Confirmar E-mail
        </label>
      </div>
      <div className="relative z-0">
        <input
          required
          type="password"
          id="password"
          className={`block py-2.5 px-0 w-full text-sm text-white 
            bg-transparent border-0 border-b-2 border-white 
            appearance-none focus:outline-none focus:ring-0 
            focus:border-white peer`}
          placeholder=" "
        />
        <label
          htmlFor="password"
          className={`absolute text-lg text-white
            duration-300 transform -translate-y-6 scale-75 top-3 -z-10 
            origin-[0] peer-focus:left-0 peer-focus:text-white
            peer-placeholder-shown:scale-100 
            peer-placeholder-shown:translate-y-0 peer-focus:scale-100
            peer-focus:-translate-y-6`}
        >
          Senha
        </label>
      </div>
      <div className="relative z-0">
        <input
          required
          type="password"
          id="confirm_password"
          className={`block py-2.5 px-0 w-full text-sm text-white 
            bg-transparent border-0 border-b-2 border-white 
            appearance-none focus:outline-none focus:ring-0 
            focus:border-white peer`}
          placeholder=" "
        />
        <label
          htmlFor="confirm_password"
          className={`absolute text-lg text-white
            duration-300 transform -translate-y-6 scale-75 top-3 -z-10 
            origin-[0] peer-focus:left-0 peer-focus:text-white
            peer-placeholder-shown:scale-100 
            peer-placeholder-shown:translate-y-0 peer-focus:scale-100
            peer-focus:-translate-y-6`}
        >
          Repetir Senha
        </label>
      </div>
    </div>
  );
}
