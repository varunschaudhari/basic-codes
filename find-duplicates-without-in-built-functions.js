function findDuplicates(arr) {
    const duplicates = [];
    
    for (let i = 0; i < arr.length; i++) {
        let isDuplicate = false;

        // Check if the current element is already in the duplicates array
        for (let k = 0; k < duplicates.length; k++) {
            if (arr[i] === duplicates[k]) {
                isDuplicate = true;
                break;
            }
        }

        // If not in duplicates, check the rest of the array for duplicates
        if (!isDuplicate) {
            for (let j = i + 1; j < arr.length; j++) {
                if (arr[i] === arr[j]) {
                    duplicates.push(arr[i]);
                    break;
                }
            }
        }
    }

    return duplicates;
}

const arr = [1, 2, 3, 4, 2, 5, 6, 3, 7, 8, 4];
console.log(findDuplicates(arr));
