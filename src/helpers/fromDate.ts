import subMonths from 'date-fns/sub_months';
import format from 'date-fns/format';

export function fromDate(): string {
  return format(subMonths(new Date(), 1), 'YYYY-MM-DD');
}

export const defaultFormat = 'DD.MM.YYYY';

export function formatDate(date: string, dateFormat = defaultFormat) {
  return format(new Date(date), dateFormat);
}
