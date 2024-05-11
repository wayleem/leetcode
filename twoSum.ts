function twoSum(nums: number[], target: number): number[] {
  let map = new Map<number, number>()
  let answer = [0, 0]
  for (let i = 0; i < nums.length; i++) {
    if (!map.has(nums[i]))
      map.set(nums[i], i)
    const diff = target - nums[i]
    if (map.has(diff) && map.get(diff) !== i)
      answer = [map.get(diff) as number, i]
  }
  return answer
};
