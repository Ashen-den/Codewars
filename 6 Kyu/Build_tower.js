function towerBuilder(nFloors) {
  let array = []
  let bottomFloor = 1+2*nFloors-2
  for(let i = 0; i<nFloors; i++){
    array.unshift(`${' '.repeat(i)}${'*'.repeat(bottomFloor-2*i)}${' '.repeat(i)}`)
  }
  return array
}