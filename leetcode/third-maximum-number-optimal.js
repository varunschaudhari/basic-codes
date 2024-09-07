function thirdMaximum(nums) {
    const unique = new Set();

    for (const value of nums) {
        unique.add(value);
    }

    if (unique.size === 2) {  // If only 2 unique elements, return the maximum
        return Math.max(...unique);
    } else if (unique.size === 1) {  // If only 1 unique element, return it
        return [...unique][0];
    }

    let thirdMax = -Infinity;
    let secondMax = -Infinity;
    let firstMax = -Infinity;

    for (const value of unique) {
        if (value > firstMax) {
            thirdMax = secondMax;
            secondMax = firstMax;
            firstMax = value;
        } else if (value > secondMax && value < firstMax) {
            thirdMax = secondMax;
            secondMax = value;
        } else if (value > thirdMax && value < secondMax) {
            thirdMax = value;
        }
    }
    return thirdMax;
}

const nums = [2, 2, 3, 1];
console.log(thirdMaximum(nums));
