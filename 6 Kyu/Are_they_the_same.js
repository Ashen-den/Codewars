function comp(array1, array2){ 
  console.log(array1,array2)
  if(array1 === null || array2 === null){
    return false
  } else if(array1.length === 0 && array2.length === 0){
    return true
  } else if(array1.length === 0 || array2.length === 0){
    return false
  } else {
    for(let i=0; i<array2.length; i++){
      if(array1.includes(Math.sqrt(array2[i]))){
        array1.splice(array1.indexOf(Math.sqrt(array2[i])),1)
      } else {
        return false
      }
    }
    return true
  }
}