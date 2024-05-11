function singleNumber(nums: number[]): number {
  const map = new Map<number, number>()
  let answer = 0
  nums.forEach((x) => {
    if (!map.has(x))
      map.set(x, 1)
    else map.set(x, map.get(x) as number + 1)
  })
  map.forEach((value, key) => {
    if (value === 1)
      answer = key
  })
  return answer
};
