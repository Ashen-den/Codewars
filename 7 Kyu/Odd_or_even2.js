function oddOrEven(array) {
  return array.length===0 
           ? 'even'
           : array.reduce((acc,b)=>acc+b,0)%2===0 
               ? 'even' 
               : 'odd'
}