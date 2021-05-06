function longestPalindromicSubstring(str) {
    let longestPalindrome = str[0];

    // generate every sub string 1 at a time and check
    // if it is a palindrome and if it is longer than
    // the current longest
    for (let i = 0; i < str.length; i++) {
        for (let j = i + 1; j < str.length + 1; j++) {
            let subStr = str.slice(i, j);

            if (subStr.length > longestPalindrome.length && isPalindrome(subStr)) {
                longestPalindrome = subStr;
            }
        }
    }
    return longestPalindrome;
}

