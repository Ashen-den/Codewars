function sumArray(array) {
  if (array===null || array===undefined) { 
    return 0
  }
  return (array.length > 2) 
    ? array.reduce((a,b)=>a+b,0)-(Math.max(...array)+Math.min(...array)) 
    : 0
}