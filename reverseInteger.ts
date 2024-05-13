function reverse(x: number): number {
  let negative = false
  let str = x.toString()
  if (str.charAt(x[0]) === "-") {
    str = str.substring(1)
    negative = true
  }

  let sum = 0
  for (let i = 0; i < str.length; i++) {
    sum += parseInt(str[i]) * Math.pow(10, i)
  }

  const range = 2147483648
  if (sum > (range - 1) || sum < (-1 * range)) return 0

  if (negative) return (sum * -1)
  else return sum
};
