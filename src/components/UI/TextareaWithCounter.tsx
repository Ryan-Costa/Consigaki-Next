import React, { ChangeEvent, ComponentProps, useState } from 'react'
import { UseFormRegister } from 'react-hook-form'

type TextareaWithCounterProps = ComponentProps<'textarea'> & {
  maxLength: number
  name: string
  register?: UseFormRegister<any>
}

const TextareaWithCounter: React.FC<TextareaWithCounterProps> = ({
  maxLength,
  name,
  register,
}) => {
  const [text, setText] = useState('')

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = event.target
    setText(value)
  }
  return (
    <>
      <div className="flex flex-col items-end gap-2">
        <textarea
          name={name}
          {...(register && register(name))}
          className="h-[176px] w-full resize-none rounded-lg border border-gray-400 bg-gray-50 px-4 py-4 outline-none"
          value={text}
          onChange={handleChange}
          maxLength={maxLength}
        />
        <div className="flex w-full justify-between ">
          <span
            onClick={() => setText('')}
            className="cursor-pointer text-gray-600 hover:text-gray-900"
          >
            Limpar
          </span>
          <span className="text-gray-600">
            {maxLength - text.length}/2000 caracteres restantes
          </span>
        </div>
      </div>
    </>
  )
}

export default TextareaWithCounter
