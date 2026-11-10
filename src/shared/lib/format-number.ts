export function formatPctChange(value: number): string {
  return `${new Intl.NumberFormat('pt-BR', {
    signDisplay: 'exceptZero',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(value)}%`;
}
