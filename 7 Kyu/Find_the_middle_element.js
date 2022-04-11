function gimme (triplet) {
 
  let arr1 = [...triplet].sort((a,b)=>a-b)
    searchValue = arr1[1]
   return triplet.indexOf(searchValue)
  
}