function findDuplicate(arr) {
    arr.sort((a, b) => a - b);
    const duplicates = [];

    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] === arr[i + 1] && !duplicates.includes(arr[i])) {
            duplicates.push(arr[i]);
        }
    }

    return duplicates;
}

const arr = [1, 2, 3, 4, 2, 5, 6, 3, 7, 8, 4];
console.log(findDuplicate(arr));
