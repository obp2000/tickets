import type { ReactNode } from "react"

export default function AirCompany({
  image,
  children
}: {
  image: string
  children: ReactNode
}) {
  return <div className="flex flex-col items-center justify-center p-5
    text-zinc-600 text-lg font-normal">
    <div className="w-[39px] h-[39px] rounded-full
      bg-no-repeat bg-slate-200 "
      style={{ backgroundImage: `url(${image})` }}>
    </div>
    {children}
  </div>
}