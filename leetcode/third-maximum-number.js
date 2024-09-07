function thirdMaximum(nums) {
    // sorting non-increasing order
    nums = nums.sort((a, b) => b - a); // O(nlogn)
    // returning distinct elements
    //.indexOf(a) itself is O(n) because it has to scan the array to find the first occurrence of a.
    //Since.filter() iterates over each element in nums, this results in O(n²) time complexity in the worst case, because for each element, it performs an O(n) operation.
    nums = nums.filter((a, i) => nums.indexOf(a) === i); // O(n²)
    // in third maximum element is not present in array then returning second maximum number
    if (nums.length < 3) {
        return nums[0];
    }
    return nums[2];
}

const nums = [2, 2, 3, 1];
console.log(thirdMaximum(nums));

// time complexity --> O(n²)
// space complexity --> O(n) --> sorting usage extra space for temporary storage