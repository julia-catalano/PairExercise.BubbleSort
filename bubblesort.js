function swap(arr) {
  let firstEl = arr[0];
  let secondEl = arr[1];
  arr[0] = secondEl;
  arr[1] = firstEl;
  console.log("in swap", arr);
  return arr;
}

function bubbleSort(originalArr) {
  console.log("original arr", originalArr);
  let arr = originalArr.slice();
  let swapCount = 0;
  let comparisons = 0;
  for (let j = 0; j < arr.length; j++) {
    for (let i = 0; i < arr.length; i++) {
      comparisons++;
      if (arr[i] > arr[i + 1]) {
        const swapped = swap([arr[i], arr[i + 1]]);
        arr[i] = swapped[0];
        arr[i + 1] = swapped[1];
        swapCount++;
      }
    }
    console.log(
      "array: ",
      arr,
      "swap count: ",
      swapCount,
      "comparisons: ",
      comparisons,
      "\n"
    );
  }
  return arr;
}
// we now no longer need swapCount and comparisons for the specs to run but they are good for self-documentation
