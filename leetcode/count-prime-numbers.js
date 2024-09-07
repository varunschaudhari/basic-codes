function countPrime(n) {
    let count = 0;
    let seen = new Uint8Array(n); // The Uint8Array typed array represents an array of 8-bit unsigned integers. 

    for (let num = 2; num < n; num++) {
        if (seen[num]) {
            continue;
        }

        count++;

        for (let mult = num * num; mult < n; mult += num) {
            seen[mult] = 1; // This line should marked multiple of num as non - prime;
        }
    }
    return count;
}

console.log(countPrime(100));

// time complexity -->  O(n log log n)
// space complexity --> O(n), The space complexity is O(n) because of the seen array, which requires storage for n elements.