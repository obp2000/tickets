import type { ReactNode } from "react"

export default function Airport({ children }: { children: ReactNode }) {
  return <div className="flex-col justify-center items-center gap-1 inline-flex
    text-center text-gray-400 text-sm font-normal leading-tight">
    {children}
    <div className="w-2 h-2 bg-stone-300 rounded-full" />
  </div>
}
