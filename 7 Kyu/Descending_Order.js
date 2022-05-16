// Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number. 

function descendingOrder(n){
  //Turn argument into a string, then an array, sort the array, convert back to integer, join the array and return
 const string = n.toString()
 return Number(string.split('').sort((a,b)=>b-a).join(''))
}