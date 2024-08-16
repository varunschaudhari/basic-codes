function findDuplicate(arr) {
    const map = {};
    for (const key of arr) {
        if (!map[key]) {
            map[key] = 1;
        } else {
            map[key] += 1;
        }
    }
    const dupArr = [];
    for (const [key, value] of Object.entries(map)) {
        if (value > 1) {
            dupArr.push(key);
        }
    }

    return dupArr;
}

const arr = [1, 2, 3, 4, 2, 5, 6, 3, 7, 8, 4];
console.log(findDuplicate(arr));
