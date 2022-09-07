function missingNo(nums) {
  const arraySorted = [...nums].sort((a,b)=>a-b)
  for (let i=1; i<=100;i++){
    if (arraySorted.indexOf(i)===-1){
      return i
    }
  }
}