// import React from 'react'
// import { IconUpload } from '../../public/icons'

// import Link from 'next/link'
// import resume from '../../public/images/Cadeado.png'

// const inter = Inter({
//   subsets: ['latin'],
//   weight: ['400', '700'],
// })

// interface DocumentDownloadProps {
//   // documentUri: string
//   // key: number
// }

// const DocumentDownload = () => {
//   const documentURL =
//     'https://consigaki.s3.sa-east-1.amazonaws.com/loans_62_dc90411f-0d68-457c-b15c-1ea05ce58c5a_photo.jpg'
//   // const [selectedImage, setSelectedImage] = useState<File | null>(null)
//   // const [previewImage, setPreviewImage] = useState<string | null>(null)

//   // const handleFormSubmit = (event: React.FormEvent) => {}

//   return (
//     <>
//       <div>
//         <div className="mb-5 flex h-[138px] w-[150px] border-spacing-1 items-center justify-center border border-gray-200 object-cover"></div>
// <div className="flex h-8 w-150 cursor-pointer items-center rounded bg-bs-teal-2">
//   <div className="border-r p-2">{IconUpload}</div>
//   <label
//     htmlFor="file-upload"
//     className={`${inter.className} cursor-pointer px-8 py-2 text-xs text-white`}
//   >
//     DOWNLOAD
//   </label>
//   <Link href={resume} download={documentURL} />
// </div>
//       </div>
//     </>
//   )
// }

// export default DocumentDownload
import Image from 'next/image'
import React, { useState, useEffect } from 'react'
import { IconUpload } from '../../public/icons'
import { Inter } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '700'],
})
interface DocumentDownloadProps {
  fileUrl: string
}

const DocumentDownload = ({ fileUrl }: DocumentDownloadProps) => {
  const [previewUrl, setPreviewUrl] = useState(fileUrl)

  useEffect(() => {
    setPreviewUrl(fileUrl)
  }, [fileUrl])

  return (
    <div>
      <div className="mb-5 flex h-[258px] max-h-[258px] w-[150px] max-w-[150px] border-spacing-1 items-center justify-center border border-gray-200 object-contain">
        <Image
          src={previewUrl}
          width={158}
          height={258}
          alt="Preview"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="flex h-8 w-150 cursor-pointer items-center rounded bg-bs-teal-2">
        <a href={fileUrl} className="flex items-center" download>
          <div className="border-r p-2">{IconUpload}</div>
          <label
            htmlFor="file-upload"
            className={`${inter.className} cursor-pointer px-8 py-2 text-xs text-white`}
          >
            DOWNLOAD
          </label>
        </a>
      </div>
    </div>
  )
}

export default DocumentDownload
