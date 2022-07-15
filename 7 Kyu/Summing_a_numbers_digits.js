function sumDigits(number) {
  return number.toString().split('').filter(e=>e!=='-').reduce((a,b)=>Number(a)+Number(b),0)
}