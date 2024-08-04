function totalSum(arr) {
    return arr.reduce((acc, ele) => acc + ele);
}

const arr = [1,2,3,4,5,6];
console.log(totalSum(arr));
