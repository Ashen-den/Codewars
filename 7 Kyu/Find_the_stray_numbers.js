function stray(numbers) {
  return numbers.sort((a,b)=>a-b).filter((e,i,a)=>e!=a[1])[0]
}