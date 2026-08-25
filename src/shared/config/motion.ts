export const revealDelays = [
  'delay-0',
  'delay-75',
  'delay-150',
  'delay-200',
  'delay-300',
  'delay-500'
] as const;

export function revealDelay(index: number) {
  return revealDelays[Math.min(index, revealDelays.length - 1)];
}
