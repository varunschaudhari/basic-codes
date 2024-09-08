function countVowelSubstrings(word) {
    let vowel = 0;
    let consonant = 0;
    for (const char of word) {
        if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
            vowel += 1;
        } else {
            consonant += 1;
        }
    }
    return { vowel, consonant };
}

const word = "unicornarihan";
console.log(countVowelSubstrings(word));
