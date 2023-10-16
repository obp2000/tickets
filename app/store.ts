import { create, StoreApi, UseBoundStore } from "zustand"
import { devtools } from 'zustand/middleware'

export type State = {
  fromCity: string
  toCity: string
  startDate: string
  backDate?: string
  activeTime?: number,
}

type Action = {
  updateFromCity: (fromCity: State['fromCity']) => void
  updateToCity: (toCity: State['toCity']) => void
  updateStartDate: (startDate: State['startDate']) => void
  updateBackDate: (toCity: State['backDate']) => void
  updateActiveTime: (activeTime: State['activeTime']) => void
}

type WithSelectors<S> = S extends { getState: () => infer T }
  ? S & { use: { [K in keyof T]: () => T[K] } }
  : never

const createSelectors = <S extends UseBoundStore<StoreApi<object>>>(
  _store: S
) => {
  let store = _store as WithSelectors<typeof _store>
  store.use = {}
  for (let k of Object.keys(store.getState())) {
    ; (store.use as any)[k] = () => store((s) => s[k as keyof typeof s])
  }
  return store
}

export const useTicketsStoreBase = create<State & Action>((set) => ({
  fromCity: '',
  toCity: '',
  startDate: '',
  backDate: undefined,
  activeTime: undefined,
  updateFromCity: (fromCity) => set(() => ({ fromCity })),
  updateToCity: (toCity) => set(() => ({ toCity })),
  updateStartDate: (startDate) => set(() => ({ startDate })),
  updateBackDate: (backDate) => set(() => ({ backDate })),
  updateActiveTime: (activeTime) => set(() => ({ activeTime })),
}))

export const useTicketsStore = createSelectors(useTicketsStoreBase)

export const timeRanges =
  [['09:20', '11:05'], ['10:20', '12:05'], ['11:20', '13:05']]
