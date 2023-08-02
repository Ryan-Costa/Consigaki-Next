import React, { useState, useTransition } from 'react'
import { IconUpload } from '../../public/icons'
import { Inter } from 'next/font/google'
import Image from 'next/image'
import { IAvatar } from '@/interfaces/IProps'
import { patchRevalidateItems } from '@/functions/patchRevalidateItems'
import { toast } from 'react-toastify'

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '700'],
})

type ImageUploadProps = {
  type: 'modal' | 'profile'
  avatarUrl?: string
}

const ImageUpload: React.FC<ImageUploadProps> = ({ type, avatarUrl }) => {
  const [, startTransition] = useTransition()
  const [selectedImage, setSelectedImage] = useState<File | null>(null)
  const [previewImage, setPreviewImage] = useState<string | null>(null)

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] || null
    setSelectedImage(file)

    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setPreviewImage(reader.result as string)
      }
      reader.readAsDataURL(file)
    } else {
      setPreviewImage(null)
    }
  }

  const handleFormSubmit = (event: React.FormEvent) => {
    event.preventDefault()

    if (selectedImage) {
      const formData = new FormData()
      formData.append('image', selectedImage)

      const urlAvatar = '/users/create-avatar'

      startTransition(() =>
        patchRevalidateItems<IAvatar>(urlAvatar, formData).then((response) => {
          console.log(response)
          if (response) {
            if (Object.values(response).length === 3) {
              toast.success(response.message)
            } else {
              console.log(response)
              toast.error(response.message)
            }
          }
        }),
      )
    }
  }

  return (
    <form onSubmit={handleFormSubmit}>
      <div
        className={`mb-5 mt-4 flex h-[138px] w-[150px] items-center justify-center border `}
      >
        {previewImage ? (
          <Image
            src={previewImage}
            alt="Preview"
            width={150}
            height={138}
            className="object-cover"
            style={{ maxWidth: '100%', maxHeight: '100%' }}
          />
        ) : type === 'modal' ? (
          <Image
            src="/images/bg-download-image.png"
            alt="bg-image-upload"
            width={150}
            height={128}
            className="object-cover"
            style={{ maxWidth: '100%', maxHeight: '100%' }}
          />
        ) : type === 'profile' ? (
          <Image
            src={avatarUrl || '/images/bg-download-image.png'}
            alt="bg-image-upload"
            width={150}
            height={138}
            className="object-cover"
            style={{ maxWidth: '100%', maxHeight: '100%' }}
          />
        ) : null}
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
          id="file-upload"
          type="file"
          onChange={handleImageChange}
          className="absolute opacity-0"
        />
      </div>
    </form>
  )
}

export default ImageUpload
