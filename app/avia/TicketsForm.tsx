'use client'

import { useCallback, useTransition } from "react"
import { useForm } from "react-hook-form"
import { superstructResolver } from '@hookform/resolvers/superstruct'
import { registerLocale, setDefaultLocale } from "react-datepicker"
import ru from 'date-fns/locale/ru'
import { useRouter } from "next/navigation"

import { struct } from './struct'
import TextField from "./TextField"
import DatePicker from './DatePicker'
import Button from './Button'
import { useTicketsStore } from '../store'
import type { State } from '../store'

registerLocale('ru', ru)
setDefaultLocale('ru')

export type TicketsFormFields = 'fromCity' | 'toCity' | 'startDate' | 'backDate'

export default function TicketsForm() {
  const fromCity = useTicketsStore.use.fromCity()
  const toCity = useTicketsStore.use.toCity()
  const startDate = useTicketsStore.use.startDate()
  const backDate = useTicketsStore.use.backDate?.()
  const {
    control,
    register,
    formState,
  } = useForm<State>({
    defaultValues: { fromCity, toCity, startDate, backDate },
    resolver: superstructResolver(struct),
    mode: 'all',
  })
  console.log('errors ', formState.errors, formState.isValid)
  // console.log('fromCity ', fromCity)
  const updateFromCity = useTicketsStore.use.updateFromCity()
  const updateToCity = useTicketsStore.use.updateToCity()
  const updateStartDate = useTicketsStore.use.updateStartDate()
  const updateBackDate = useTicketsStore.use.updateBackDate()
  const [isPending, startTransition] = useTransition()
  const { push } = useRouter()
  const action = useCallback((formData: FormData) => {
    startTransition(() => {
      updateFromCity(formData.get('fromCity') as string)
      updateToCity(formData.get('toCity') as string)
      updateStartDate(formData.get('startDate') as string)
      updateBackDate(formData.get('backDate') as string)
      push('/avia/info')
    })
  }, [push, updateBackDate, updateFromCity, updateStartDate, updateToCity])

return <form action={action}>
    <div className="bg-[#5C87DB] rounded-t-2xl \
      flex flex-wrap items-center justify-center p-3 gap-3">
      <TextField register={register} errors={formState.errors}
        name='fromCity' label='Откуда *'
        placeholder='Город вылета' />
      <TextField register={register} errors={formState.errors}
        name='toCity' label='Куда *' placeholder='Город прилёта' />
      <DatePicker
        name='startDate'
        control={control}
        label='Туда *'
      />
      <DatePicker
        name='backDate'
        control={control}
        label='Обратно'
        isClearable={true}
      />
    </div>
    <div className="bg-white rounded-b-2xl shadow \
        flex items-center justify-end p-3 pr-[29px]">
      <Button type="submit"
        disabled={!formState.isValid}
      >
        Найти билеты
      </Button>
    </div>
  </form>
}

