export interface IOAPI {
  listen: (handler: (s: string) => void) => void,
  notify: (s: string) => void,
  prompt: (s: string) => void,
  exit: (s: string) => void
}

export interface Timer {
  start: (fn: () => void, n: number) => void,
  stop: () => void
}

export interface InputState {
  frequencies: Map<number, number>,
  timer_interval: number
}