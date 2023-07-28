'use client'

import { ButtonAdd } from '@/components/Common/ButtonAdd'
import TextareaWithCounter from '@/components/UI/TextareaWithCounter'
import { AuthContext } from '@/contexts/AuthContext'
import { postRevalidateItems } from '@/functions/postRevalidateItems'
import { PostUserCall, UserCall } from '@/interfaces/UserCalls'
import { zodResolver } from '@hookform/resolvers/zod'
import { useContext, useState, useTransition } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import api from '@/services/server/api'
import useSWR, { mutate } from 'swr'
import { toast } from 'react-toastify'

const schemaCallsForm = z.object({
  call: z.string(),
})

type CallsFormProps = z.infer<typeof schemaCallsForm>

interface CallUserProps {
  userId: string
}

export default function Calls({ userId }: CallUserProps) {
  const { userID } = useContext(AuthContext)
  const [expandedCallId, setExpandedCallId] = useState(null)
  const [valueTextarea, setValueTextarea] = useState('')
  const { handleSubmit, register, reset } = useForm<CallsFormProps>({
    resolver: zodResolver(schemaCallsForm),
    defaultValues: {
      call: '',
    },
  })

  const toggleExpand = (callId: any) => {
    if (expandedCallId === callId) {
      setExpandedCallId(null)
    } else {
      setExpandedCallId(callId)
    }
  }

  const [, startTransition] = useTransition()
  // const callData = data.data
  // console.log(callData)

  console.log(userID)

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
    const userCallsUrl = '/users-calls'
    console.log(dataForm)

    const newData = {
      userId: userID,
      ...dataForm,
    }

    console.log(typeof newData.userId)

    startTransition(() =>
      postRevalidateItems<PostUserCall>(userCallsUrl, newData).then(
        (response) => {
          api.get<UserCall>(`/users-calls/${userId}`).then((res) => mutate(URL))
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
              <td className="w-3/6 p-4 text-left">{call.user.name}</td>
              <td className="w-1/6 p-4 text-left">
                <div className="relative">
                  <button
                    onClick={() => toggleExpand(call.id)}
                    className="flex items-center"
                  >
                    <svg
                      className="mr-2 h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path fillRule="evenodd" d="M6 8l4 4 4-4H6z" />
                    </svg>
                    Exibir Histórico
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
                        className={`mt-2 resize-none rounded border border-gray-400 p-2 ${
                          !expandedCallId && 'hidden'
                        }`}
                        rows={3}
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
