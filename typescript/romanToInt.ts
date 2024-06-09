function romanToInt(s: string): number {
  const map: Record<string, {
    val: number,
    sub: string
  }> = {
    "I": {
      val: 1,
      sub: "",
    },
    "V": {
      val: 5,
      sub: "I"
    },
    "X": {
      val: 10,
      sub: "I"
    },
    "L": {
      val: 50,
      sub: "X"
    },
    "C": {
      val: 100,
      sub: "X"
    },
    "D": {
      val: 500,
      sub: "C"
    },
    "M": {
      val: 1000,
      sub: "C"
    },
  }

  const arr = s.split("")
  let sum = 0

  for (let i = arr.length - 1; i >= 0; i--) {
    const index = i
    const check = map[arr[index]].sub
    if (arr[index - 1] === check || arr[index - 2] === check) {
      let minus = map[arr[index - 1]].val
      if (arr[index - 2] === arr[index - 1]) {
        minus += minus
        i--
      }
      sum += (map[arr[index]].val - minus)
      i--
    } else sum += map[arr[index]].val
  }


  return sum
};
