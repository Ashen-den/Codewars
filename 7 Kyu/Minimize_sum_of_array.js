function minSum(arr) {
  let finalSum = 0
  const ordered = [...arr].sort((a,b)=>a-b)
    for(let i=0; i<ordered.length/2;i++){
    finalSum += ordered[i]*ordered[ordered.length-1-i]
    }
  return finalSum
}