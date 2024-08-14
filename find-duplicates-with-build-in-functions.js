function findDuplicates(arr) {
    // indexOf checks index of first element exists in arr or not
    // if index matches means no duplicate otherwise duplicates 
    return arr.filter((ele, index) => arr.indexOf(ele) !== index);
}


const arr = [2, 1, 2, 3, 4, 5, 3, 5, 68, 9, 8, 13, 45, 6, 6];
console.log(findDuplicates(arr));