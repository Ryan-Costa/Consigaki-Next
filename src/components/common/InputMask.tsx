import { useState } from 'react'
import { CpfMask } from '../Mask/CpfMask'
import { UseFormRegister, FieldError } from 'react-hook-form'
import { IconeUser } from '../../../public/icons'

interface InputMaskProps {
  register?: UseFormRegister<any>
  name: string
  errors?: FieldError | undefined
}

export default function InputMask({ register, name, errors }: InputMaskProps) {
  const [cpfMask, setCpfMask] = useState('')

  const handleChange = (e: any) => {
    setCpfMask(CpfMask(e.target.value))
  }

  return (
    <div className="relative z-0 mb-20 flex flex-col gap-1">
      <input
        {...(register && register(name))}
        name={name}
        type="text"
        maxLength={14}
        className={`
                peer block w-full appearance-none border-0 border-b-2 
                border-white bg-transparent px-0 py-2.5 
                text-sm text-white 
                focus:border-white focus:outline-none focus:ring-0
              `}
        placeholder=" "
        autoComplete="off"
        value={cpfMask}
        onChange={handleChange}
      />
      {errors && <span className="text-sm text-red-500">{errors.message}</span>}
      <label
        htmlFor="pass"
        className={`
              align-center absolute 
              top-2 
              -z-10 flex
              origin-[0] 
              -translate-y-6 
              scale-100 
              transform 
              gap-2 
              text-lg 
              text-white 
              duration-300 
              peer-placeholder-shown:translate-y-0 
              peer-placeholder-shown:scale-100
              peer-focus:left-0 peer-focus:-translate-y-6
              peer-focus:scale-100 
              peer-focus:text-white
            `}
      >
        {IconeUser} CPF
      </label>
    </div>
  )
}
