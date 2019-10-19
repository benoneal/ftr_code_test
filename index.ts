import app from './src/app'
import createCLI from './src/cli'
import createTimer from './src/timer'

app({
  interface: createCLI(),
  timer: createTimer(),
  state: {
    frequencies: new Map(),
    timer_interval: undefined
  }
}).start()