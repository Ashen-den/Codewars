function solve(n) {
  let billFiveHundred = null;
  let remainder = n;
  let denomination = [500,200,100,50,20,10]
  
   //values that are not evenly divisible by given banknotes return -1
   if (n%10>0){return -1};
   
   //Take the floor of each denomination to find number of bills used 
   //then use the remainder to continue through denominations
  denomination.forEach((x,i)=>{
    billFiveHundred += Math.floor(remainder/x)
    remainder = remainder%x
  }) 
  
  return billFiveHundred
  }