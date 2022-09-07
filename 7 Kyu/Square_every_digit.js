function squareDigits(num){
  return Number((num+'').split('').map(e=>Number(e)*Number(e)).join(''))
}