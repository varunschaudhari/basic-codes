function findUnique(arr) {
    const seenValues =  new Set();
    const unique = [];

    for (const value of arr) {
        if (!seenValues.has(value)) {
            unique.push(value);
            seenValues.add(value);
        }
    }

    return unique;
}

const arr = [1, 2, 3, 4, 2, 5, 6, 3, 7, 8, 4];
console.log(findUnique(arr));
