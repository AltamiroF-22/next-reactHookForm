"use client";

import { FieldErrors, UseFormRegisterReturn } from "react-hook-form";

interface InputProps {
  type?: string;
  id: string;
  placeholder: string;
  required?: boolean;
  errors: FieldErrors;
  register: UseFormRegisterReturn;
}

const Input: React.FC<InputProps> = ({
  type = "text",
  register,
  errors,
  id,
  placeholder,
}) => {
  const errorMessage = errors[id]?.message as string | undefined;

  return (
    <div>
      <input
        className={`peer w-full p-4 font-light  border-2 bg-white rounded-md outline-none transition disabled:opacity-70 disabled:cursor-not-allowed text-slate-950 ${
          errors[id] ? "border-rose-500" : "border-neutral-300"
        }`}
        type={type}
        {...register}
        placeholder={placeholder}
      />
      {errorMessage && <p className="text-rose-500">{errorMessage}</p>}
    </div>
  );
};

export default Input;
