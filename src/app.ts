import messages from './messages'
import isFib from './fibonacci'
import {IOAPI, InputState, Timer} from '../typings/interfaces'

interface AppDependencies {
  interface: IOAPI,
  state: InputState,
  timer: Timer
}

const isNumber = (n: string | number) => typeof n === 'number' || (!isNaN(Number(n)) && !isNaN(parseInt(n)))
const descendingTupleSort = ([, a], [, b]) => b - a
const tupleJoin = ([a, b]) => `${a}:${b}`

const app = ({
  interface: {
    listen, 
    notify, 
    prompt, 
    exit
  },
  state: {
    frequencies,
    timer_interval
  },
  timer
}: AppDependencies) => {
  const outputHistogram = () => {
    const result = []
    frequencies.forEach((v, k) => result.push([k, v]))
    notify(result.sort(descendingTupleSort).map(tupleJoin).join(', '))
  }

  const inputHandlers = {
    resume: (input: string) => {
      timer_interval = (parseInt(input) * 1000) || timer_interval
      timer.start(outputHistogram, timer_interval)
      prompt(messages.TIMER_STARTED)
    },
    halt: () => {
      timer.stop()
      prompt(messages.TIMER_STOPPED)
    },
    quit: () => {
      timer.stop()
      outputHistogram()
      exit(messages.EXIT)
    }
  }

  const handleSetTimerInterval = (input: string) => {
    timer_interval = (parseInt(input) * 1000) || timer_interval
    timer.start(outputHistogram, timer_interval)
    prompt(messages.NUMBER_PROMPT)
  }

  const handleNumber = (input: string) => {
    const number = parseInt(input)
    frequencies.set(number, (frequencies.get(number) || 0) + 1)
    if (isFib(number)) notify(messages.IS_FIB)
    prompt(messages.NUMBER_PROMPT)
  }

  const handleError = () => prompt(messages.BAD_INPUT)

  const handleInput = (input: string) => {
    const handler = isNumber(input) && !isNumber(timer_interval) 
      ? handleSetTimerInterval 
      : isNumber(input)
      ? handleNumber
      : inputHandlers.hasOwnProperty(input)
      ? inputHandlers[input]
      : handleError

    handler(input)
  }

  return {
    start: () => {
      listen(handleInput)
      prompt(messages.TIMER_INTERVAL)
    }
  }
}

export default app