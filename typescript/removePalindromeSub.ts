/*
 * remove only palindromes at a time
 * function removePalindromeSub(s: string): number {
	let counter = 0;

	while (s.length > 0) {
		console.log(s);
		s = trimPalindrome(s);
		counter++;
	}

	return counter;
}

function trimPalindrome(s: string) {
	let longest = "";
	for (let i = 0; i < s.length; i++) {
		let odd = getPalindrome(i, i, s);
		if (odd.length > longest.length) {
			longest = odd;
		}

		let even = getPalindrome(i, i + 1, s);
		if (even.length > longest.length) {
			longest = even;
		}
	}
	console.log(longest);
	return s.replace(longest, "");
}

function getPalindrome(left: number, right: number, s: string) {
	while (left >= 0 && right < s.length && s[left] == s[right]) {
		left--;
		right++;
	}
	return s.substring(left + 1, right);
}*/

// apparently the leetcode is fine with removing all instances of a one character palindrome. answer is only 1 or 2.
function removePalindromeSub(s: string): number {
	if (isPalindrome(0, s.length - 1, s)) return 1;
	return 2;
}

function isPalindrome(left: number, right: number, s: string) {
	while (right > left) {
		if (s[left] == s[right]) {
			left++;
			right--;
		} else {
			return false;
		}
	}
	return true;
}
