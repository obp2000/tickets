import { ButtonHTMLAttributes } from "react"

export default function Button({
  children,
  ...props
}:
  ButtonHTMLAttributes<HTMLButtonElement>) {
  return <button type="submit"
    // disabled={!formState.isValid}
    className="w-[158px] h-10 bg-[#5C87DB] rounded-[10px]
      text-center text-white text-sm font-normal
      hover:bg-blue-800 active:text-opacity-50
      disabled:bg-[#B7BAC1] disabled:cursor-not-allowed"
    {...props}
  >
    {children}
  </button>
}