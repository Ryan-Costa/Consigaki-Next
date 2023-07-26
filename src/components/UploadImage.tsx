import Image from 'next/image'
import React, { useState } from 'react'
import { IconUpload } from '../../public/icons'
import { Inter } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '700'],
})

interface ImageUploadProps {
  avatar?: string
  onImageUpload: (formData: FormData) => void
}

export default function UploadImage({
  onImageUpload,
  avatar,
}: ImageUploadProps) {
  const [image, setImage] = useState(null)
  const [showPreview, setShowPreview] = useState(false)

  const handleImageChange = (event: any) => {
    const selectedImage = event.target.files[0]
    setImage(selectedImage)
    setShowPreview(true)
  }

  const handleSubmit = (event: any) => {
    event.preventDefault()

    if (image) {
      const formData = new FormData()
      formData.append('image', image)

      onImageUpload(formData)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-5 mt-5 ">
        {showPreview && image ? (
          <Image
            className="object-scale-down"
            src={URL.createObjectURL(image)}
            alt="Preview"
            width={150}
            height={150}
            style={{ width: '150px', height: '150px' }}
          />
        ) : (
          <Image
            className="object-scale-down"
            src={avatar || '/images/bg-upload-image.png'}
            alt="Placeholder"
            width={150}
            height={150}
            style={{ width: '150px', height: '150px' }}
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
          id="file-upload"
          type="file"
          onChange={handleImageChange}
          className="absolute opacity-0"
        />
      </div>
    </form>
  )
}
