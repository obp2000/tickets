import type { ReactNode } from "react"

export default function TopLeftLabel({ children }: { children: ReactNode }) {
  return <div className="absolute top-0 left-0 px-4 py-1 bg-[#8BA5D8]
    rounded-tl-2xl rounded-br-2xl flex flex-col items-center 
    justify-center text-white text-xs font-semibold">
      {children}
  </div>
}
