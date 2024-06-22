function hammingWeight(n: number): number {
  let ones = 1
  while (Math.trunc(n / 2) !== 0) {
    if (n % 2 === 1) ones++
    n = Math.trunc(n / 2)
  }
  return ones
};
