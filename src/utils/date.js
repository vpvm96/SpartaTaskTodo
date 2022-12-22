import dayjs from "dayjs"

const FORMAT = "YYYY.MM.DD HH:mm"

export const now = () => {
  const now = dayjs()
  return now.format(FORMAT)
}
