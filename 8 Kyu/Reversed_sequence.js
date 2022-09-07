//reverse number from N to 1, used while loop for practice

const reverseSeq = n => {
  let i = 0
  let reverseNumber = []
  while (i<n) {
    reverseNumber.push(n-i)
    i++
  }
  return reverseNumber
};