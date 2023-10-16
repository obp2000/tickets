'use client'

import { useState } from 'react'

import DatePicker from 'react-datepicker'
import { FormControl, FormHelperText, FormLabel } from '@mui/joy'
import { type Control, useController } from 'react-hook-form'
import type { TicketsFormFields } from './TicketsForm'
import type { State } from '../store'

export default function DatePickerComp({
  wrapperClassName,
  isClearable,
  label,
  ...props
}: {
  wrapperClassName?: string
  isClearable?: boolean
  label: string
  name: TicketsFormFields
  control: Control<State>
}) {
  const {
    field: { onChange, ...field },
    fieldState: { error }
  } = useController(props)
  const [pickerDate, setPickerDate] = useState<Date | null | undefined>(new Date())
  return <FormControl>
    <FormLabel htmlFor={props.name} className="text-white text-[11px] mb-0">
      {label}
    </FormLabel>
    <DatePicker
      {...field}
      showIcon
      dateFormat='dd.MM.yyyy'
      selected={pickerDate}
      onChange={(date) => {
        setPickerDate(date)
        return onChange(date)
      }}
      isClearable={isClearable}
      placeholderText='дд.мм.гг.'
      className='h-10 text-[#5C5C5C] text-sm font-normal rounded-lg'
    />
    {error && <FormHelperText role='alert' className='text-red-700'>
      Обязательное поле
    </FormHelperText>
    }
  </FormControl>
}


// wrapperClassName={wrapperClassName}
// icon={
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     width="1em"
//     height="1em"
//     viewBox="0 0 48 48"
//   >
//     <mask id="ipSApplication0">
//       <g fill="none" stroke="#fff" strokeLinejoin="round" strokeWidth="4">
//         <path strokeLinecap="round" d="M40.04 22v20h-32V22"></path>
//         <path
//           fill="#fff"
//           d="M5.842 13.777C4.312 17.737 7.263 22 11.51 22c3.314 0 6.019-2.686 6.019-6a6 6 0 0 0 6 6h1.018a6 6 0 0 0 6-6c0 3.314 2.706 6 6.02 6c4.248 0 7.201-4.265 5.67-8.228L39.234 6H8.845l-3.003 7.777Z"
//         ></path>
//       </g>
//     </mask>
//     <path
//       fill="currentColor"
//       d="M0 0h48v48H0z"
//       mask="url(#ipSApplication0)"
//     ></path>
//   </svg>
// }
