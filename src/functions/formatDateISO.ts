import { formatISO, parse } from 'date-fns'

export const formatDateISO = (value: string) => {
  const parsedDate = parse(value, 'dd/MM/yyyy', new Date())
  const formattedDate = formatISO(parsedDate)

  return formattedDate
}
