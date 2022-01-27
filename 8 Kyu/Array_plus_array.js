function arrayPlusArray(arr1, arr2) {
  return arr1.concat(arr2).reduce((sum,item) => sum + item, 0); 
}