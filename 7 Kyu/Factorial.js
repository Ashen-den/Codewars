function factorial(n){
  
  const factorialArray = Array.from(Array(n).keys())
  if( n>12 || n<0 ){
    throw new RangeError()
  } 
  return n===0 
    ? 1
    : factorialArray.map(e=>e+1).sort((a,b)=>b-a,0).reduce((a,b)=>a*b,1)
}