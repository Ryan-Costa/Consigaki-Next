export default function comp() {
  return (
    <div>
      <div className="mr-64 flex w-96 flex-col">
        <FieldCpf />
        <div className="relative z-0 mb-6">
          <input
            type="password"
            id="pass"
            className={`
              peer block w-full appearance-none border-0 border-b-2 
              border-white bg-transparent px-0 py-2.5 
              text-sm text-white focus:border-white 
              focus:outline-none focus:ring-0
            `}
            placeholder=" "
          />
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
            {IconePass} E-mail
          </label>
        </div>
        <div className="mb-6 flex gap-2">
          <p>Não é cadastrado?</p>
          <Link href="/signup" className="text-click-here">
            Clique Aqui
          </Link>
        </div>
        <div className="mb-16 font-karla font-bold text-click-here">
          <p className="underline">Esqueceu sua senha?</p>
        </div>
        <button className="rounded-xl bg-button-sign px-40 py-6">ENTRAR</button>
      </div>
      <div></div>
    </div>

    // name: z
    // .string()
    // .nonempty("O nome é obrigatório")
    // .transform((name) => {
    //   return name
    //     .trim()
    //     .split(" ")
    //     .map((word) => {
    //       return word[0].toLocaleUpperCase().concat(word.substring(1));
    //     })
    //     .join(" ");
    // }),
  );
}
