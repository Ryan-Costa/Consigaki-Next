"use client";

import { useState } from "react";
import { IconePass, IconeUser } from "../../public/icons";

export function FieldCpf() {
  const [cpf, setCpf] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    const numericValue = value.replace(/\D/g, "");

    const limitedValue = numericValue.slice(0, 11);

    const formattedValue = formatCpf(limitedValue);

    setCpf(formattedValue);
  };

  const formatCpf = (value: string) => {
    const regex = /^(\d{3})(\d{3})(\d{3})(\d{2})$/;
    const match = value.match(regex);

    if (match) {
      return `${match[1]}.${match[2]}.${match[3]}-${match[4]}`;
    }

    return value;
  };

  return (
    <div className="relative z-0 mb-6">
      <input
        type="text"
        value={cpf}
        onChange={handleChange}
        maxLength={14}
        className={`block py-2.5 px-0 w-full text-sm text-white 
      bg-transparent border-0 border-b-2 border-white 
      appearance-none focus:outline-none focus:ring-0 
      focus:border-white peer`}
        placeholder=" "
      />
      <label
        htmlFor="pass"
        className={`flex gap-2 align-center absolute text-lg text-white
        duration-300 transform -translate-y-6 scale-75 top-2 -z-10 
        origin-[0] peer-focus:left-0 peer-focus:text-white
        peer-placeholder-shown:scale-100 
        peer-placeholder-shown:translate-y-0 peer-focus:scale-100
        peer-focus:-translate-y-6`}
      >
        {IconeUser} CPF
      </label>
    </div>
  );
}
