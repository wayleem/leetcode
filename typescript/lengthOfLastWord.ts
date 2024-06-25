function lengthOfLastWord(s: string): number {
	return (
		s
			.split(" ")
			.filter((str) => str.length > 0)
			.pop()?.length || 0
	);
}
