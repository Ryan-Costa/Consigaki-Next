import { Roboto } from 'next/font/google'
// import DocumentDownload from '../DocumentDownload'

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700'],
})
export default function LoansDocuments() {
  return (
    <>
      <div className="mt-5 flex items-center gap-2">
        <p className="text-base font-bold">Documentos</p>
        <div className="h-[1px] w-full bg-line-gray" />
      </div>
      <div className="mt-5 flex items-center gap-2">
        <h1
          className={`${roboto.className} whitespace-nowrap text-2xl font-bold`}
        >
          Fotos dos documentos
        </h1>
        <div className="h-[1px] w-full bg-line-gray" />
      </div>
      <p className="text-base">Imagens menos que 16MB</p>
      <div className="mt-5 flex gap-8">
        {/* <DocumentDownload />
        <DocumentDownload />
        <DocumentDownload />
        <DocumentDownload /> */}
      </div>
    </>
  )
}
