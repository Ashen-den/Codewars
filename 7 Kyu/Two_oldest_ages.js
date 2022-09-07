// return the two oldest/oldest ages within the array of ages passed in.
function twoOldestAges(ages){
  const sortAge = ages.sort((a,b)=>b-a)
  return [sortAge[1], sortAge[0]]
}