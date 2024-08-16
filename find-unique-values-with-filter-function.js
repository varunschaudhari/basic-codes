function findUnique(arr) {
    return arr.filter((a, index) => arr.indexOf(a) === index);
}

const arr = [1, 2, 3, 4, 2, 5, 6, 3, 7, 8, 4];
console.log(findUnique(arr));

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