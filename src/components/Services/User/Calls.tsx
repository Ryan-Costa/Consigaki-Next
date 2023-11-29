'use client'

import TextareaWithCounter from '@/components/UI/TextareaWithCounter'
import { ButtonAdd } from '@/components/common/ButtonAdd'
import { postRevalidateItems } from '@/functions/postRevalidateItems'
import { toUpperCase } from '@/functions/toUpperCase'
import { PostUserCall, UserCall } from '@/interfaces/UserCalls'
import api from '@/services/server/api'
import { zodResolver } from '@hookform/resolvers/zod'
import { useState, useTransition } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import useSWR, { mutate } from 'swr'
import { z } from 'zod'
import { IconArrowDownBlack } from '../../../../public/icons'

const schemaCallsForm = z.object({
  call: z.string(),
})

type CallsFormProps = z.infer<typeof schemaCallsForm>

interface CallUserProps {
  userId: string
}

export default function Calls({ userId }: CallUserProps) {
  const [expandedCallId, setExpandedCallId] = useState(null)
  const [valueTextarea, setValueTextarea] = useState('')
  const [isOpen, setIsOpen] = useState(false)
  const { handleSubmit, register } = useForm<CallsFormProps>({
    resolver: zodResolver(schemaCallsForm),
    defaultValues: {
      call: '',
    },
  })

  const toggleExpand = (callId: any) => {
    if (expandedCallId === callId) {
      setExpandedCallId(null)
      setIsOpen(true)
    } else {
      setExpandedCallId(callId)
      setIsOpen(false)
    }
  }

  const [, startTransition] = useTransition()

  const URL = `/users-calls/${userId}`

  const { data, error } = useSWR(URL, (url) =>
    api.get<UserCall>(url).then((res) => res.data.data),
  )

  if (error) {
    return <div>Error ao carregar os dados</div>
  }

  if (!data) {
    return <div>Carregando...</div>
  }

  const handleFormSubmit = (dataForm: CallsFormProps) => {
    const newData = {
      userId: Number(userId),
      ...dataForm,
    }

    const userCallsUrl = '/users-calls'
    startTransition(() =>
      postRevalidateItems<PostUserCall>(userCallsUrl, newData).then(
        (response) => {
          api.get<UserCall>(`/users-calls/${userId}`).then(() => mutate(URL))
          toast.success(response.message)
        },
      ),
    )
  }

  return (
    <>
      <form onSubmit={handleSubmit(handleFormSubmit)}>
        <TextareaWithCounter
          name="call"
          maxLength={2000}
          value={valueTextarea}
          register={register}
        />

        <ButtonAdd
          name="Observação"
          type="button"
          onClick={() => {
            setValueTextarea('')
          }}
        />
      </form>
      <table className="mt-4 w-full text-left">
        <thead>
          <tr>
            <th className="p-4 text-left">Data</th>
            <th className="p-4 text-left">Operador</th>
            <th className="p-4 text-left">Histórico</th>
          </tr>
        </thead>
        <tbody>
          {data.map((call) => (
            <tr className="border-y" key={call.id}>
              <td className="w-1/6 p-4 text-left">
                {new Date(call.created_at).toLocaleDateString()}
              </td>
              <td className="w-3/6 p-4 text-left">
                {toUpperCase(call.user.name)}
              </td>
              <td className="w-2/6 p-4 text-left">
                <div className="relative">
                  <button
                    onClick={() => {
                      toggleExpand(call.id)
                    }}
                    className="flex items-center"
                  >
                    Exibir Histórico
                    <p className={`ml-2 ${isOpen && 'rotate-180'}`}>
                      {IconArrowDownBlack}
                    </p>
                  </button>
                  {expandedCallId === call.id && (
                    <div
                      className={`${
                        expandedCallId === call.id
                          ? 'max-h-40 overflow-hidden'
                          : 'max-h-0'
                      }`}
                    >
                      <textarea
                        value={call.call}
                        className={`mt-2 w-full resize-none rounded-lg border border-gray-400 bg-gray-50 p-2 ${
                          !expandedCallId && 'hidden'
                        }`}
                        rows={5}
                        readOnly
                      />
                    </div>
                  )}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}
