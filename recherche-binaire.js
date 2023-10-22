function binarySearch(sortedArray, key) {
    let start = 0;
    let end = sortedArray.length - 1;

    while (start <= end) {
        let middle = Math.floor((start + end) / 2);

        if (sortedArray[middle] === key) {
            return middle;
        } else if (sortedArray[middle] < key) {
            start = middle + 1;
        } else {
            end = middle - 1;
        }
    }
    return -1;
}

function main() {
    const sortedArray = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
    const keyToFind = 13;
    const result = binarySearch(sortedArray, keyToFind);

    if (result !== -1) {
        console.log(`Key ${keyToFind} found at index ${result}.`);
    } else {
        console.log(`Key ${keyToFind} was not found in the array.`);
    }
}

main();
