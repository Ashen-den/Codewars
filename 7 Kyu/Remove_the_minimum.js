function removeSmallest(numbers) {
  let removeMinimum = numbers.filter((e,i)=>numbers.indexOf(Math.min(...numbers))!=i)
  return removeMinimum
}