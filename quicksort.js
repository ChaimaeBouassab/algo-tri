const quickSort = (arr) => {
    if (arr.length <= 1) {
      return arr;
    }
  
    let pivot = arr[0];
    let leftArr = [];
    let rightArr = [];
  
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < pivot) {
        leftArr.push(arr[i]);
      } else {
        rightArr.push(arr[i]);
      }
    }
    return [...quickSort(leftArr), pivot, ...quickSort(rightArr)];
  };
  
  const main = () => {
    const unsortedArray = [5, 2, 9, 3, 6, 1, 8, 4, 7];
    console.log("Unsorted Array:", unsortedArray);
  
    const sortedArray = quickSort(unsortedArray);
    console.log("Sorted Array:", sortedArray);
  };
  
  main();
  