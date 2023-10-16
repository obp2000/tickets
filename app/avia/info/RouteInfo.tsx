'use client'

import City from './City'
import Route from './Route'
import Bags from './Bags'
import TimeSelector from './TimeSelector'
import { useTicketsStore } from '../../store'
import { timeRanges } from '../../store'

export default function RouteInfo({ back }: { back?: boolean }) {
  const fromCity = useTicketsStore.use.fromCity()
  const toCity = useTicketsStore.use.toCity()
  const startDate = useTicketsStore.use.startDate()
  const backDate = useTicketsStore.use.backDate?.()
  const activeTime = useTicketsStore.use.activeTime?.()
  console.log('activeTime ', activeTime)
  const date = back && backDate ? backDate : startDate
  return <div className="flex flex-col flex-wrap 
    items-start p-7 gap-5 border-r">
    <div className="flex flex-wrap items-center justify-center gap-5">
      <City date={date} time={timeRanges[activeTime || 0][0]}>
        {back ? toCity : fromCity}
      </City>
      <Route from={back ? 'ROV' : 'SVO'} to={back ? 'SVO' : 'ROV'}>
        В пути 1 ч 55 мин
      </Route>
      <City date={date} time={timeRanges[activeTime || 0][1]}>
        {back ? fromCity : toCity}
      </City>
      <Bags />
    </div>
    {!backDate && <TimeSelector />}
  </div>
}