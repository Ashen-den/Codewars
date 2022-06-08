function getDivisorsCnt(n){
  let count = 0
  for(let i=1; i<=Math.ceil(n/2); i++){
    if(n%i===0){
      count++
    }
  }
  if (n>1){
    count = count+1
  }
  return count
  }