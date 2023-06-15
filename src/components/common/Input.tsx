import { ChangeEvent } from "react";

interface InputProps {
  label: string;
  name: string;
  type: string;
  placeholder?: string;
  readOnly?: boolean;
  disabled?: boolean;
  value?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}

export function Input(props: InputProps) {
  return (
    <div className={`${props.className} flex flex-col gap-2`}>
      <label className="font-semibold">{props.label}</label>
      <input
        name={props.name}
        type={props.type}
        placeholder={props.placeholder}
        className="h-[48px] w-full rounded-lg border border-gray-400 px-6 outline-none"
        readOnly={props.readOnly}
        disabled={props.disabled}
        value={props.value}
        onChange={props.onChange}
      />
    </div>
  );
}
