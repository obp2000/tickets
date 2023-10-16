import { FormControl, FormLabel, Input, FormHelperText } from '@mui/joy'
import type { FieldErrors, UseFormRegister } from 'react-hook-form'
import type { TicketsFormFields } from './TicketsForm'
import type { State } from '../store'

export default function TextField({
  register,
  errors,
  name,
  label,
  placeholder
}: {
  register: UseFormRegister<State>
  errors: FieldErrors<State>
  name: TicketsFormFields
  label: string,
  placeholder: string
}) {
  return <FormControl>
      <FormLabel htmlFor={name} className="text-white text-[11px] mb-0">
        {label}
      </FormLabel>
    <input id={name} placeholder={placeholder} {...register(name)}
        className="h-10 text-[#5C5C5C] font-normal text-sm rounded-lg p-2.5" />
      {errors[name] && <FormHelperText role='alert' className='text-red-700'>
        Обязательное поле
      </FormHelperText>}
    </FormControl>
}
