function findOdd(A) {
  const count = {};
  for (const num of A) {
    count[num] ? count[num] += 1 : count[num] = 1;
  }
  for (const [key,value] of Object.entries(count)) {
    if(value%2!=0){
      return Number(key)
    }
  }
}