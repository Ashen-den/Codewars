function sumTwoSmallestNumbers(numbers) {  
  return numbers.sort((a,b)=>a-b).reduce((acc,b,i)=> i<2 ? acc+b : acc+0, 0);
}