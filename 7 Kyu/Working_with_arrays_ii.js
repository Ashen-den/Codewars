function removeNthElement(arr, n) {
  // Fix it
  var arrCopy = [...arr];
  arrCopy.splice(n, 1); // removes the nth element
  console.log(arr)
  console.log(arrCopy)
  return arrCopy;
}