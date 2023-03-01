
import { Date as gDate } from '@buf/googleapis_googleapis.bufbuild_es/google/type/date_pb.js'

export function serializeDate(date?: Date): gDate | undefined {
  if (!date) {
    return
  }
  return new gDate({
    year: date.getFullYear(),
    month: date.getMonth() + 1,
    day: date.getDate(),
  })
}

export function parseDate(date?: gDate): Date | undefined {
  if (!date) {
    return
  }
  return new Date(date.year, date.month - 1, date.day)
}

