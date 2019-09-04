function split(wholeArray) {
  let firstHalf = []
  let secondHalf = []
  if (wholeArray.length < 2) {
    return wholeArray
  } else {
    if (wholeArray.length % 2 === 0) {
      firstHalf = wholeArray.slice(0, wholeArray.length/2)
      secondHalf = wholeArray.slice(wholeArray.length/2)
    } else {
      firstHalf = wholeArray.slice(0, wholeArray.length/2 + .5)
      secondHalf = wholeArray.slice(wholeArray.length/2 + .5)
    }
  }
  return [firstHalf, secondHalf]
}

function merge(firstArray, secondArray) {
  let sortedArray = []
  while(firstArray.length > 0 && secondArray.length > 0) {
    console.log('')
    if (firstArray[0] < secondArray[0]) {
      sortedArray.push(firstArray.shift())
    } else if (firstArray[0] > secondArray[0]) {
      sortedArray.push(secondArray.shift())
    }
  }
  console.log(' this is the sorted array: ', sortedArray)
  return [...sortedArray, ...firstArray, ...secondArray]
}
