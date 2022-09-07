
function sumDigNthTerm(initval, patternl, nthterm) {
  //create an array with the pattern 
  let pattern = []  
  for(let i = 0; i<nthterm; i++){
      pattern.push(patternl[i%patternl.length])
    }
  //add initval to array
  pattern.unshift(initval)
  //add the pattern to the initial value and continue summing up the array
  for(let i = 0; i<=nthterm;i++){
    i!=0 ? pattern[i] = pattern[i] + pattern[i-1] : pattern[i] = initval
  }
  //add the nthterms individual digits together
  return pattern[nthterm-1].toString().split('').map(e=>Number(e)).reduce((acc,b)=>acc+b)