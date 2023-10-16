import { date, nonempty, nullable, object, optional, string, union } from 'superstruct'

export const struct = object({
  fromCity: nonempty(string()),
  toCity: nonempty(string()),
  startDate: union([date(), string()]),
  backDate: optional(nullable(union([date(), string()]))),
})
