function mergeArrays(arr1, arr2) {
  let array3 = arr1.concat(arr2);
array3 = [...new Set([...arr1,...arr2])]
return array3.sort((a,b)=>a-b)
}