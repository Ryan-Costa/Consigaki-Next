'use client'

import { ButtonSave } from '@/components/common/ButtonSave'
import ImageUpload from '@/components/ImageUpload'
import { Inter, Roboto } from 'next/font/google'

import { useRouter } from 'next/navigation'
import { IconArrowBack, IconInsumo } from '../../../../public/icons'
const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '700'],
})

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700'],
})

export default function Profile() {
  const router = useRouter()

  const handleSave = () => {
    router.push('/dashboard')
  }

  const handleGoBack = () => {
    router.back()
  }
  return (
    <>
      <div
        className={`${inter.className} h-full w-full rounded-md bg-white px-6 py-14`}
      >
        <button className="" onClick={handleGoBack}>
          {IconArrowBack}
        </button>
        <div className="mt-8 flex items-center gap-2">
          <h1 className="text-lg font-bold">Informações do seu Perfil</h1>
          {IconInsumo}
        </div>
        <p
          className={`${roboto.className} text-base tracking-tight text-text-regular`}
        >
          Prencha todos os campos
        </p>
        <div className="mb-6 mt-6 flex gap-6">
          <div className="flex w-full flex-col gap-2">
            <label htmlFor="" className="font-semibold">
              Nome completo
            </label>
            <input
              name="nomeCompleto"
              type="text"
              placeholder="David Bessa Pontes"
              className="w-full rounded-lg border border-gray-400 px-6 py-2 outline-none"
              // value={setSavedItem.cadastro}
              // onChange={handleInputChange}
            />
          </div>
          <div className="flex w-full flex-col gap-2">
            <label htmlFor="" className="font-semibold">
              CNPJ
            </label>
            <input
              name="cnpj"
              type="text"
              placeholder="00.000/0000-00"
              className="w-full rounded-lg border border-gray-400 px-6 py-2 outline-none"
            />
          </div>
          <div className="flex w-full flex-col gap-2">
            <label htmlFor="" className="font-semibold">
              Telfone
            </label>
            <input
              name="telefone"
              type="text"
              placeholder="(00) 0 0000-0000"
              className="w-full rounded-lg border border-gray-400 px-6 py-2 outline-none"
            />
          </div>
        </div>
        <div className="mb-6 mt-6 flex gap-6">
          <div className="flex w-full flex-col gap-2">
            <label htmlFor="" className="font-semibold">
              E-mail
            </label>
            <input
              name="email"
              type="text"
              placeholder="OrpelNet@gmail.com"
              className="w-full rounded-lg border border-gray-400 px-6 py-2 outline-none"
              // value={setSavedItem.cadastro}
              // onChange={handleInputChange}
            />
          </div>
          <div className="flex w-full flex-col gap-2">
            <label htmlFor="" className="font-semibold">
              Cadastro
            </label>
            <input
              name="cadastro"
              type="text"
              placeholder="---- ---- --- ---"
              className="w-full rounded-lg border border-gray-400 px-6 py-2 outline-none"
            />
          </div>
          <div className="flex w-full flex-col gap-2">
            <label htmlFor="" className="font-semibold">
              Gênero
            </label>
            <input
              name="genero"
              type="text"
              placeholder="---- ---- --- ---"
              className="w-full rounded-lg border border-gray-400 px-6 py-2 outline-none"
            />
          </div>
        </div>
        <div className="mt-5 flex items-center gap-2">
          <span>
            <p
              className={`${roboto.className} whitespace-nowrap text-2xl font-bold`}
            >
              Insira sua foto
            </p>
          </span>
          <div className="h-[1px] w-full bg-line-gray" />
        </div>
        <p className="text-base">Imagens menos que 16MB</p>
        <ImageUpload type="profile" />
        <ButtonSave handleSave={handleSave} />
      </div>
    </>
  )
}
