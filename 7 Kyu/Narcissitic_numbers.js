function isNarcissistic(n) {
  
  return n.toString().split('').map(e=>Math.pow(Number(e),n.toString().length)).reduce((acc,b)=>acc+b) === n ? true : false;
  
  }