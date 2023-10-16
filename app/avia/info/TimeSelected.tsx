import type { MouseEventHandler } from "react"

export default function TimeSelected({
  from,
  to,
  selected,
  changeTimeState,
}: {
  from: string
  to: string
  selected: boolean
  changeTimeState: MouseEventHandler
}) {
  return <div onClick={changeTimeState}
    className={selected
      ? "bg-[#DDE3EE] rounded-xl px-3 py-2 text-center text-neutral-800 text-lg font-bold"
      : "border border-[#B7BAC1] rounded-xl px-1 py-1 cursor-pointer \
        text-center text-[#5C5C5C] text-lg font-medium"}>
    {from} - {to}
  </div>
}
