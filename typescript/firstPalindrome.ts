function firstPalindrome(words: string[]): string {
	for (let i = 0; i < words.length; i++) {
		const center = Math.trunc(words[i].length / 2);
		if (words[i].length % 2 !== 0) {
			if (isPalindrome(center - 1, center + 1, words[i])) {
				return words[i];
			}
		} else if (isPalindrome(center - 1, center, words[i])) {
			return words[i];
		}
	}

	return "";
}

function isPalindrome(left: number, right: number, s: string): boolean {
	while (left >= 0 && right < s.length) {
		if (s[left] === s[right]) {
			left--;
			right++;
		} else return false;
	}
	return true;
}
