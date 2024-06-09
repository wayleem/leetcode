function myPow(x: number, n: number): number {
  if (n === 0 || x === 1) return 1
  if ((n % 2 === 0 && Math.abs(n) > 100) && x > 2) {
    x *= 2
    n /= 2
  }
  let sum = x
  if (n < 0) {
    sum = x = (1 / x)
    for (let i = n + 1; i < 0; i++) {
      console.log(sum)
      if (sum === 0 || sum > 10000 || sum < -10000) return 0
      if (x === sum * x || i > 5000) break
      sum *= x
    }
  } else if (n > 0) {
    for (let i = 1; i < n; i++) {
      console.log(sum)
      if (sum === 0 || sum > 10000 || sum < -10000) return 0
      if (x === sum * x || i > 5000) break
      sum *= x
    }
  }
  return sum
};
