function lengthOfLongestSubstring(s: string): number {
  let longest = 0;
  let longestSubstring = ""

  for (let i = 0; i < s.length; i++) {
    if (longestSubstring.includes(s[i])) {
      longestSubstring = longestSubstring.substring(longestSubstring.indexOf(s[i]) + 1)
      longestSubstring += s[i]
    }
    else {
      longestSubstring += s[i]
      if (longestSubstring.length > longest) longest = longestSubstring.length
    }
  }
  return longest
};
