function minimumOperations(nums: number[]): number {
	let operations = 0;
	nums.forEach((v) => {
		if (v % 3 !== 0) operations++;
	});

	return operations;
}
