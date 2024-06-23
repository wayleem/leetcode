function containsDuplicate(nums: number[]): boolean {
  const hash: number[] = [];

  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if (hash[n]) {
      return true;
    } else {
      hash[n] = 1;
    }
  }

  return false;
}
