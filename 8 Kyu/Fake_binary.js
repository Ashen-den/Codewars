function fakeBin(x){
  return x.split('').map(e=>e>=5 ? 1 : 0).join('')
}