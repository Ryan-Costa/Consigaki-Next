import React, { ChangeEvent, useState } from 'react'
import { IconUpload } from '../../../public/icons'
import { UseFormRegister } from 'react-hook-form'
import { Inter } from 'next/font/google'
import Image from 'next/image'

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '700'],
})

// PARA OBTER A URL COMO CALL BACK, DESCOMENTE AS LINAHS [13, 21 e 34]

interface ImageUploadProps {
  // onImageChange: (url: string) => void
  name: string
  register?: UseFormRegister<any>
}

const ImageUploadProductAgreement: React.FC<ImageUploadProps> = ({
  // onImageChange,
  name,
  register,
}) => {
  const [previewUrl, setPreviewUrl] = useState<string | null>(null)

  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    const reader = new FileReader()

    reader.onload = () => {
      const url = reader.result as string
      setPreviewUrl(url)
      // onImageChange(url)
    }

    if (file) {
      reader.readAsDataURL(file)
    }
  }

  return (
    <div>
      <div
        className={`mb-5 mt-4 flex h-[138px] w-[150px] items-center justify-center border`}
      >
        {previewUrl ? (
          <Image src={previewUrl} alt="Preview" width={150} height={138} />
        ) : (
          <Image
            src="/images/image-preview.png"
            alt="Preview"
            width={150}
            height={138}
            className="object-cover"
          />
        )}
      </div>
      <div className="flex h-8 w-150 cursor-pointer items-center rounded bg-bs-teal-2">
        <div className="border-r p-2">{IconUpload}</div>
        <label
          htmlFor="file-upload"
          className={`${inter.className} cursor-pointer px-8 py-2 text-xs text-white`}
        >
          UPLOAD
        </label>
        <input
          {...(register && register(name))}
          name={name}
          id="file-upload"
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="absolute opacity-0"
        />
      </div>
    </div>
  )
}

export default ImageUploadProductAgreement
