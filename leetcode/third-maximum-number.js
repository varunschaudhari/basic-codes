function thirdMaximum(nums) {
    nums = nums.sort((a, b) => b - a);
    nums = nums.filter((a, i) => nums.indexOf(a) === i);

    if (nums.length < 3) {
        return nums[0];
    }

    return nums[2];
}

const nums = [2, 2, 3, 1];
console.log(thirdMaximum(nums));
