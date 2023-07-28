'use client'

import { ButtonAdd } from '@/components/Common/ButtonAdd'
import TextareaWithCounter from '@/components/UI/TextareaWithCounter'
import { AuthContext } from '@/contexts/AuthContext'
import { postRevalidateItems } from '@/functions/postRevalidateItems'
import { PostUserCall, UserCall } from '@/interfaces/UserCalls'
import { zodResolver } from '@hookform/resolvers/zod'
import { useContext, useTransition } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import api from '@/services/server/api'
import useSWR from 'swr'

const schemaCallsForm = z.object({
  observation: z.string(),
})

type CallsFormProps = z.infer<typeof schemaCallsForm>

interface CallUserProps {
  userId: string
}

export default function Calls({ userId }: CallUserProps) {
  const { signInData } = useContext(AuthContext)
  const { handleSubmit, register } = useForm<CallsFormProps>({
    resolver: zodResolver(schemaCallsForm),
    defaultValues: {
      observation: '',
    },
  })

  const [, startTransition] = useTransition()
  // const callData = data.data
  // console.log(callData)

  console.log(signInData)

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
      userId: signInData?.id,
      ...dataForm,
    }

    console.log(newData)

    // startTransition(() =>
    //   postRevalidateItems<PostUserCall>(userCallsUrl, dataForm),
    // )
  }

  return (
    <>
      <form onSubmit={handleSubmit(handleFormSubmit)}>
        <TextareaWithCounter
          name="observation"
          maxLength={2000}
          register={register}
        />

        <ButtonAdd name="Observação" type="button" />
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
              <td className="w-1/6 p-4 text-left">{call.call}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}
