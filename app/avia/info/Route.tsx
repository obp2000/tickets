import type { ReactNode } from 'react'
import Airport from './Airport'

export default function Route({
  from,
  to,
  children
}: {
  from: string
  to: string
  children: ReactNode
}) {
  return <div className="flex flex-col">
    <div className="rounded-lg flex items-center justify-center gap-3">
      <Airport>
        {from}
      </Airport>
      <div className="w-[269px] h-0 border border-gray-400" />
      <Airport>
        {to}
      </Airport>
    </div>
    <div className="text-center text-gray-400 text-sm font-normal leading-tight">
      {children}
    </div>
  </div>
}
