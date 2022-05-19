//Trouble figuring out how to get the last digit, google says use mod 10 perfect

function incrementer(nums) { 
  return nums.map((e,i) => (e+i+1)%10)
}