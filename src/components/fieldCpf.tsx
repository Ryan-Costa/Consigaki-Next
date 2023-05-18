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
        className={`peer block w-full appearance-none border-0 border-b-2 
        border-white bg-transparent px-0 py-2.5 
        text-sm text-white focus:border-white 
      focus:outline-none focus:ring-0`}
        placeholder=" "
      />
      <label
        htmlFor="pass"
        className={`align-center absolute top-2 -z-10 flex origin-[0]
        -translate-y-6 scale-75 transform gap-2 text-lg text-white 
        duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100
        peer-focus:left-0 
        peer-focus:-translate-y-6 peer-focus:scale-100
        peer-focus:text-white`}
      >
        {IconeUser} CPF
      </label>
    </div>
  );
}
