function isPalindrome(str) {
    // Removes all non-alphanumeric characters from the string
    str = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    let left = 0;
    let right = str.length - 1;

    while (left <= right) {
        while (str[left] === ' ') {
            left++;
        }
        while (str[right] === ' ') {
            right--;
        }

        if (str[left] !== str[right]) {
            return false;
        }

        left++;
        right--;
    }
    return true;
}

const str = "A man, a plan, a canal: Panama";
// const str = "race a car";
console.log(isPalindrome(str));

// time complexity --> O(n)
// space complexity --> O(n)