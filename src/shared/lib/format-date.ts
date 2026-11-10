export function formatDatePt(isoDate: string): string {
  return new Intl.DateTimeFormat('pt-BR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  }).format(new Date(isoDate));
}

export function formatDateTimePt(date: Date): string {
  return new Intl.DateTimeFormat('pt-BR', {
    dateStyle: 'short',
    timeStyle: 'short'
  }).format(date);
}
