function mergeSortedList(leftList, rightList) {
    let sortedList = [];
    while (leftList.length && rightList.length) {
        if (leftList[0] <= rightList[0]) {
            sortedList.push(leftList.shift());
        } else {
            sortedList.push(rightList.shift());
        }
    }
    if (leftList.length) {
        sortedList = sortedList.concat(leftList);
    }
    if (rightList.length) {
        sortedList = sortedList.concat(rightList);
    }
    return sortedList;
}

function mergeSort(unsortedList) {
    const list = [...unsortedList];
    if (list.length <= 1) {
        return list;
    }
    const middle = Math.floor(list.length / 2);
    const leftList = list.slice(0, middle);
    const rightList = list.slice(middle, list.length);
    const leftSortedList = mergeSort(leftList);
    const rightSortedList = mergeSort(rightList);
    return mergeSortedList(leftSortedList, rightSortedList);
}

function main() {
    const unsortedArray = [5, 2, 9, 3, 6, 1, 8, 4, 7];
    console.log("Unsorted Array:", unsortedArray);

    const sortedArray = mergeSort(unsortedArray);
    console.log("Sorted Array:", sortedArray);
}

main();
