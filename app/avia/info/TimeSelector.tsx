import { useTicketsStore } from '../../store'
import TimeSelected from './TimeSelected'

export default function TimeSelector() {
  const activeTime = useTicketsStore.use.activeTime?.()
  const updateActiveTime = useTicketsStore.use.updateActiveTime()
  return < div className="flex items-center flex-wrap gap-3" >
    <TimeSelected from='09:20' to='11.05'
      selected={!activeTime || activeTime === 0}
      changeTimeState={() => updateActiveTime(0)} />
    <TimeSelected from='10:20' to='12:05'
      selected={activeTime === 1}
      changeTimeState={() => updateActiveTime(1)} />
    <TimeSelected from='11:20' to='13:05'
      selected={activeTime === 2}
      changeTimeState={() => updateActiveTime(2)} />
  </div >
}
