function longestPalindrome(s: string): string {
	let longest: string = "";

	for (let i = 0; i < s.length; i++) {
		let odd = getPalindrome(i, i, s);
		if (odd.length > longest.length) longest = odd;

		let even = getPalindrome(i, i, s);
		if (even.length > longest.length) longest = even;
	}

	return longest;
}

function getPalindrome(left: number, right: number, s: string) {
	while (left > 0 && right < s.length && s[left] == s[right]) {
		left--;
		right++;
	}
	return s.substring(left + 1, right);
}
