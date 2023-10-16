'use client'

import { useTicketsStore } from '../../store'
import MainInfo from './MainInfo'

export default function Main() {
  const backDate = useTicketsStore.use.backDate?.()
  return <div className='flex flex-col flex-wrap'>
    <MainInfo />
    {backDate && <MainInfo back />}
  </div>
}
