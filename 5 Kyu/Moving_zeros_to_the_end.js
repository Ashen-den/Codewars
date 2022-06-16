function moveZeros(arr) {
  let holdZero = []
  while(arr.indexOf(0)!=-1){
    holdZero.push(arr.splice(arr.indexOf(0),1))
  }
  for(let i=0;i<holdZero.length;i++){
    arr.push(holdZero[i][0])
  }
  return arr
}