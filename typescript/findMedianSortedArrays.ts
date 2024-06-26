function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
	let merge = nums1;
	nums2.forEach((v) => merge.push(v));
	merge = merge.sort((a, b) => a - b);

	if (merge.length % 2 === 1) {
		return merge[Math.trunc(merge.length * 0.5)];
	} else {
		return (merge[merge.length * 0.5] + merge[merge.length * 0.5 - 1]) * 0.5;
	}
}
