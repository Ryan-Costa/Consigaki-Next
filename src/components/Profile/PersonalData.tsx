'use client'

import { ButtonSave } from '../Common/ButtonSave'
import { Roboto } from 'next/font/google'
import { IProfileID, PostAvatar } from '@/interfaces/Profile'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { TelMask } from '../Mask/TelMask'
import { CpfMask } from '../Mask/CpfMask'
import { toUpperCase } from '@/functions/toUpperCase'
import ImageUploadProductAgreement from '../UI/ImageUploadProductAgreement'
import { useTransition } from 'react'
import { patchRevalidateItems } from '@/functions/patchRevalidateItems'
import { toast } from 'react-toastify'

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700'],
})

const schemaProfileForm = z.object({
  avatar: z
    .instanceof(FileList)
    .transform((list) => (list.length > 0 ? list.item(0) : null)),
})

type ProfileFormProps = z.infer<typeof schemaProfileForm>

export default function PersonalData({ data }: { data: IProfileID }) {
  const [, startTransition] = useTransition()
  const profile = data.data

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<ProfileFormProps>({
    resolver: zodResolver(schemaProfileForm),
  })

  const handleFormSubmit = (dataForm: ProfileFormProps) => {
    const { avatar } = dataForm
    const formData = new FormData()
    formData.append('docs', avatar as File)

    startTransition(() =>
      patchRevalidateItems<PostAvatar>('/users/create-avatar', formData)
        .then((response) => {
          toast.success(response.message)
        })
        .catch((error) => {
          toast.error(error.message)
        }),
    )
  }

  return (
    <>
      <form onSubmit={handleSubmit(handleFormSubmit)}>
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
              value={toUpperCase(profile.name)}
              disabled
              readOnly
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
              value={CpfMask(profile.cpf)}
              disabled
              readOnly
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
              value={TelMask(profile.phoneNumber)}
              disabled
              readOnly
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
              value={profile.email}
              disabled
              readOnly
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
              value={new Date(profile.createdAt).toLocaleDateString()}
              disabled
              readOnly
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
              value={new Date(profile.updatedAt).toLocaleDateString()}
              disabled
              readOnly
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

        <ImageUploadProductAgreement
          name="avatar"
          register={register}
          imageUrl={profile.avatar}
        />
        {errors.avatar && (
          <span className="text-md font-bold tracking-wide text-red-600">
            {errors.avatar.message}
          </span>
        )}
        <ButtonSave />
      </form>
    </>
  )
}
