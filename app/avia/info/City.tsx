import type { ReactNode } from "react"

export default function City({
  date,
  time,
  children
}: {
  date: string
  time: string
  children: ReactNode
}) {
  return <div className="flex flex-col items-start justify-center gap-2">
    <div className="text-center text-neutral-800 text-2xl font-bold">
      {time}
    </div>
    <div>
      <div className="text-zinc-600 text-sm font-bold">
        {children}
      </div>
      <div className="text-zinc-600 text-sm font-normal">
        {date}
      </div>
    </div>
  </div>
}