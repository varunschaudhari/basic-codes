function fib(n) {
    let temp = 0;
    let first = 0;
    let second = 1;
    for (let i = 1; i < n; i++) {
        temp = first + second;
        first = second;
        second = temp;
        console.log('temp : ', i + 1, temp);
    }
    return temp;
}

console.log(fib(2));
