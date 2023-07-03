import { IconPartners } from '../../../public/icons'
import { Inter } from 'next/font/google'
import NewProviderForm from './NewProviderForm'
import ButtonGoBack from '../Common/ButtonBack'
const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '700'],
})

export default function AddProvider() {
  return (
    <div>
      <ButtonGoBack />

      <div className="mt-12 flex gap-2">
        <h1 className="text-2xl font-bold">Adicionar Consignatária</h1>
        {IconPartners}
      </div>
      <p
        className={`${inter.className} text-base tracking-tight text-text-regular`}
      >
        Prencha todos os campos
      </p>
      <NewProviderForm />
    </div>
  )
}
