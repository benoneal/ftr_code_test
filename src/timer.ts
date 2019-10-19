import {Timer} from '../typings/interfaces'

const createTimer = (): Timer => {
  let timer: any
  const start = (output: () => void, interval: number) => timer = setInterval(output, interval)
  const stop = () => clearInterval(timer)
  return {start, stop}
}

export default createTimer