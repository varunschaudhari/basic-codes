function findDuplicate(arr) {
    const seenValues = new Set();
    const duplicates = [];
    for (const value of arr) {
        if (seenValues.has(value)) {
            duplicates.push(value);
        } else {
            seenValues.add(value);
        }
    }
    return duplicates;
}

const arr = [1, 2, 3, 4, 2, 5, 6, 3, 7, 8, 4];
console.log(findDuplicate(arr));
