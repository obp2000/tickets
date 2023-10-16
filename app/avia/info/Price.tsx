'use client'

import { useTicketsStore } from "@/app/store"

export default function Price() {
  const backDate = useTicketsStore.use.backDate?.()
  return <div className="flex items-center justify-center md:p-7
    text-center text-neutral-800 text-3xl font-bold">
    {backDate ? '8 300' : '4 150'} ₽
  </div>
}
