function persistence(num) {
  let i = 0
  let z = num
  while (z >= 10){
   z = z.toString().split('').map(e=>Number(e)).reduce((acc,b)=>acc*b,1)
   i++
  }
  return i
}