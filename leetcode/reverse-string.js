function reverseString(s) {
    for (let i = 0; i < s.length / 2; i++) {
        const temp = s[i];
        s[i] = s[s.length - i - 1];
        s[s.length - i - 1] = temp;
    }
    return s;
}

// const s = ["h", "e", "l", "l", "o"];
const s = ["H", "a", "n", "n", "a", "h"];
console.log(reverseString(s));
