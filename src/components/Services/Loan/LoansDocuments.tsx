import DocumentDownload from '@/components/DocumentDownload'
import { ILoans, ILoansDocuments } from '@/interfaces/Loan'
import { Roboto } from 'next/font/google'

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700'],
})

interface LoansDocumentsProps {
  loans: ILoans
}

export default function LoansDocuments({ loans }: LoansDocumentsProps) {
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
      <div className="scroll-container-docs mt-5 flex h-[330px] gap-8 overflow-auto">
        {loans.loansDocuments.map((doc: ILoansDocuments) => (
          <>
            <DocumentDownload fileUrl={doc.uri} key={doc.id} />
            <DocumentDownload fileUrl={doc.uri} key={doc.id} />
            <DocumentDownload fileUrl={doc.uri} key={doc.id} />
          </>
        ))}
      </div>
    </>
  )
}
