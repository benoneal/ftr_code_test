const fibonacci = (n: number) => {
  // While the sequence has duplicate "1"s, this is irrelevant for our purposes
  const sequence = new Set([0, 1])
  let curr = 1, prev = 0, temp

  while (--n > 0){
    temp = curr
    curr = curr + prev
    prev = temp
    sequence.add(curr)
  }

  return sequence
}

const fibSequence = fibonacci(1000)

const isFib = (n: number) => fibSequence.has(n)

export default isFib